import React, {useEffect, useMemo, useState} from 'react';
import {Box, FloatingButton, Screen, StatusBarType} from '@/component';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/style';
import {FlatList, RefreshControl} from 'react-native';
import {ProductCard} from '@/component/Product/ProductCard';
import {SvgIcon} from '@/assets/SvgIcon';
import {DeviceHelper} from '@/helper';
import {actions, RootState, useAppSelector} from '@/redux/root.store';
import {GetProductList} from '@/model';
import {GetProductListApiParams} from '@/api';
import {navigate, Routes} from '@/navigation/AppNavigation';


export const ProductScreen:React.FC = () =>{
  const {colors} =useTheme<Theme>()
  const [refreshing, setRefreshing] = useState(false);
  const productListResult = useAppSelector(
    (state: RootState) => state.productDetail.productList,
  );

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    const params: GetProductListApiParams = {
      length:'120',
      search:'',
      start:'0'
    };
    actions.getProductListApiThunkCallActions(params).then();
  };

  const productList = useMemo(() => {
    if (productListResult?.isSuccess) {
      return productListResult.getValue();
    }
    return new GetProductList();
  }, [productListResult]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    callApi();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return(
    <Screen
      backgroundColor={'antiFlashWhite2'}
      statusBarColor={colors.primary}
      statusBarType={StatusBarType.Dark}>
        <Box flex={1}>
          <FlatList
            data={productList.items}
            onMomentumScrollBegin={() => {
              // setOnEndReachedCalledDuringMomentum(false);
            }}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <ProductCard
                  onPress={() => {
                    // saveTagValueApiCall(item);
                  }}
                  item={item}
                />
              );
            }}
            onEndReachedThreshold={0.1}
            ListEmptyComponent={
              <Box height={DeviceHelper.height() / 1.2} alignItems={'center'}>
                <SvgIcon
                  name={'noData'}
                  height={DeviceHelper.calculateWidthRatio(200)}
                  width={DeviceHelper.calculateWidthRatio(200)}
                  pressableProps={{
                    style: {
                      alignSelf: 'center',
                      height: '100%',
                    },
                  }}
                />
              </Box>
            }
            ListFooterComponent={<Box height={120} />}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
      </Box>
      <FloatingButton
        bottom={30}
        onPress={async () =>{
         await actions.addProductApiThunkCallActions()
          navigate({
            screenName:Routes.AddProduct
          })
        }}
      />
    </Screen>
  )
}
