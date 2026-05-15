import React from 'react';
import { View } from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';

import Presentacion from './components/Presentacion';

export default function App() {

  return (
    <SafeAreaProvider>

      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Presentacion />
        </View>

      </SafeAreaView>

    </SafeAreaProvider>
  );
}