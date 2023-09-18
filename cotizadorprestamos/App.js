/**
* @format
* @flow strict-local
*/
import React from 'react';
import {
SafeAreaView,
StyleSheet,
View,
Text,} from 'react-native';

import colors from './src/utils/colors';
export default function App(){
return(
<>
<SafeAreaView style={styles.Header}>
<Text>Header</Text>
</SafeAreaView>
<View>
<Text>Result</Text>
</View>
<View>
<Text>Footer</Text>
</View>
</>
);
}
const styles = StyleSheet.create({
Header:{
backgroundColor: colors.PRIMARY_COLOR,
height:200,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
alignItems:'center'
}
})