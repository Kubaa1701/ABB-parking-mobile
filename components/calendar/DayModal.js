import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import MakeReservationBtn from '@/components/reservation/MakeReservationBtn';
import getCurrentMonth from '@/scripts/getCurrentMonth';
import getCurrentDay from '@/scripts/getCurrentDay';
import CancelReservationBtn from '../reservation/CancelReservationBtn';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/styles/metrics';
import FreeSpaces from './FreeSpaces';

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
          {props.status.length !== 0 && props.status !== 'Cancelled' ? (
            <React.Fragment>
              <View style={{ margin: 'auto' }}>
                <View>
                  <Text style={styles.statusText}>{props.status}</Text>
                </View>
              </View>
              <View style={styles.buttonView}>
                <CancelReservationBtn
                  day={props.dayOfMonth}
                  onCancel={props.onCancel}
                />
              </View>
            </React.Fragment>
          ) : (
            <View style={{ margin: 'auto' }}>
              <FreeSpaces day={props.dayOfMonth} />
            </View>
          )}
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
            <React.Fragment />
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
    width: horizontalScale(200),
    height: verticalScale(60),
    backgroundColor: '#707070',
    borderRadius: moderateScale(16),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '25%',
    bottom: verticalScale(35),
  },
  statusText: {
    margin: 'auto',
    fontSize: moderateScale(28),
  },
});
