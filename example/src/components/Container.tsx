import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { color, size } from '~/constants';

export const Container = ({ children }: PropsWithChildren) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: size.l,
    backgroundColor: color.surfacePrimary,
    alignItems: 'center',
  },
});
