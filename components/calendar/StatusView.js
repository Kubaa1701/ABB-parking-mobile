import { View } from 'react-native';
import Status from './Status';

export default function StatusView() {
  return (
    <View style={{ marginTop: '5%' }}>
      <Status
        color={'#63cf79'}
        status={'Approved'}
      />
      <Status
        color={'#e8c354'}
        status={'Pending'}
      />
      <Status
        color={'#EF8787'}
        status={'Rejected'}
      />
    </View>
  );
}
