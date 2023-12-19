/** @jest-environment jsdom */

import cipher from '../src/cipher';

describe('cipher', () => {
  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.validateInput', () => {
    it('should be a function', () => {
      expect(typeof cipher.validateInput).toBe('function');
    });

    it('should return true for "hola"', () => {
      expect(cipher.validateInput('hola')).toBe(true);
    });

    it('should return false for "123"', () => {
      expect(cipher.validateInput('123')).toBe(false);
    });
  });

  describe('cipher.validateOffset', () => {
    it('should be a function', () => {
      expect(typeof cipher.validateOffset).toBe('function');
    });

    it('should return true for offset 33', () => {
      expect(cipher.validateOffset(33)).toBe(true);
    });

    it('should return false for offset "abc"', () => {
      expect(cipher.validateOffset('abc')).toBe(false);
    });
  });

  describe('cipher.copyResult', () => {
    const writeText = jest.fn()

    Object.assign(navigator, {
      clipboard: {
        writeText ,
      },
    });

    beforeAll(() => {
      navigator.clipboard.writeText.mockResolvedValue(undefined)
      cipher.copyResult('test');;
    });

    it('should be a function', () => {
      expect(typeof cipher.copyResult).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument type', () => {
      expect(() => cipher.copyResult(10)).toThrow(TypeError);
    });

    it('should call navigator.clipboard.writeText with "test" argument', () => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test');
    });
  });

  describe('cipher.encode', () => {
    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return " !@" for " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should return " !@" para " !@"', () => {
      expect(cipher.decode(33, ' !@')).toBe(' !@');
    });
  });

});
