import { StatusBar } from 'expo-status-bar';
import { View,SafeAreaView,StyleSheet } from 'react-native';
import { Home } from './src/screen/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} backgroundColor='#141A31'/>
      <Home/>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#141A31',
    justifyContent:'center',
    paddingStart:24,
    paddingEnd:24,
  }
})

