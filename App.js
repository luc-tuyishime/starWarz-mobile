import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Datafetching from './fetch/dataFetching';

export default function App() {
  return (
    <View style={styles.container}>
      <Datafetching />
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
