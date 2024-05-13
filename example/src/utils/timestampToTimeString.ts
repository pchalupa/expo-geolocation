export function timestampToTimeString(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString('en-EN');
}
