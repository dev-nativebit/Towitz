import React, {useEffect, useMemo} from 'react';
import {Box, FloatingButton, Screen, StatusBarType} from '@/component';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/style';
import {FlatList, RefreshControl} from 'react-native';
import {DeviceHelper} from '@/helper';
import {SvgIcon} from '@/assets/SvgIcon';
import {InspectionCard} from '@/component/Inspection/InspectionCard';
import {actions, RootState, useAppSelector} from '@/redux/root.store';
import {GetInspectionListApiParams} from '@/api';
import {InspectionList} from '@/model';
import {navigate, Routes} from '@/navigation/AppNavigation';


export const InspectionScreen:React.FC = () => {
  const {colors} =useTheme<Theme>()
  const inspectionListResult = useAppSelector(
    (state: RootState) => state.requestDetail.getInspectionList,
  );
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    const params: GetInspectionListApiParams = {
      length: '1000',
      search: '',
      start: '0',
    };
    actions.getInspectionListApiThunkCallActions(params).then();
  };

  const inspectionList = useMemo(() => {
    if (inspectionListResult?.isSuccess) {
      return inspectionListResult.getValue();
    }
    return new InspectionList();
  }, [inspectionListResult]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    callApi();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
	return (
    <Screen
      backgroundColor={'antiFlashWhite2'}
      statusBarColor={colors.primary}
      statusBarType={StatusBarType.Dark}>
      <Box flex={1}>
        <FlatList
          data={inspectionList.items}
          onMomentumScrollBegin={() => {
            // setOnEndReachedCalledDuringMomentum(false);
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <InspectionCard
                onPress={() => {
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
          ListFooterComponent={<Box height={200} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </Box>
      <FloatingButton
        onPress={() =>{
          navigate({
            screenName:Routes.QRScanner
          })
        }}
        bottom={40}
      />
    </Screen>
  );
};
