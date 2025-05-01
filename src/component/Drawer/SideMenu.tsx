import React, {useMemo, useState} from 'react';
import {Box} from '../Box';
import {Image, LogoutBottomSheet, SideMenuCell, Text} from '@/component';
import {Images} from '@/assets';
import {DeviceHelper} from '@/helper';
import {fonts} from '@/style';
import {navigate, reset, Routes} from '@/navigation/AppNavigation';
import {Storage} from '@/core/Storage';
import {actions, RootState, useAppSelector} from '@/redux/root.store';
import { UserModel} from '@/model';
import {ImageSourcePropType} from 'react-native';
import {UserDetailDto} from "@/dtos";


export enum TopTabEnum {
  Dashboard = 'Dashboard',
  Profile = 'Profile',
  Logout = 'Logout',
  Inspection = 'Inspection',
  Product = 'Product',
  Request = 'Request',
}

export interface DeleteDocumentModelProps {
  selectedTab?: TopTabEnum;
  onOptionSelected: (selectedTab: TopTabEnum) => void;
  onClosePress: () => void;
}

export const SideMenu: React.FC<DeleteDocumentModelProps> = ({
    selectedTab,
    onOptionSelected,
    onClosePress,
}: DeleteDocumentModelProps) => {
  const getPartyListResult = useAppSelector((state:RootState) => state.loginDetail.LoginResult);
  const [isVisibleLogout, setIsVisibleLogout] = useState(false);
  const userDetail = useMemo(() => {
    if (getPartyListResult?.isSuccess){
      return getPartyListResult.getValue().userDetail
    }
    return new UserModel({} as UserDetailDto)
  }, []);



  const handelOnLogoutPress = async () =>{
    setIsVisibleLogout(false);
    await Storage.logout()
    await actions.ClearReduxThunkCallActions()
    reset({
      screenName:Routes.Login
    })
  }

  const getIcon = (type:string):ImageSourcePropType =>{
      switch (type){
        case 'Logout':
          return Images.logout
        case 'Inspection':
          return Images.checked
        case 'Profile':
          return Images.profile
        case 'Product':
          return Images.profile
        case 'Request':
          return Images.profile
        default:
          return Images.home
      }
  }

  const handelOnPress = (type:string) =>{
      switch (type){
        case 'Dashboard':
          onClosePress();
          navigate({
            screenName:Routes.Dashboard,
          });
          onOptionSelected(TopTabEnum.Dashboard);
          break;
          case 'Profile':
          onClosePress();
          onOptionSelected(TopTabEnum.Profile);
          break;
          case 'Inspection':
          onClosePress();
            navigate({
              screenName:Routes.Inspection,
            });
          onOptionSelected(TopTabEnum.Inspection);
          break;
          case 'Request':
          onClosePress();
            navigate({
              screenName:Routes.Request,
            });
          onOptionSelected(TopTabEnum.Request);
          break;
          case 'Product':
          onClosePress();
            navigate({
              screenName:Routes.Product,
            });
          onOptionSelected(TopTabEnum.Product);
          break;
        case 'Logout':
          onClosePress()
          setIsVisibleLogout(true)
          break;
      }
  }

  const array =[
    {menuName:'Dashboard'},
    {menuName:'Inspection'},
    {menuName:'Request'},
    {menuName:'Product'},
    {menuName:'Profile'},
    {menuName:'Logout'},
  ]
  return (
    <Box flex={1} backgroundColor={'white'}>
      <Box>
        <Box backgroundColor={'primaryColor'} alignItems={'center'}>
          <Image
            source={Images.logo}
            height={DeviceHelper.calculateWidthRatio(120)}
            // @ts-ignore
            width={'80%'}
            resizeMode={'contain'}
          />
        </Box>
        <Text
          fontFamily={fonts.regular}
          fontSize={16}
          color={'black'}
          textAlign={'center'}
          marginHorizontal={'r'}
          marginTop="sr">
          {`${userDetail.user_code}-${userDetail.user_name}`}
        </Text>
        {array.map((item, index) => (
          <SideMenuCell
            key={index}
            onPress={() => {
              handelOnPress(item.menuName);
            }}
            title={item.menuName}
            isSelected={selectedTab === item.menuName}
            icon={getIcon(item.menuName)}
          />
        ))}
      </Box>
      <LogoutBottomSheet
        isVisible={isVisibleLogout}
        onClose={() => {
          setIsVisibleLogout(false);
        }}
        onLogoutPress={handelOnLogoutPress}
        message={'Do you really want to logout?'}
        positiveButtonLabel={'Yes, Logout'}
        negativeButtonLabel={'Cancel'}
      />
    </Box>
  );
};
