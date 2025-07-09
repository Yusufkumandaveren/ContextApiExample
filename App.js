import { StyleSheet, View, Text } from 'react-native';
import {NameContext, NameContextProvider} from './Context'
import Ornek from './Ornek'

export default function App() {
  return (
    <NameContextProvider >
    <View style={styles.container}>
    <Ornek />
    </View>
    </NameContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
