import { useSafeAreaInsets } from "react-native-safe-area-context";

const useMaterialNavBarHeight = (withoutBottomTabs) => {
  const { bottom, top } = useSafeAreaInsets();
  return bottom + (withoutBottomTabs ? 0 : 80);
};

export default useMaterialNavBarHeight;
