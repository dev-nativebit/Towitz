import React, {useMemo} from 'react';
import {Box, Button, Forms, Screen, StatusBarType} from '@/component';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/style';
import {ScrollView} from 'react-native';
import {DeviceHelper} from '@/helper';
import {useForm} from 'react-hook-form';
import {customFormGenerator} from '@/customFormGenerator';
import {RootState, useAppSelector} from '@/redux/root.store';
import {AddProductList, GetProductList} from '@/model';


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

  const categoryList = useMemo(() => {
    if (addProductResult?.isSuccess) {
      return addProductResult.getValue();
    }
    return new AddProductList();
  }, [addProductResult])

  const handelOnPress =() =>{

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

          <Box marginHorizontal={'r'} marginTop={'m'}>
            <Button
              label={'Save'}
              onPress={handelOnPress}
            />
          </Box>
        </Box>
      </ScrollView>
    </Screen>
  )
}
