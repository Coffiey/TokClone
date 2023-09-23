import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/native";
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
        console.log(galleryStatus);
        try {
          const userGalleryMedia = await MediaLibrary.getAssetsAsync({
            sortBy: "creationTime",
            mediaType: "photo",
          });
          setGalleryItem(userGalleryMedia.assets);
          console.log(userGalleryMedia.assets[0].uri);
        } catch (error) {
          console.error("Error accessing media library:", error);
          // Handle the error as needed
        }
      }
    };
    permisions();
  }, []);

  const recordVideo = async () => {
    if (cameraRef) {
      try {
        const options = {
          maxDuration: 20,
          quality: Camera.constants.VideoQuality["480"],
        };
        const videoRecordPromise = cameraRef.recordAsync(options);
        if (videoRecordPromise) {
          const data = await videoRecordPromise();
          const sourse = data.uri;
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const stopVideo = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
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

  const pickFromGallery = async () => {
    let results = await ImagePicker.launchImageLibraryAsync();
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
      <View style={styles.bottomBar}>
        <View stlye={styles.recordButtonContainer}>
          <TouchableOpacity
            disabled={!isCameraReady}
            onLongPress={() => recordVideo()}
            onPressOut={() => stopVideo()}
            style={styles.recordButton}
          />
        </View>
        <View style={styles.galleryButtonContainer}>
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
        </View>
      </View>
    </View>
  );
}
