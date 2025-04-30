import React from 'react';
import { Box } from "@/component/Box";
import { Pressable } from "@/component/Pressable";
import { Image } from "@/component/Image";
import { Images } from "@/assets";
import { DeviceHelper } from "@/helper";
import { Button } from "@/component/Button";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/style";
import { Asset, launchCamera, launchImageLibrary } from "react-native-image-picker";

export interface ImageSelectionButtonProps {
  onPress: () => void;
  onAttachmentPress: (asset:Asset) => void;
}

export const ImageSelectionButton:React.FC<ImageSelectionButtonProps> = ({
  onPress,
  onAttachmentPress
}:ImageSelectionButtonProps) =>{
  const {colors} =useTheme<Theme>()

  const onCameraPress = async () =>{
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.4,
      cameraType:'back'
    });
    if (result.assets) {
      onAttachmentPress(result.assets[0]);
    }
  }
  const onLibraryPress = async () =>{
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.4,
      selectionLimit: 1,
    });
    if (result.assets) {
      onAttachmentPress(result.assets[0]);
    }
  }

  return(
    <Box
      flexDirection={'row'}
      paddingHorizontal={'sr'}
      position={'absolute'}
      backgroundColor={'white'}
      bottom={10}
    >
      <Box
        flex={0.4}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        marginHorizontal={'m'}
      >
        <Pressable
          onPress={onCameraPress}
          padding={'e6'}
        >
          <Image
            source={Images.camera_lien}
            height={DeviceHelper.calculateHeightRatio(26)}
            width={DeviceHelper.calculateWidthRatio(26)}
            tintColor={colors.primaryColor}
          />
        </Pressable>

        <Box height={30} backgroundColor={'primaryColor'} width={1} />
        <Pressable
          onPress={onLibraryPress}
          padding={'e6'}
        >
          <Image
            source={Images.photo}
            height={DeviceHelper.calculateHeightRatio(26)}
            width={DeviceHelper.calculateWidthRatio(26)}
            tintColor={colors.primaryColor}
          />
        </Pressable>

      </Box>
      <Box
        flex={0.6}
        flexDirection={'row'}
        justifyContent={'space-between'}
        marginStart={'sr'}
      >
        <Button
          height={39}
          label={'Save'}
          borderRadius={5}
          fontSize={15}
          onPress={onPress}
        />

      </Box>
    </Box>
  )
}
