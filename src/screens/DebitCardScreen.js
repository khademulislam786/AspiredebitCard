import React, {useState} from 'react';
import {TouchableOpacity, View, Text, SafeAreaView, FlatList} from 'react-native';
import Header from '../components/Header';
import CommonStyle from '../components/Style';
import AppStatusBar from '../components/AppStatusBar';
import Colors from '../theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ControlIcon from 'react-native-vector-icons/FontAwesome';
import {CardControl} from '../constants/cardControl';
import DebitCardView from '../components/DebitCard';
import {useSelector} from 'react-redux';


const DebitCardScreen = ({navigation}) => {

  const [showHideCardDetails, setShowHideCardDetails] = useState(false);
  const { cardWeeklyLimit } = useSelector(state => state.debitCardDetails)

  /* Show and Hide Card Details */

  const onShowAndHideCardDetails = () => {
    setShowHideCardDetails(!showHideCardDetails)
  }


  const renderCardControl = ({item}) => {
    return (
      <TouchableOpacity onPress={() => item.id === 2 ? navigation.navigate(item.screen) : {}} style={CommonStyle.itemStyle}>
        <View style={{marginRight: wp(4)}}>
          <ControlIcon name={item.Icon} size={20} color={Colors.MAIN} />
        </View>
        <View>
          <Text style={CommonStyle.featureTitle}>{item.Title}</Text>
          <Text style={CommonStyle.featureDesc}>{item.Desc}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  const headerComponent = () => {
    if(cardWeeklyLimit !== 0){
      return (
        <View style={{marginVertical: 5}}>
          <View style={CommonStyle.limitSpendHeader}>
            <Text style={CommonStyle.limitSpendTitle}>{'Debit Card Spend Limit'}</Text>
            <Text style={CommonStyle.spendLimit}>S$ {cardWeeklyLimit}</Text>
          </View>
          <View style={CommonStyle.spendProgress}></View>
        </View>
      )
    }
    return null
  }
  
  const footerComponent = () => {
    return <View style={{marginBottom: 30}}></View>
  }

  return (
    <SafeAreaView style={CommonStyle.safeAreaStyle}>
      <AppStatusBar backgroundColor={Colors.TEXT} />
      <Header isBackArrow={false} />
      <View style={[CommonStyle.mainContainer]}>
        <View>
          <Text style={[CommonStyle.largeText]}>Debit Card</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={[CommonStyle.smallText]}>Available balance</Text>
          <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <View style={CommonStyle.boxDesign}>
              <Text style={[CommonStyle.smallText, {fontWeight: '800',fontSize: 14, textAlign: 'center'}]}>S$</Text>
            </View>
            <Text style={[CommonStyle.largeText, {marginLeft: 10}]}>{30000}</Text>
          </View>
        </View>
      </View>
      <View style={CommonStyle.whiteBackGroundView}>
        <View style={{flex: 1}}>
          <DebitCardView onAction={onShowAndHideCardDetails} showAndHide={showHideCardDetails}/>
          <View style={CommonStyle.cardControlStyle}>
            <FlatList
              ListHeaderComponent={headerComponent}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              data={CardControl}
              bounces={false}
              extraData={CardControl}
              onEndReachedThreshold={2}
              renderItem={(item) => renderCardControl(item)}
              ListFooterComponent={footerComponent}
            />
          </View>
        </View>
       
      </View>
       
    </SafeAreaView>
  )
}

export default DebitCardScreen;
