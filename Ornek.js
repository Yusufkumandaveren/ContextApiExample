import { View, Text, Button, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { NameContext } from './Context';
import Ornek2 from './Ornek2';

export default function Ornek() {
  const context = useContext(NameContext);
  return (
    <View style={[styles.container,{backgroundColor:context.theme === 'light' ? 'white' : '#212121'}]} >
      <Text style={styles.text}>{context.theme}</Text>
      <Button title={context.theme==='light' ? 'dark' : 'light'} onPress={() => context.setTheme(context.theme === 'light' ? 'dark' : 'light')} />
      <Ornek2 />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:25,
    
  }
});