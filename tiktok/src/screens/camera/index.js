import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function CameraScreen() {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);

  const [galleryItems, setGalleryItem] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(
    Camera.Constants.FlashMode.off
  );
  const [isCameraReady, setIsCameraReady] = useState();
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  useEffect(() => {
    const permisions = async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status == "granted");

      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermissions(cameraStatus.status == "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(cameraStatus.status == "granted");

      if (galleryStatus.status === "granted") {
        try {
          const userGalleryMedia = await MediaLibrary.getAssetsAsync({
            sortBy: "creationTime",
            mediaType: "photo",
          });
          setGalleryItem(userGalleryMedia.assets);
        } catch (error) {
          console.error("Error accessing media library:", error);
          // Handle the error as needed
        }
      }
    };
    permisions();
  }, []);

  const recordVideo = async (ref) => {
    if (ref) {
      try {
        const options = {
          maxDuration: 20,
          quality: Camera.Constants.VideoQuality["480"],
        };
        console.log(ref._cameraHandle);
        const videoRecordPromise = ref.recordAsync(options);
        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          const source = data.uri;
          let sourceThumb = await generateThumbnail(source);
          navigation.navigate("SavePost", { source, sourceThumb });
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const stopVideo = async (ref) => {
    if (ref) {
      ref.stopRecording();
    }
  };

  if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
    console.log(hasAudioPermissions);
    return (
      <View style={{ marginTop: 30 }}>
        <Text>NO PERMISISONS</Text>
      </View>
    );
  }

  const generateThumbnail = async (source) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(source, {
        time: 1000,
      });
      console.log(source);
      return uri;
    } catch (e) {
      console.warn("😎", e);
    }
  };

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
      aspect: [16, 9],
    });
    if (!result.canceled) {
      let sourceThumb = await generateThumbnail(result.assets[0].uri);
      navigation.navigate("SavePost", {
        source: result.assets[0].uri,
        sourceThumb,
      });
    }
  };

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          ref={(ref) => setCameraRef(ref)}
          style={styles.camera}
          raito={"16:9"}
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      )}
      <View style={styles.sideBarContainer}>
        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraType(
              cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }
        >
          <Feather
            name='refresh-ccw'
            size={24}
            color={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraFlash(
              cameraFlash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            )
          }
        >
          <Feather
            name={
              cameraFlash === Camera.Constants.FlashMode.off ? "zap-off" : "zap"
            }
            size={24}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBar}>
        <View stlye={styles.recordButtonContainer}>
          <TouchableOpacity
            disabled={!isCameraReady}
            onLongPress={() => recordVideo(cameraRef)}
            onPressOut={() => stopVideo(cameraRef)}
            style={styles.recordButton}
          />
        </View>
        <View style={styles.galleryButtonContainer}>
          {galleryItems.length !== 0 && (
            <TouchableOpacity
              style={styles.galleryButton}
              onPress={() => pickFromGallery()}
            >
              {galleryItems.length && (
                <Image
                  style={styles.galleryButtonImage}
                  source={{ uri: galleryItems[0].uri }}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
