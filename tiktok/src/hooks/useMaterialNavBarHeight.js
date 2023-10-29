import { useSafeAreaInsets } from "react-native-safe-area-context";

const useMaterialNavBarHeight = (withoutBottomTabs) => {
  const { bottom, top } = useSafeAreaInsets();
  return bottom - Math.floor(top) + (withoutBottomTabs ? 0 : 20);
};

export default useMaterialNavBarHeight;
