import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoGeolocationViewProps } from './ExpoGeolocation.types';

const NativeView: React.ComponentType<ExpoGeolocationViewProps> =
  requireNativeViewManager('ExpoGeolocation');

export default function ExpoGeolocationView(props: ExpoGeolocationViewProps) {
  return <NativeView {...props} />;
}
