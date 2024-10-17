import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import sendData from '@/scripts/sendData';
import getCurrentMonth from '@/scripts/getCurrentMonth';
import { moderateScale } from '@/styles/metrics';

export default function FreeSpaces(props) {
  const [data, setData] = useState();
  useEffect(() => {
    sendData('user/post/freeSpacesCount', {
      day: props.day,
      month: getCurrentMonth(),
    }).then((res) => {
      setData(res.result);
    });
  }, []);
  return (
    <View>
      {data ? (
        <Text style={{ fontSize: moderateScale(28) }}>
          Free spaces: {data.free_spaces}/{data.total_spaces}
        </Text>
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
}
