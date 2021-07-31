const _zero = '솔브',
  _one = '바보';

export const encode = (text: string) =>
  Array.from(new TextEncoder().encode(text))
    .flatMap((b) => b.toString(2).padStart(8, '0').split(''))
    .map((b) => (Number(b) === 0 ? _zero : _one))
    .join('');

export const decode = (solve: string) => {
  const bitArray = solve
    .replaceAll(_zero, '0')
    .replaceAll(_one, '1')
    .split('')
    .map(Number);
  const byteArray = (() => {
    const chunk = [];
    for (let i = 0; i < bitArray.length; i += 8)
      chunk.push(bitArray.slice(i, 8 + i).join(''));
    return chunk;
  })().map((b) => parseInt(b, 2));
  const result = new TextDecoder().decode(Uint8Array.from(byteArray));

  return result;
};
