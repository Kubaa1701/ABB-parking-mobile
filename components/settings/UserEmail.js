import { Text, View, StyleSheet } from 'react-native-web';
import UserData from './UserData';
import { useState, useEffect } from 'react';
import { moderateScale, verticalScale } from '@/styles/metrics';

export default function UserEmail() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    UserData(1).then((result) => {
      setEmail(result.result.email);
    });
  }, []);
  return (
    <View>
      <Text style={styles.text}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(17),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    marginLeft: '5%',
  },
});
