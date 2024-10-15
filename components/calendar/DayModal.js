import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import MakeReservationBtn from '../reservation/MakeReservationBtn';
import getCurrentMonth from '@/scripts/getCurrentMonth';

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
          <Text
            style={{
              textAlign: 'center',
              fontSize: Dimensions.get('window').width * 0.08,
              marginTop: Dimensions.get('window').height * 0.02,
            }}
          >
            {props.dayOfMonth + '.' + getCurrentMonth()}
          </Text>
          <Text
            style={{
              margin: 'auto',
              fontSize: Dimensions.get('window').width * 0.07,
            }}
          >
            {props.status.length === 0 ? 'Free spaces 0/25' : props.status}
          </Text>
          {props.status.length === 0 ? (
            <View
              style={{
                width: '50%',
                backgroundColor: '#707070',
                height: '20%',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                left: '25%',
                bottom: '10%',
              }}
            >
              <MakeReservationBtn
                displayReservation={props.displayReservation}
                setDisplayReservation={props.setDisplayReservation}
              />
            </View>
          ) : (
            ''
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#E9E9E9',
    height: '45%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
