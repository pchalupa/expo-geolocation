import * as ExpoGeolocation from 'expo-geolocation';
import { forwardRef } from 'react';
import { FlatList, View, Text, useWindowDimensions, StyleSheet } from 'react-native';

import { Button } from './Button';

import { color, size } from '~/constants';
import { timestampToTimeString } from '~/utils/timestampToTimeString';

interface ListProps {
  data: { latitude: string; longitude: string; timestamp: number }[];
}

export const List = forwardRef<FlatList, ListProps>(({ data }, ref) => {
  const { width } = useWindowDimensions();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={[styles.item, { width }]}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <Text style={styles.description}>Position</Text>
              <Text style={styles.description}>{timestampToTimeString(item.timestamp)}</Text>
            </View>
            <Text style={styles.coordinates}>{item.latitude}</Text>
            <Text style={styles.coordinates}>{item.longitude}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={
        <View style={[styles.item, { width }]}>
          <Text style={styles.description}>No positions saved</Text>
          <Button text="Request Permissions" onPress={ExpoGeolocation.requestPermissions} />
        </View>
      }
      ref={ref}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEnabled={data.length > 0}
    />
  );
});

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: size.m,
  },
  wrapper: {
    borderColor: color.border,
    backgroundColor: color.surfaceTertiary,
    width: '80%',
    rowGap: size.s,
    borderWidth: 1,
    borderRadius: size.m,
    paddingVertical: size.m,
    paddingHorizontal: size.l,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  description: {
    color: color.textTertiary,
  },
  coordinates: {
    color: color.textPrimary,
    fontSize: size.m,
    fontWeight: 'bold',
  },
});
