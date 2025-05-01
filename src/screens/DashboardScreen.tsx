import React from 'react';
import {Box, Pressable, Screen, StatusBarType, Text} from '@/component';
import {BarChart} from 'react-native-gifted-charts';
import {DeviceHelper} from '@/helper';
import {fonts} from '@/style';
import {ScrollView} from 'react-native';

export const DashboardScreen: React.FC = () => {
  const data = [
    {
      value: 2500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Jan',
    },
    {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: 3500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Feb',
    },
    {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: 5200,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Mar',
    },
    {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: 5200,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Apr',
    },
    {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: 3000,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'May',
    },
    {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: 3500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'june',
    },
    {value: 2900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
    {
      value: 3200,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'july',
    },
    {value: 2912, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
  ];
  return (
    <Screen backgroundColor={'white'} statusBarType={StatusBarType.Dark}>
      <Box flex={1} backgroundColor={'white'}>
        <Box
          style={{
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <BarChart
            data={data}
            barWidth={16}
            width={DeviceHelper.width() - 40}
            initialSpacing={10}
            spacing={14}
            barBorderRadius={4}
            showGradient
            yAxisThickness={0}
            xAxisType={'dashed'}
            xAxisColor={'black'}
            yAxisTextStyle={{color: 'black'}}
            stepValue={1000}
            maxValue={6000}
            noOfSections={6}
            yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
            labelWidth={40}
            xAxisLabelTextStyle={{color: 'black', textAlign: 'center'}}
            showLine
            lineConfig={{
              color: '#F29C6E',
              thickness: 3,
              curved: true,
              hideDataPoints: true,
              shiftY: 20,
              initialSpacing: -30,
            }}
          />
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
                {'LEADS'}
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
                    {'today_lead'}
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
                    {'month_lead'}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Monthly'}
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
                {'ORDERS'}
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
                    {'today_order'}
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
                    {'month_order'}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Monthly'}
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
                {'APPOINTMENTS'}
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
                    {'today_appointment'}
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
                    {'month_appointment'}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Monthly'}
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
                {'APPOINTMENTS'}
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
                    {'today_appointment'}
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
                    {'month_appointment'}
                  </Text>

                  <Text
                    fontSize={14}
                    fontFamily={fonts.medium}
                    color={'dark2'}
                    marginTop={'s'}
                  >
                    {'Monthly'}
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
