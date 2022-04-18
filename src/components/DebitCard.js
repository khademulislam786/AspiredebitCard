import React from 'react';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';
import CommonStyle from './Style';
import Colors from '../theme/Colors';
import Logo from '../assets/images/AspireLogo.png'
import VisaLogo from '../assets/images/visa.png'
import EyeIcon from 'react-native-vector-icons/Feather';

const DebitCardView = ({onAction, showAndHide}) => {
    return(
    <>
        <View style={CommonStyle.hideShowContainer}>
            <TouchableOpacity onPress={onAction}>
              <EyeIcon name={showAndHide ? `eye` : `eye-off`} size={18} color={Colors.MAIN} />
            </TouchableOpacity>
            <Text style={CommonStyle.showHideText}>{showAndHide ? `Hide card number` : `Show card number` }</Text>
        </View>
        <View style={CommonStyle.mainView}>
            <View style={CommonStyle.cardInnerView}>
                <View style={CommonStyle.iconView}>
                    <Image
                    source={Logo}
                    style={CommonStyle.imageStyle}/>
                </View>
                <Text style={CommonStyle.nameStyle}>{'Khademul Islam'}</Text>
                <View style={CommonStyle.cardNumber}>
                    <Text style={CommonStyle.textStyle}>{showAndHide ? `1234` : `****`}</Text>
                    <Text style={CommonStyle.textStyle}>{showAndHide ? `1234` : `****`}</Text>
                    <Text style={CommonStyle.textStyle}>{showAndHide ? `1234` : `****`}</Text>
                    <Text style={CommonStyle.textStyle}>{'1234'}</Text>
                </View>
                <View style={CommonStyle.validACvv}>
                    <Text style={CommonStyle.textStyle}>Thru: {'12/24'}</Text>
                    <Text style={CommonStyle.textStyle}>CVV: {showAndHide? `345` : `***`}</Text>
                </View>
                <View style={[CommonStyle.iconView,{top: - Dimensions.get('screen').height / 35}]}>
                    <Image
                    source={VisaLogo}
                    style={CommonStyle.imageStyle}/>
                </View>
            </View>
        </View>
    </>
    )
}

export default DebitCardView;