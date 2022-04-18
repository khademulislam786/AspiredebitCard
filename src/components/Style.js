import {StyleSheet, StatusBar, Dimensions} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../theme/Colors';
import Size from '../theme/FontSize';
import Font from '../theme/Fonts';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const commonStyle = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Colors.TEXT,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    backIcon: {
        fontSize: wp(7),
        marginLeft: wp(5),
        color: Colors.WHITE,
    },
    logo: {
        height: wp(6),
        width: wp(6),
    },
    headerView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 43,
        zIndex: 50,
    },
    textFontSize_14: {
        fontSize: Size.m,
    },
    labelText: {
        color: Colors.TEXT,
        fontFamily: Font.BOLD,
    },
    mainContainer: {
        marginHorizontal: wp(5)
    },
    largeText: {
        fontSize: Size.XXVIII,
        fontFamily: Font.BOLD,
        color: Colors.WHITE,
        fontWeight: 'bold'
    },
    mediumText: {
        fontSize: Size.XX,
        fontFamily: Font.REGULAR,
        color: Colors.WHITE,
    },
    smallText: {
        fontSize: Size.XVI,
        fontFamily: Font.REGULAR,
        color: Colors.WHITE,
    },
    whiteBackGroundView: {
        marginTop: Dimensions.get('screen').height / 10,
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.WHITE,
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    mainView: {
        flex: 1,
        height: Dimensions.get('screen').height / 3.2,
        width: wp('91%'),
        backgroundColor: Colors.MAIN,
        overflow: 'hidden',
        position: 'absolute',
        alignSelf: 'center',
        elevation: 1,
        top: - Dimensions.get('screen').height / 15,
        borderRadius: 10,
    },
    imageStyle: {
        height: wp(15),
        width: wp(25),
        resizeMode: 'contain',
    },
    iconView: {
        alignSelf: 'flex-end',
    },
    cardInnerView: {
        marginHorizontal: wp(7)
    },
    cardNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: wp(6)
    },
    validACvv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: wp(3)
    },
    textStyle: {
        fontSize: Size.XVI,
        color: Colors.WHITE,
        fontWeight: '600',
        marginRight: wp(5),
        letterSpacing: 3
    },
    nameStyle: {
        fontSize: Size.XXVI,
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
    showHideText: {
        fontSize: Size.XVI,
        color: Colors.MAIN,
        marginLeft: wp(1) 
    },
    cardControlStyle: {
        marginTop: Dimensions.get('screen').height / 4.8,
        marginHorizontal: wp(5)
    },
    featureTitle: {
        fontSize: Size.XVI,
        color: Colors.TEXT,
        fontWeight: 'bold',
    },
    featureDesc: {
        fontSize: Size.XVI,
        color: Colors.TEXT,
        opacity: .6
    },
    itemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    boxDesign: {
        height: wp(7),
        width: wp(10),
        backgroundColor: Colors.MAIN,
        borderRadius: wp(2),
        justifyContent: 'center'
    },
    hideShowContainer: {
        height: wp(9),
        width: wp(45),
        backgroundColor: Colors.WHITE,
        alignSelf: 'flex-end',
        top: - Dimensions.get('screen').height / 9.7,
        marginRight: wp(4.6),
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
    },
    smallButtonContainer: {
        height: wp(10),
        width: wp(28),
        backgroundColor: '#dbf6e8',
        justifyContent: 'center',
        borderRadius: 5
    },
    smallButtonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '600',
        fontSize: Size.XVIII,
        color: Colors.MAIN
    },
    weeklySpendContainer: {
        backgroundColor: Colors.WHITE, 
        flex: 1, 
        marginTop: hp(5),
        borderTopLeftRadius: wp(6),
        borderTopRightRadius: wp(6)
    },
    smallButtonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(5)
    },
    saveButtonContainer: {
        backgroundColor: Colors.MAIN,
        height: wp(16),
        width: wp(70),
        bottom: 30,
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: wp(20),
    },
    saveButton: {
        textAlign: 'center',
        textAlignVertical: 'center', 
        fontWeight: 'bold', 
        fontSize: Size.XX, 
        color: Colors.WHITE
    },
    limitSpendHeader: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    limitSpendTitle: {
        fontSize: Size.XVI,
        color: Colors.BLACK,
    },
    spendLimit: {
        fontSize: Size.XVI,
        color: Colors.TEXT,
        opacity: .6
    },
    spendProgress:{
        height: wp(4),
        width: '100%',
        borderRadius: wp(2),
        backgroundColor: '#dbf6e8',
    },
});
export default commonStyle;
