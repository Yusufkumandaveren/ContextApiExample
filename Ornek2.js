import { View, Text, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { NameContext } from './Context';

export default function Ornek2() {
    const context = useContext(NameContext);
  return (
    <View style={[styles.container, {backgroundColor:context.theme === 'light' ? '#eaeaea' : '#4c4c4c' }]}>
      <Text style={styles.text}>{context.theme}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    width:300,
    height:300,
    borderRadius:45,
  },
  text:{
    fontWeight:'bold',
    fontSize:25,
    color:'blue'
  }
});