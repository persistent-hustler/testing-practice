import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './main.js';

test('Capitalize function', ()=>{
    expect(capitalize('vineeth')).toBe('Vineeth');
});

test('Reverse String', ()=>{
    expect(reverseString('cow')).toBe('woc');
});

test('Calculator', ()=> {
    expect([calculator.add(2,3), calculator.subtract(5,2), calculator.multiply(3,5), calculator.divide(6,2)]).toStrictEqual([5,3,15,3]);
});

test('Caesar Cipher', ()=> {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('Analyze Array', ()=>{
    expect(analyzeArray([1,2,3,4,5])).toEqual({average: 3, min: 1, max: 5, length: 5});
})