import React from 'react';
import {Box, Screen, StatusBarType, Text} from '@/component';

export const DashboardScreen: React.FC = () => {
  return (
    <Screen backgroundColor={'white'} statusBarType={StatusBarType.Dark}>
      <Box flex={1} backgroundColor={'white'}>
        <Text>Dashboard</Text>
      </Box>
    </Screen>
  );
};
