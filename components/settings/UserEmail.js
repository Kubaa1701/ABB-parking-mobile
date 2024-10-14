import { Text, View, Dimensions } from 'react-native-web';
import getUserData from '@/components/login/getUserData';
import { useState, useEffect } from 'react';

export default function UserEmail() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    getUserData().then((result) => {
      setEmail(result.result.mail);
    });
  }, []);
  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          marginBottom: 10,
          marginLeft: '5%',
        }}
      >
        {email}
      </Text>
    </View>
  );
}
