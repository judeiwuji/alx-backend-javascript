export default function cleanSet(set, startString) {
  const cleaned = [];

  for (const item of set.values()) {
    const str = item.substring(0, startString.length);
    if (startString && str === startString) {
      cleaned.push(item.substring(startString.length));
    }
  }
  return cleaned.join('-');
}
