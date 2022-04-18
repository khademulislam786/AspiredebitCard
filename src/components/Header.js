/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CommonStyle from './Style';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

/* Back Button */

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity hitSlop={{top: 50, bottom: 50, left: 50, right: 50}} onPress={() => navigation.goBack()}>
      <View style={{flexDirection: 'row'}}>
        <BackIcon name={'chevron-back'} style={CommonStyle.backIcon} />
      </View>
    </TouchableOpacity>
  );
};

const CompanyLogo = () => {
    return (
        <View style={{marginRight: wp(5)}}>
            <Image source={require('../assets/images/AspireIcon.png')} style={CommonStyle.logo}/>
        </View>
    )
};

const Header = ({isBackArrow}) => {
    return (
      <SafeAreaView>
        <View style={[CommonStyle.headerView]}>
            <View>
                {isBackArrow && <BackButton />}
            </View>
            <View>
                <CompanyLogo />
            </View>
        </View>
      </SafeAreaView>
    );
}

export default Header;