export default function cleanSet(set, startString) {
  const cleaned = [];

  for (const item of set.values()) {
    if (startString !== '' && item.startsWith(startString)) {
      cleaned.push(item.substring(startString.length - 1));
    }
  }
  return cleaned.join('-');
}
