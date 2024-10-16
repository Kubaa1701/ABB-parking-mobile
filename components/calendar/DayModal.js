import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import MakeReservationBtn from '../reservation/MakeReservationBtn';
import getCurrentMonth from '@/scripts/getCurrentMonth';
import getCurrentDay from '@/scripts/getCurrnetDay';
import CancelReservationBtn from '../reservation/CancelReservationBtn';
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
        onBackdropPress={() => {
          props.setVisible(false);
          props.setPickedDate();
        }}
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
          <View
            style={{
              margin: 'auto',
              fontSize: Dimensions.get('window').width * 0.07,
            }}
          >
            {props.status.length !== 0 && props.status !== 'Cancelled' ? (
              <>
                {props.status}
                <CancelReservationBtn
                  day={props.dayOfMonth}
                  onCancel={props.onCancel}
                />
              </>
            ) : (
              <Text style={styles.modalStatus}>
                'Free spaces 0/25'
              </Text>
            )}
          </View>
          {props.status.length === 0 ||
          (props.status === 'Cancelled' &&
            props.dayOfMonth !== getCurrentDay()) ? (
            <View style={styles.buttonView}>
              <MakeReservationBtn
                displayReservation={props.displayReservation}
                setDisplayReservation={props.setDisplayReservation}
                day={props.dayOfMonth}
                setPickedDate={props.setPickedDate}
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
