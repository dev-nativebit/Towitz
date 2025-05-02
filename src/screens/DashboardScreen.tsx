import React, { useMemo } from "react";
import {Box, Pressable, Screen, StatusBarType, Text} from '@/component';
import {BarChart} from 'react-native-gifted-charts';
import {DeviceHelper} from '@/helper';
import {fonts} from '@/style';
import { ColorValue, ScrollView } from "react-native";
import moment from "moment";
import { RootState, useAppSelector } from "@/redux/root.store";
import { DashboardModel, RequestList } from "@/model";
import { DashboardDto } from "@/dtos";

export const DashboardScreen: React.FC = () => {
  const dashboardResult = useAppSelector(
    (state: RootState) => state.loginDetail.dashboard,
  );

  const dashboard = useMemo(() => {
    if (dashboardResult?.isSuccess) {
      return dashboardResult.getValue();
    }
    return new DashboardModel({} as DashboardDto);
  }, [dashboardResult]);

  const data = [
    {
      value: parseInt(dashboard.chartData.today_cons),
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Jan',
    },
    {value: parseInt(dashboard.chartData.today_return), frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: parseInt(dashboard.chartData.day_m_1_cons),
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Feb',
    },
    {value: parseInt(dashboard.chartData.day_m_1_return), frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: parseInt(dashboard.chartData.day_m_2_cons),
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Mar',
    },
    {value: parseInt(dashboard.chartData.day_m_2_return), frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: parseInt(dashboard.chartData.day_m_3_cons),
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Apr',
    },
    {value: parseInt(dashboard.chartData.day_m_3_return), frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: dashboard.chartData.day_m_4_cons,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'May',
    },
    {value: parseInt(dashboard.chartData.day_m_4_return), frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: parseInt(dashboard.chartData.day_m_5_cons),
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'june',
    },
    {value: parseInt(dashboard.chartData.day_m_5_return), frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: parseInt(dashboard.chartData.day_m_6_cons),
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'june',
    },
    {value: parseInt(dashboard.chartData.day_m_6_return), frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
  ];

  const getPastSixDays = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(moment(date).format('DD-MM-YYYY'));
    }
    return dates;
  };

  const chartData = useMemo(() => {
    const dates:any = [];
    data.map((value, index) => {
      if (index % 2 === 0) {
        const labelIndex = index / 2;
        dates.push({...value, label: getPastSixDays()[labelIndex]});
      }else {
        dates.push({...value});
      }
    })
    return dates;
  }, [dashboard]);

  const indicators =(
    color: ColorValue,
    title: string
  ) =>(
    <Box
      flexDirection={'row'}
      alignItems={'center'}
    >
        <Box
          height={DeviceHelper.calculateHeightRatio(15)}
          width={DeviceHelper.calculateWidthRatio(15)}
          backgroundColor={'eerieBlack'}
          style={{backgroundColor:color}}
        />
      <Text
        paddingStart={'s'}
        fontFamily={fonts.medium}
        fontSize={15}
        color={'eerieBlack'}
      >
        {title}
      </Text>
    </Box>
  )

  return (
    <Screen backgroundColor={'white'} statusBarType={StatusBarType.Dark}>
      <Box flex={1} backgroundColor={'white'}>
        <Box
          style={{
            paddingTop: 20,
            alignItems: 'center',
          }}
        >
          <BarChart
            data={chartData}
            barWidth={20}
            width={DeviceHelper.width() - 40}
            initialSpacing={10}
            spacing={40}
            barBorderRadius={4}
            showGradient
            yAxisThickness={0}
            xAxisType={'dashed'}
            xAxisColor={'black'}
            isAnimated={true}
            scrollAnimation={true}
            animationDuration={2000}
            yAxisTextStyle={{color: 'black'}}
            stepValue={5}
            showValuesAsTopLabel={true}
            topLabelTextStyle={{
              color: 'black',
              fontSize: 10,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            maxValue={30}
            noOfSections={6}
            yAxisLabelTexts={['0', '5', '10', '15', '20', '25', '30']}
            labelWidth={67}
            xAxisLabelTextStyle={{color: 'black', textAlign: 'center'}}
            showLine={false}
            lineConfig={{
              color: '#F29C6E',
              thickness: 3,
              curved: true,
              hideDataPoints: false,
              shiftY: 20,
              initialSpacing: -30,
            }}
          />

          <Box
            paddingVertical={'s'}
            marginTop={'es'}
            flexDirection={'row'}
          >
            {indicators('#006DFF','Consumptions')}
            <Box width={10}/>
            {indicators('#3BE9DE','Returned')}
          </Box>

        </Box>
        <ScrollView>
          <Box
            marginHorizontal={'sr'}
            marginTop={'m'}
            paddingBottom={'ll'}
           >

            <Pressable
              onPress={async () =>{

              }}
              backgroundColor={'secondaryColor'}
              marginTop={'m'}
              borderRadius={8}
              height={DeviceHelper.calculateHeightRatio(120)}
              paddingVertical={'sr'}
            >
              <Text
                fontSize={18}
                fontFamily={fonts.bold}
                color={'dark2'}
                marginHorizontal={'sr'}
              >
                {'USED STOCK'}
              </Text>

              <Pressable
                onPress={async () =>{
                }}
                flexDirection={'row'}
                justifyContent={'space-between'}
                marginHorizontal={'sr'}
                marginTop={'sr'}
                flex={1}
              >
                <Box
                  paddingVertical={'s'}
                  alignSelf={'flex-start'}
                  flex={1}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                  >
                    {dashboard.storeData.month_use_stock}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'This Month'}
                  </Text>
                </Box>
                <Box
                  paddingVertical={'s'}
                  alignItems={'flex-end'}
                  flex={1}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                    textAlign={'left'}
                  >
                    {dashboard.storeData.today_use_stock}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Today'}
                  </Text>

                </Box>

              </Pressable>
            </Pressable>

            <Pressable
              onPress={ () =>{

              }}
              backgroundColor={'lightOrange'}
              marginTop={'sr'}
              borderRadius={8}
              height={DeviceHelper.calculateHeightRatio(120)}
              paddingVertical={'sr'}
            >
              <Text
                fontSize={18}
                fontFamily={fonts.bold}
                color={'dark2'}
                marginHorizontal={'sr'}
              >
                {'INVENTORY'}
              </Text>
              <Pressable
                onPress={()=>{

                }}
                flexDirection={'row'}
                justifyContent={'space-between'}
                marginHorizontal={'sr'}
                marginTop={'sr'}
                flex={1}
              >
                <Pressable
                  paddingVertical={'s'}
                  alignSelf={'flex-start'}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                  >
                    {dashboard.storeData.currentStock}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Current Stock'}
                  </Text>

                </Pressable>
                <Pressable
                  paddingVertical={'s'}
                  alignItems={'flex-end'}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                    textAlign={'left'}
                  >
                    {dashboard.storeData.totalProduct}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Total Products'}
                  </Text>

                </Pressable>

              </Pressable>
            </Pressable>

            <Pressable
              onPress={()=>{
              }}
              backgroundColor={'lightBlue'}
              marginTop={'sr'}
              borderRadius={8}
              height={DeviceHelper.calculateHeightRatio(120)}
              paddingVertical={'sr'}
            >
              <Text
                fontSize={18}
                fontFamily={fonts.bold}
                color={'dark2'}
                marginHorizontal={'sr'}
              >
                {'INWARD'}
              </Text>
              <Pressable
                onPress={()=>{
                }}
                flexDirection={'row'}
                justifyContent={'space-between'}
                marginHorizontal={'sr'}
                marginTop={'sr'}
                flex={1}
              >
                <Pressable
                  paddingVertical={'s'}
                  alignSelf={'flex-start'}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                  >
                    {dashboard.storeData.month_inward}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'This Month'}
                  </Text>

                </Pressable>
                <Pressable
                  paddingVertical={'s'}
                  alignItems={'flex-end'}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                    textAlign={'left'}
                  >
                    {dashboard.storeData.today_inward}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Today'}
                  </Text>

                </Pressable>

              </Pressable>
            </Pressable>

            <Pressable
              onPress={()=>{
              }}
              backgroundColor={'light'}
              marginTop={'sr'}
              borderRadius={8}
              height={DeviceHelper.calculateHeightRatio(120)}
              paddingVertical={'sr'}
            >
              <Text
                fontSize={18}
                fontFamily={fonts.bold}
                color={'dark2'}
                marginHorizontal={'sr'}
              >
                {'OUTWARD'}
              </Text>
              <Pressable
                onPress={()=>{
                }}
                flexDirection={'row'}
                justifyContent={'space-between'}
                marginHorizontal={'sr'}
                marginTop={'sr'}
                flex={1}
              >
                <Pressable
                  paddingVertical={'s'}
                  alignSelf={'flex-start'}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                  >
                    {dashboard.storeData.month_outward}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'This Month'}
                  </Text>

                </Pressable>
                <Pressable
                  paddingVertical={'s'}
                  alignItems={'flex-end'}
                >
                  <Text
                    fontSize={18}
                    fontFamily={fonts.bold}
                    color={'dark2'}
                    textAlign={'left'}
                  >
                    {dashboard.storeData.today_outward}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Today'}
                  </Text>

                </Pressable>

              </Pressable>
            </Pressable>
          </Box>
        </ScrollView>

      </Box>
    </Screen>
  );
};
