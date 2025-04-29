import React from 'react';
import {Box, Text} from '@/component';
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
        padding={'e6'}
        borderRadius={12}
        borderWidth={1}
        height={DeviceHelper.calculateHeightRatio(120)}
        borderColor={'primaryColor'}
      >
          <Text
            fontSize={DeviceHelper.calculateFontSize(13.5)}
            color={'eerieBlack'}
            fontFamily={fonts.Merienda_bold}
            textAlign={'center'}
            marginTop={'sr'}
            fontWeight={'800'}
          >
            {'item.monitorName'}
          </Text>

      </Box>
    </Box>
  )
}
