export default function cleanSet(set, startString) {
  const cleaned = [];

  for (const value of set) {
    if (value) {
      const str = value.substring(0, startString.length);
      if (startString && str === startString) {
        const sub = value.substring(startString.length);
        cleaned.push(sub);
      }
    }
  }
  return cleaned.join('-');
}
