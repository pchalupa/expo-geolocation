import { requireNativeModule } from 'expo-modules-core';

import { type ExpoGeolocationModule } from './ExpoGeolocation.types';

export default requireNativeModule<ExpoGeolocationModule>('ExpoGeolocation');
