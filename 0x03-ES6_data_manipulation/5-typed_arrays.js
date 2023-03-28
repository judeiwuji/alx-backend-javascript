export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer, 0, length);
  int8[position] = value;
  return new DataView(buffer, 0, length);
}
