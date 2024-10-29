export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(str = '') {
    return str.split('').reverse().join('');
}

export const calculator = {
    add(a,b) {
        return a + b;
    },
    subtract(a,b) {
        return a - b;
    },
    multiply(a,b) {
        return a * b;
    },
    divide(a,b) {
        return a / b;
    }
}

export function caesarCipher(str, shift) {
    return str.split('').map(char => {
      
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
      }
      
      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
      }
      
      return char;
    }).join('');
}

export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Input must be a non-empty array of numbers.");
    }
  
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const length = arr.length;
    const average = sum / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return { average, min, max, length };
  }
  