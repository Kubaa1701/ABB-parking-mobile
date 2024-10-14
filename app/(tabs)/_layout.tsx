import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { horizontalScale, moderateScale, verticalScale } from '@/styles/metrics';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={28}
              name="home"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={28}
              name="gear"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const screenOptions = {
  tabBarStyle: {
    height: verticalScale(60),
  },
  tabBarItemStyle: {
    marginTop: verticalScale(5),
    marginBottom: verticalScale(5),
  },
  tabBarLabelStyle: {
    fontSize: moderateScale(16),
  },
  tabBarActiveTintColor: 'red',
}