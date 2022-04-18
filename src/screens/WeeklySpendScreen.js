import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../components/Header';
import CommonStyle from '../components/Style';
import AppStatusBar from '../components/AppStatusBar';
import Colors from '../theme/Colors';
import ClockIcon from 'react-native-vector-icons/EvilIcons';
import * as debitCardAction from '../redux/actions/debitCardAction';

const SmallButton = ({limit, onSetLimit}) => {
  return (
    <TouchableOpacity activeOpacity={.8} style={CommonStyle.smallButtonContainer} onPress={() =>onSetLimit(limit)}>
      <Text style={CommonStyle.smallButtonText}>S$ {limit}</Text>
    </TouchableOpacity>
  );
};

const WeeklySpendScreen = ({}) => {

  const dispatch = useDispatch();
  const { cardWeeklyLimit } = useSelector(state => state.debitCardDetails)
  const [spendLimit, setSpendLimit] = useState(0);

  /* Update Weekly Spend Limit */

  const updateWeeklySpendLimit = () => {
    dispatch(debitCardAction.onUpdateWeeklyLimit(spendLimit))
    Alert.alert('Save', 'Weekly Spend Limit Updated Successfully', [
      {
        text: 'OK',
        onPress: () => {}
      },
    ])
  }

  useEffect(() => {
    setSpendLimit(cardWeeklyLimit);
  }, [dispatch]);

  return (
    <SafeAreaView style={CommonStyle.safeAreaStyle}>
        <AppStatusBar backgroundColor={Colors.TEXT} />
        <Header isBackArrow={true} />
        <View style={[CommonStyle.mainContainer]}>
          <View style={{marginTop: 10}}>
            <Text style={[CommonStyle.largeText]}>Spending limit</Text>
          </View>
        </View>
        <View style={CommonStyle.weeklySpendContainer}>
            <View style={[CommonStyle.mainContainer]}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
                <ClockIcon name={'clock'} size={22} color={Colors.TEXT} />
                <Text style={[CommonStyle.smallText, {color: Colors.TEXT, marginLeft: 5}]}>Set a weekly debit card spending limit</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <View style={CommonStyle.boxDesign}>
                  <Text style={[CommonStyle.smallText, {fontWeight: '800',fontSize: 14, textAlign: 'center'}]}>S$</Text>
                </View>
                <Text style={[CommonStyle.largeText, {marginLeft: 10, color: Colors.BLACK}]}>{spendLimit}</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#ddd',
                  borderBottomWidth: .5,
                  marginTop: 8
                }}
              />
              <Text style={[CommonStyle.smallText, {color: Colors.TEXT, marginTop: 10, opacity: .4, fontSize: 14}]}>Here weekly means the last 7 days - not calender week</Text>
              <View style={CommonStyle.smallButtonHeader}>
                <SmallButton limit={5000} onSetLimit={setSpendLimit}/>
                <SmallButton limit={10000} onSetLimit={setSpendLimit}/>
                <SmallButton limit={15000} onSetLimit={setSpendLimit}/>
              </View>
            </View>
            <TouchableOpacity style={CommonStyle.saveButtonContainer} onPress={updateWeeklySpendLimit}>
              <Text style={CommonStyle.saveButton}>Save</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default WeeklySpendScreen;
