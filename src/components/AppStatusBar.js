import React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import CommonStyle from './Style';

const AppStatusBar = ({backgroundColor}) => (
  <View style={[CommonStyle.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} barStyle="light-content"  />
    </SafeAreaView>
  </View>
);

export default AppStatusBar;