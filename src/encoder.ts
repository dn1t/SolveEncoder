export const encode = (text: string, zero: string, one: string) =>
  Array.from(new TextEncoder().encode(text))
    .flatMap((b) => b.toString(2).padStart(8, '0').split(''))
    .map((b) => (Number(b) === 0 ? zero : one))
    .join('');

export const decode = (solve: string, zero: string, one: string) => {
  const bitArray = solve
    .replaceAll(zero, '0')
    .replaceAll(one, '1')
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
