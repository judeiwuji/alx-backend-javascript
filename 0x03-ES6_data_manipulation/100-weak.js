export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let count = 0;
  if (weakMap.has(endpoint)) {
    count = weakMap.get(endpoint);
  }

  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
