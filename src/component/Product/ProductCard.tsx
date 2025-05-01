import React from 'react';
import {Box, Image, Text} from '@/component';
import {DeviceHelper} from '@/helper';
import {fonts} from '@/style';
import {GetProductModel} from '@/model';

export interface ProductCardProps {
  onPress: () => void;
  item: GetProductModel;
}

export const ProductCard:React.FC<ProductCardProps> = ({onPress,item}:ProductCardProps) =>{
  return(
    <Box
      marginTop={'sr'}
      marginHorizontal={'s'}
      width={'29%'}
      justifyContent={'center'}
    >
      <Box
        borderRadius={12}
        borderWidth={1}
        flexGrow={1}
        height={DeviceHelper.calculateHeightRatio(155)}
        alignItems={'center'}
        borderColor={'primaryColor'}
      >
        <Image
          source={{uri:item.item_image}}
          padding={'e6'}
          width={DeviceHelper.calculateWidthRatio(82)}
          height={DeviceHelper.calculateHeightRatio(100)}
          resizeMode={'contain'}
        />
          <Text
            fontSize={DeviceHelper.calculateFontSize(12)}
            color={'eerieBlack'}
            fontFamily={fonts.Merienda_bold}
            paddingHorizontal={'e6'}
            paddingBottom={'es'}
            fontWeight={'800'}
            style={{
              position:'absolute',
              bottom:0
            }}
          >
            {item.item_name}
          </Text>

      </Box>
    </Box>
  )
}
