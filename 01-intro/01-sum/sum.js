export default function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Один или несколько аргументов не являются числом');
  }

  return a + b;
}