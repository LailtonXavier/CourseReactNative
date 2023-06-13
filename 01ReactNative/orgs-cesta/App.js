import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Basket from './src/page/Basket';
import mocksBasket from './src/mocks/basket';

// chama o splash na tela
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ loadedFont ] = useFonts({
   "MontserratRegular": Montserrat_400Regular,
   "MontserratBold": Montserrat_700Bold
  }) 

  const onLayoutRootView = useCallback(async () => {
    if (loadedFont) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [loadedFont]);

  if(!loadedFont) return null;

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Basket {...mocksBasket} />
    </SafeAreaView>
  );
}

