import React from 'react';
import { Box, Pressable, Text } from "@/component";
import { DeviceHelper } from "@/helper";
import { fonts } from "@/style";
import moment from "moment";
import { RequestModel } from "@/model";

export interface RequestCardProps {
  onPress:()=>void
  item:RequestModel
}

export const RequestCard:React.FC<RequestCardProps> = ({onPress,item}:RequestCardProps) =>{
  return(
    <Pressable
      onPress={onPress}
      marginTop={'ssr'}
      elevation={1}
      backgroundColor={'white'}
      flexDirection={'row'}
      marginHorizontal={'sr'}
      borderRadius={8}
      alignItems={'center'}
      borderWidth={0.5}
      borderColor={'lightGray'}
    >
      <Box
        flex={0.15}
        alignItems={'center'}
        justifyContent={'center'}
        margin={'e6'}
        height={DeviceHelper.calculateHeightRatio(58)}
        borderRadius={5}
        style={{backgroundColor:'#F1F4F9'}}
      >
        <Text
          fontSize={15}
          fontFamily={fonts.medium}
          color={'blue'}
        >
          {moment(item.request_at).format('DD')}
        </Text>
        <Text
          fontSize={15}
          fontFamily={fonts.regular}
          color={'gray'}
          marginTop={'es'}
        >
          {moment(item.request_at).format('MMM')}
        </Text>
      </Box>
      <Box
        flex={0.85}
        flexDirection={'row'}
        justifyContent={'space-between'}
        paddingHorizontal={'s'}
        alignItems={'center'}
      >
        <Box flex={0.77}>
          <Text
            fontSize={15}
            fontFamily={fonts.medium}
            color={'blue'}
            letterSpacing={0.25}
          >
            {item.item_name}
          </Text>
          <Text
            fontSize={12}
            fontFamily={fonts.regular}
            color={'gray'}
            numberOfLines={1}
            marginTop={'es'}
          >
            {item.request_by}
          </Text>
        </Box>
        <Box flex={0.24} >
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            alignSelf={'flex-end'}
          >
            <Text
              fontSize={15}
              fontFamily={fonts.medium}
              color={'blue'}
              paddingEnd={'es'}
              letterSpacing={0.25}
              textAlign={'right'}
            >
              {item.qty}
            </Text>
          </Box>

          <Text
            fontSize={12}
            fontFamily={fonts.regular}
            color={'green'}
            marginTop={'es'}
            textAlign={'right'}
            letterSpacing={0.60}
          >
            {item.status}
          </Text>
        </Box>
      </Box>

    </Pressable>
  )
}
