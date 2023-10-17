function isPalindrome(input: number): boolean {
  const inputStr = input.toString();
  const reversedInput = inputStr.split('').reverse().join('');
  return inputStr === reversedInput;
}

function palindrome(input: number, steps: number = 0): { palindrome: number; steps: number } {
  if (isPalindrome(input)) {
    return { palindrome: input, steps };
  } else if (steps >= 100) {
    throw new Error('Palindrome not found after 100 steps.');
  } else {
    const inputStr = input.toString();
    const reversedInput = inputStr.split('').reverse().join('');
    const sum = input + parseInt(reversedInput);
    return palindrome(sum, steps + 1);
  }
}

function variator<T>(arr: T[]): T[][] {
  if (arr.length === 0) {
    return [[]];
  }

  const variatorArr: T[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const elements = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutations = variator(elements);

    for (const permutation of permutations) {
      variatorArr.push([arr[i], ...permutation]);
    }
  }

  return variatorArr;
}
