import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoGeolocation.web.ts
// and on native platforms to ExpoGeolocation.ts
import ExpoGeolocationModule from './ExpoGeolocationModule';
import ExpoGeolocationView from './ExpoGeolocationView';
import { ChangeEventPayload, ExpoGeolocationViewProps } from './ExpoGeolocation.types';

// Get the native constant value.
export const PI = ExpoGeolocationModule.PI;

export function hello(): string {
  return ExpoGeolocationModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoGeolocationModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoGeolocationModule ?? NativeModulesProxy.ExpoGeolocation);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoGeolocationView, ExpoGeolocationViewProps, ChangeEventPayload };
