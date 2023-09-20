import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold, } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, Center } from 'native-base'


import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { Routes } from '@routes/index';
import { Home } from '@screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (

    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
      {fontsLoaded ? <Routes/> :  <Loading />}
       
    </NativeBaseProvider>
  );
}



