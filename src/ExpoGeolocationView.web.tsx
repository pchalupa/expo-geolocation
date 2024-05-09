import * as React from 'react';

import { ExpoGeolocationViewProps } from './ExpoGeolocation.types';

export default function ExpoGeolocationView(props: ExpoGeolocationViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
