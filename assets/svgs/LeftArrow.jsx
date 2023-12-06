import * as React from "react";
import { SvgXml } from "react-native-svg";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function LeftArrow() {
  const navigation = useNavigation();
  const svgMarkUp = `<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect opacity="0.3" width="2.5" height="17.5" rx="1" transform="matrix(0 -1 -1 0 24.0391 16.25)" fill="#0F1B24"/>
  <path d="M16.1729 21.6161C16.6611 22.1043 16.6611 22.8957 16.1729 23.3839C15.6848 23.872 14.8933 23.872 14.4052 23.3839L6.90518 15.8839C6.43196 15.4107 6.4154 14.6487 6.86762 14.1553L13.7426 6.65534C14.2091 6.14644 14.9998 6.11207 15.5087 6.57856C16.0176 7.04505 16.052 7.83576 15.5855 8.34466L9.51924 14.9624L16.1729 21.6161Z" fill="#0F1B24"/>
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkUp} width="301px" />;

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <SvgImage />
    </Pressable>
  );
}
