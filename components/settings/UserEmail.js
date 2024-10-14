import { Text, View, StyleSheet } from 'react-native-web';
import { useState, useEffect } from 'react';
import { moderateScale, verticalScale } from '@/styles/metrics';
import getUserData from '@/components/login/getUserData';

export default function UserEmail() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    getUserData().then((result) => {
      setEmail(result.result.mail);
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
