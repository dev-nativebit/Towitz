import React, { useMemo, useRef, useState } from "react";
import {
  Box, hideFullScreenProgress,
  Image,
  Pressable,
  ResignBottomSheet,
  Screen,
  ScreenHeader,
  showFullScreenProgress,
  StatusBarType,
  Text
} from "@/component";
import { useTheme } from "@shopify/restyle";
import { fonts, Theme } from "@/style";
import { SvgIcon } from "@/assets/SvgIcon";
import { DeviceHelper } from "@/helper";
import { goBack } from "@/navigation/AppNavigation";
import {  ScrollView } from "react-native";
import moment from "moment";
import { Images } from "@/assets";
import { ApproveRequestApiParams, GetRequestListApiParams } from "@/api";
import {actions, RootState, useAppSelector} from '@/redux/root.store';
import { useForm } from "react-hook-form";
import { customFormGenerator, RejectNotesIDs } from "@/customFormGenerator";
import {QrCodeDetailModel, RequestList} from '@/model';
import {QrCodeDetailDto} from '@/dtos';


export const QrDetailScreen:React.FC =() =>{
  const {colors} =useTheme<Theme>()
  const [isVisibleNote, setIsVisibleNote] = useState(false)
  const status = useRef('')
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const qrDetailResult = useAppSelector(
    (state: RootState) => state.requestDetail.QrCodeDetail,
  );
  const form = useMemo(() => customFormGenerator.generateRejectNotesForm(), []);

  const qrDetail = useMemo(() => {
    if (qrDetailResult?.isSuccess) {
      return qrDetailResult.getValue();
    }
    return new QrCodeDetailModel({} as QrCodeDetailDto);
  }, [qrDetailResult]);

  const approveRejectApiCall = () =>{
    setIsVisibleNote(false)

  }

  const handleOnPressNote = () => {
    handleSubmit(approveRejectApiCall)()
  }


  return(
      <Screen
        backgroundColor={'antiFlashWhite2'}
        statusBarColor={colors.primary}
        statusBarType={StatusBarType.Dark}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box
            backgroundColor={'white'}
            paddingBottom={'lm'}
            marginBottom={'se'}
          >
            <Text
              paddingVertical={'sr'}
              fontFamily={fonts.regular}
              paddingHorizontal={'sr'}
              color={'eerieBlack'}
              fontSize={15}
            >
              {qrDetail.QrDetail?.id}
            </Text>
            <Box
              borderTopWidth={0.8}
              borderBottomWidth={0.8}
              paddingHorizontal={'sr'}
              borderColor={'lightGray2'}
              flexDirection={'row'}
            >
              <Text
                paddingVertical={'e6'}
                fontFamily={fonts.medium}
                color={'gray'}
                fontSize={15}
                style={{flex:0.65}}
              >
                {'Item'}
              </Text>
              <Text
                paddingVertical={'e6'}
                fontFamily={fonts.medium}
                color={'gray'}
                fontSize={15}
                style={{
                  flex:0.35,
                  borderLeftWidth:0.8,
                  borderColor:colors.lightGray,
                }}
                textAlign={'center'}
              >
                {'Oty'}
              </Text>
            </Box>
            <Box
              borderBottomWidth={0.8}
              paddingHorizontal={'sr'}
              borderColor={'lightGray2'}
              flexDirection={'row'}
            >
              <Box flex={0.65} paddingVertical={'e6'}>
                <Text
                  fontFamily={fonts.medium}
                  color={'eerieBlack'}
                  fontSize={15}
                >
                  {qrDetail.QrDetail?.item_name}
                </Text>
                {/*<Text*/}
                {/*  fontFamily={fonts.medium}*/}
                {/*  style={{color:'#5F44CE'}}*/}
                {/*  paddingVertical={'es'}*/}
                {/*  fontSize={11}*/}
                {/*>*/}
                {/*  {'View Description and Photo'}*/}
                {/*</Text>*/}
                {/*<Text*/}
                {/*  fontFamily={fonts.medium}*/}
                {/*  color={'green'}*/}
                {/*  fontSize={13}*/}
                {/*>*/}
                {/*  {qrDetail.QrDetail?.status.toUpperCase()}*/}
                {/*</Text>*/}
              </Box>
              <Box
                flex={0.35}
                paddingVertical={'e6'}
                borderLeftWidth={0.8}
                borderColor={'lightGray'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'row'}
              >
                <Text
                  paddingVertical={'e6'}
                  fontFamily={fonts.semiBold}
                  color={'eerieBlack'}
                  fontSize={15}
                  textAlign={'center'}
                >
                  {qrDetail.QrDetail?.qty.toLowerCase()}
                </Text>
              </Box>

            </Box>
            <Box
              marginVertical={'r'}
              flexDirection={'row'}
              marginHorizontal={'sr'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box>
                <Text
                  fontFamily={fonts.semiBold}
                  color={'gray'}
                  fontSize={11}
                >
                  {`Enter by ${qrDetail.QrDetail?.return_by}`}
                </Text>
                <Text
                  fontFamily={fonts.semiBold}
                  color={'gray'}
                  fontSize={11}
                >
                  {`Date: ${moment(qrDetail?.QrDetail.return_at).format('DD MMM YYYY')}`}
                </Text>
              </Box>
              <Pressable
                onPress={() =>{
                  status.current = 'Approved'
                  approveRejectApiCall()
                }}
                height={DeviceHelper.calculateWidthRatio(35)}
                borderRadius={DeviceHelper.calculateWidthRatio(10)}
                paddingHorizontal={'sr'}
                backgroundColor={'green'}
                alignItems={'center'}
                marginEnd={'s'}
                justifyContent={'center'}
              >
                <Text
                  color={'white'}
                  fontFamily={fonts.Merienda_bold}
                  fontSize={DeviceHelper.calculateFontSize(14)}
                >
                  {'Verify'}
                </Text>
              </Pressable>
            </Box>
            <Box
              width={'100%'}
              position={'absolute'}
              bottom={-5}
            >
              <SvgIcon name={'zigzagCurve'} width={'100%'} />
            </Box>
          </Box>
        </ScrollView>
        <ResignBottomSheet
          isVisible={isVisibleNote}
          onClose={()=>{
            setIsVisibleNote(false)
            setValue(RejectNotesIDs.notes, '')
          }}
          fieldArray={form}
          control={control}
          errors={errors}
          onSavePress={() =>{
            status.current = 'reject'
            handleOnPressNote()
          }}
        />
    </Screen>
  )
}
