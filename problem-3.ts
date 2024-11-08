function countWordOccurrences(sentence: string, word: string): number {
    
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
  
    const words = lowerCaseSentence.split(' ');
  
    let count = 0;
    for (const currentWord of words) {
      if (currentWord === lowerCaseWord) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countWordOccurrences("I love typescript", "typescript"));
  