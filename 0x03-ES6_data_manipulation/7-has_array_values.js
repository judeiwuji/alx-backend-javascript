export default function asValuesFromArray(set, arr) {
  return arr.every((d) => set.has(d));
}
