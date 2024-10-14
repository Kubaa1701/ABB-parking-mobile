import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '@/styles/metrics';

export default function NotificationSwitch() {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Turn notifications off</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: '#aab2bf', true: '#4287f5' }}
          thumbColor={isEnabled ? 'white' : 'white'}
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    marginLeft: horizontalScale(20),
  },
  text: {
    fontSize: moderateScale(18),
    width: horizontalScale(200),
    fontWeight: 'bold',
  },
  switch: {
    transform: [{ scaleX: moderateScale(1) }, { scaleY: moderateScale(1) }],
    margin: 'auto',
  },
});
