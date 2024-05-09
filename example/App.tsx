import { StyleSheet, Text, View } from 'react-native';

import * as ExpoGeolocation from 'expo-geolocation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoGeolocation.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
