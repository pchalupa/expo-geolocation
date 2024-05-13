import { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

import { color, size } from '~/constants';

export const Title = ({ children }: PropsWithChildren) => (
  <Text style={styles.text}>{children}</Text>
);

export const styles = StyleSheet.create({
  text: {
    color: color.textPrimary,
    fontSize: size.l,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
