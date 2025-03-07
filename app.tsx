import React from 'react';
import { Platform, View, Text } from 'react-native';

const App = () => {
  if (Platform.OS === 'web') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Web version does not support maps.</Text>
      </View>
    );
  } else {
    const MapView = require('./components/Map').default;
    return <MapView />;
  }
};

export default App;
