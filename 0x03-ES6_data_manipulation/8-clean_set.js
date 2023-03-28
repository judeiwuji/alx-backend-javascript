export default function cleanSet(set, startString) {
  const cleaned = [];
  const copy = set;

  for (const [key, value] of set.entries()) {
    const str = value.substring(0, startString.length);
    if (startString && str === startString) {
      const sub = value.substring(startString.length);
      cleaned.push(sub);
      copy[key] = sub;
    }
  }
  return cleaned.join('-');
}
