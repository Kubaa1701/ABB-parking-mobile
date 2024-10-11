import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

export default function DayModal(props) {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={props.visible}
        onBackdropPress={() => props.setVisible(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        onSwipeComplete={() => props.setVisible(false)}
        swipeDirection="down"
        style={{ margin: 0 }}
      >
        <View style={styles.modalView}>
          <Text style={{ margin: 'auto', fontSize: 30 }}>
            {props.status.length === 0 ? 'Free spaces 0/25' : props.status}
          </Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#E9E9E9',
    height: '40%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },
});
