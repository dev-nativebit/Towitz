import React, {useMemo, useState} from 'react';
import {
  Box,
  Forms,
  hideFullScreenProgress, Image,
  Screen,
  showFullScreenProgress,
  StatusBarType,
  Text,
} from '@/component';
import {useTheme} from '@shopify/restyle';
import {fonts, Theme} from '@/style';
import {ScrollView, ToastAndroid} from 'react-native';
import {DeviceHelper} from '@/helper';
import {useForm} from 'react-hook-form';
import {customFormGenerator, ProductIDs} from '@/customFormGenerator';
import {actions, RootState, useAppSelector} from '@/redux/root.store';
import {AddProductList} from '@/model';
import {SaveProductApiParams} from '@/api';
import {goBack} from '@/navigation/AppNavigation';
import {ImageSelectionButton} from '@/component/ImageSelectionButton';
import {Asset} from 'react-native-image-picker';


export const AddProductScreen:React.FC =() =>{
  const {colors} =useTheme<Theme>()
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: {errors},
  } = useForm();
  const addProductResult = useAppSelector(
    (state: RootState) => state.productDetail.addProduct,
  );
  const [selectedImage, setSelectedImage] = useState<Asset>();

  const categoryList = useMemo(() => {
    if (addProductResult?.isSuccess) {
      return addProductResult.getValue();
    }
    return new AddProductList();
  }, [addProductResult])

  const submit = () =>{
    let formData: FormData = new FormData();

    if (selectedImage){
      formData.append('item_image', {
        // @ts-ignore
        uri: selectedImage.uri,
        type: selectedImage.type ?? '',
        name: selectedImage.fileName,
      });
    }else {
      return ToastAndroid.show( 'Image is required', ToastAndroid.LONG);
    }

    const params:SaveProductApiParams={
      id: '',
      category: getValues()[ProductIDs.Category],
      item_code: getValues()[ProductIDs.ItemCode],
      item_name:getValues()[ProductIDs.ItemName]
    }
    showFullScreenProgress()
    actions.saveProductApiThunkCallActions(params,formData).then(async res =>{
      hideFullScreenProgress()
      if (res.isSuccess){
        await actions.getProductListApiThunkCallActions({
          length:'120',
          search:'',
          start:'0'
        })
        goBack()
      }
    })
  }

  const handelOnPress =() =>{
    handleSubmit(submit)()
  }

  const form = useMemo(() => customFormGenerator.generateProductForm(categoryList), [categoryList]);
  return(
    <Screen
      backgroundColor={'white'}
      statusBarColor={colors.primary}
      statusBarType={StatusBarType.Dark}>
      <ScrollView>
        <Box marginTop={'sr'} paddingBottom={DeviceHelper.ios() ? 'lll' : 'se'}>
          <Forms
            fieldArray={form}
            control={control}
            errors={errors}
            setValue={setValue}
          />
          {
            selectedImage && (
              <Box
                borderWidth={1}
                borderRadius={5}
                flexWrap="nowrap"
                overflow="hidden"
                backgroundColor={'white'}
                marginHorizontal={'sr'}
                marginTop={'m'}
                paddingBottom={'r'}
                borderColor={'darkGray2'}>
                <Text
                  color={'gray'}
                  fontFamily={fonts.medium}
                  paddingStart={'s'}
                  paddingTop={'s'}
                  fontSize={14}>
                  {'Photo'}
                </Text>
                <Image
                  source={{uri:selectedImage?.uri}}
                  height={75}
                  marginStart={'sr'}
                  marginTop={'sr'}
                  width={80}
                  borderRadius={8}
                />
              </Box>
            )
          }

        </Box>
      </ScrollView>
      <Box marginHorizontal={'r'} marginTop={'m'}>
        <ImageSelectionButton
          onPress={handelOnPress}
          onAttachmentPress={setSelectedImage}
        />
      </Box>
    </Screen>
  )
}
