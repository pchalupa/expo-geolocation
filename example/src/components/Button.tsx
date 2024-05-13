import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { color, size } from '../constants';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const Button = ({ text, onPress }: ButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: color.surfaceSecondary,
    paddingVertical: size.m,
    paddingHorizontal: size.xl,
    borderRadius: size.l,
  },
  text: {
    textAlign: 'center',
    color: color.textSecondary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
