import { latinToCyrillic, cyrillicToLatin } from '../src';

describe('Main', () => {
  it('should convert latin to cyrillic', () => {
    expect(latinToCyrillic("So'zlar")).toEqual("Сўзлар");
  });
});

describe('Main', () => {
  it('should convert cyrillic to latin', () => {
    console.log(cyrillicToLatin("Ёрдам"))
    expect(cyrillicToLatin("Ёрдам", true)).toEqual("Yordam");
  });
});
