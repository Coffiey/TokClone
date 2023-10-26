import { View, Text } from "react-native";
import { useEffect, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { clearCommentModel } from "../../redux/actions/model";
import CommentModel from "./comment";

const Model = () => {
  const modelState = useSelector((state) => state.model);
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modelState.open && bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }, [modelState]);

  const renderContent = () => {
    switch (modelState.modelType) {
      case 0:
        return <CommentModel post={modelState.data} />;
      default:
        return <></>;
    }
  };

  const handleOnClose = () => {
    dispatch(clearCommentModel());
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["45%"]}
      index={-1}
      handleHeight={40}
      enablePanDownToClose
      onClose={handleOnClose}
    >
      {renderContent()}
    </BottomSheet>
  );
};

export default Model;
