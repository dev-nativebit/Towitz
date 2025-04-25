import React, {useEffect, useMemo, useState} from 'react';
import {
  Box,
  DashboardCard,
  Header,
  Screen,
  StatusBarType,
  TabButtons,
} from '@/component';
import {GetRequestListApiParams} from '@/api';
import {actions, RootState, useAppSelector} from '@/redux/root.store';
import {RequestList} from '@/model';
import {Storage} from '@/core';
import {DeviceHelper} from '@/helper';
import {SvgIcon} from '@/assets/SvgIcon';
import {FlatList, RefreshControl} from 'react-native';
import { navigate, reset, Routes } from "@/navigation/AppNavigation";

export const DashboardScreen: React.FC = () => {
  const requestListResult = useAppSelector(
    (state: RootState) => state.requestDetail.requestList,
  );
  const tabArray = [
    {
      title: 'Pending',
    },
    {
      title: 'Approved',
    },
    {
      title: 'Rejected',
    },
  ];
  const [selectedTab, setSelectedTab] = useState('Pending');
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    callApi(selectedTab);
  }, []);

  const callApi = (option: string) => {
    const params: GetRequestListApiParams = {
      length: '1000',
      search: '',
      start: '0',
      req_status:
        option === tabArray[0].title
          ? '1'
          : option === tabArray[1].title
          ? '2'
          : '3',
    };
    actions.getRequestListApiThunkCallActions(params).then();
  };

  const requestList = useMemo(() => {
    if (requestListResult?.isSuccess) {
      return requestListResult.getValue();
    }
    return new RequestList();
  }, [requestListResult]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    callApi(selectedTab);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handelOnTabPress = async (option: string) => {
    callApi(option);
    setSelectedTab(option);
  };

  const handelOnLogoutPress = async () => {
    // actions.logoutThunkCallActions().then(async () => {
    await Storage.logout();
    reset({
      screenName: Routes.Login,
    });
    // });
  };

  return (
    <Screen backgroundColor={'white'} statusBarType={StatusBarType.Dark}>
      <Box marginTop={'sr'}>
        <TabButtons
          buttons={tabArray}
          selectedTab={selectedTab}
          setSelectedTab={handelOnTabPress}
        />
      </Box>
      <Box flex={1}>
        <FlatList
          data={requestList.items}
          onMomentumScrollBegin={() => {
            // setOnEndReachedCalledDuringMomentum(false);
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <DashboardCard
                onPress={() => {
                  navigate({
                    screenName: Routes.RequestDetail,
                    params:{
                      data:item
                    }
                  });
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
    </Screen>
  );
};
