import assert from './assert';

function equals<T>(a: Array<T>, b: Array<T>) {
  assert(a.length === b.length);

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

const table = new Map();

interface Arg {
  [key: string]: any;
}
type Memoizee = (...args: Array<any>) => any;
type Memoized = (arg: Arg) => any;
type Selector = (arg: Arg) => Array<any>;

export default (selector: Selector, memoizee: Memoizee): Memoized => (arg: Arg) => {
  if (!table.has(memoizee)) {
    table.set(memoizee, { args: null, result: null });
  }

  const cache = table.get(memoizee);
  const args = selector(arg);

  if (equals(cache.args, args)) {
    return cache.result;
  }

  cache.args = args.slice();
  cache.result = memoizee.apply(null, args);
  return cache.result;
}