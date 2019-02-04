import { numToKr } from '@/filters';

describe('filters', () => {
  it('should return Korean from number 123', () => {
    expect(numToKr(123)).toBe('일백이십삼');
  });

  it('should return Korean from number 0', () => {
    expect(numToKr(0)).toBe('영');
    expect(numToKr(0, false)).toBe('영');
  });

  it('should return Korean from number 1', () => {
    expect(numToKr(1)).toBe('일');
    expect(numToKr(1, false)).toBe('일');
  });

  it('should return Korean from number 71365', () => {
    expect(numToKr(71365)).toBe('칠만일천삼백육십오');
    expect(numToKr(71365, false)).toBe('칠만천삼백육십오');
  });

  it('should return Korean from number 1131365', () => {
    expect(numToKr(1131365)).toBe('일백일십삼만일천삼백육십오');
    expect(numToKr(1131365, false)).toBe('백십삼만천삼백육십오');
  });

  it('should return Korean from number 113136539', () => {
    expect(numToKr(113136539)).toBe('일억일천삼백일십삼만육천오백삼십구');
    expect(numToKr(113136539, false)).toBe('일억천삼백십삼만육천오백삼십구');
  });

});
