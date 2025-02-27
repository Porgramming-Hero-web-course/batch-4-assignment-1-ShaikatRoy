function removeDuplicates(numbers: number[]): number[] {
    
    const uniqueNumbers: number[] = [];
    
    for (const num of numbers) {
      if (!uniqueNumbers.includes(num)) {
        uniqueNumbers.push(num);
      }
    }
    
    return uniqueNumbers;
  }
  
  console.log(removeDuplicates([1, 6, 2, 7, 4, 7, 6, 2]));
  