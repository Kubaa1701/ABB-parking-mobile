import DayName from './DayName';
import { View } from 'react-native';

export default function Days(props) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      {props.names.map((e) => (
        <DayName
          name={e}
          key={e}
        />
      ))}
    </View>
  );
}
