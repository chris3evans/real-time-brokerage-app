import { View } from "@/components/View/View";
import { useParams } from "react-router-dom";

export const AssetProfile = () => {
  const { name } = useParams<{ name: string }>();

  return <View>Asset Profile will be rendered here for {name}</View>;
};
