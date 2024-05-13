import * as ExpoGeolocation from 'expo-geolocation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { type FlatList } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { List } from '~/components/List';
import { Title } from '~/components/Title';
import { convertLatLong } from '~/utils/convertLatLong';

type Coordinates = {
  latitude: string;
  longitude: string;
  timestamp: number;
};

export default function App() {
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
  const listRef = useRef<FlatList>(null);

  const handleSavePosition = useCallback(async () => {
    const currentCoordinates = await ExpoGeolocation.getCurrentCoordinates();

    setCoordinates((current) => [...current, convertLatLong(currentCoordinates)]);
  }, [setCoordinates]);

  useEffect(() => {
    listRef.current?.scrollToEnd();
  }, [coordinates]);

  return (
    <Container>
      <Title>Geolocation</Title>
      <List data={coordinates} ref={listRef} />
      <Button text="Save Coordinates" onPress={handleSavePosition} />
    </Container>
  );
}
