class Dictionary {
  constructor(wordsArray) {
    const wordMap = wordsArray.reduce((acc, word) => {
      acc[word] = true;
      word.split("").forEach((letter, i) => {
        const partialWord = word;
        partialWord = "*";
        acc[partialWord] = true;
      });

      return acc;
    }, {});
    this.dict = wordMap;
  }
}
