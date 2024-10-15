import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import MakeReservationBtn from '../reservation/MakeReservationBtn';
import getCurrentMonth from '@/scripts/getCurrentMonth';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/styles/metrics';

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
          <Text style={styles.modalDate}>
            {props.dayOfMonth + '.' + getCurrentMonth()}
          </Text>
          <Text style={styles.modalStatus}>
            {props.status.length === 0 ? 'Free spaces 0/25' : props.status}
          </Text>
          {props.status.length === 0 ? (
            <View style={styles.buttonView}>
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
    borderTopLeftRadius: horizontalScale(20),
    borderTopRightRadius: horizontalScale(20),
  },
  modalDate: {
    textAlign: 'center',
    fontSize: moderateScale(32),
    marginTop: verticalScale(20),
  },
  modalStatus: {
    margin: 'auto',
    fontSize: moderateScale(28),
  },
  buttonView: {
    width: '50%',
    backgroundColor: '#707070',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '25%',
    bottom: '10%',
  },
});
