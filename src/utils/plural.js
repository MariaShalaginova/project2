//изменение окончания слов в зависимости от количества 
   export default function pluralize(number, words) {
        let wordIndex;
        if (number % 10 === 1 && number % 100 !== 11) {
          wordIndex = 0;
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
          wordIndex = 1;
        } else {
          wordIndex = 2;
        }
        
        return words[wordIndex];
      }