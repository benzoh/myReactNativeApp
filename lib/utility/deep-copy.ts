export default function deepCopy<T>(target: T) {
  return JSON.parse(JSON.stringify(target));
}