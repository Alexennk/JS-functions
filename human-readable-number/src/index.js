module.exports = function toReadable (number) {

    let numbers = [
        { number: 0, text: 'zero' },
        { number: 1, text: 'one' },
        { number: 2, text: 'two' },
        { number: 3, text: 'three' },
        { number: 4, text: 'four' },
        { number: 5, text: 'five' },
        { number: 6, text: 'six' },
        { number: 7, text: 'seven' },
        { number: 8, text: 'eight' },
        { number: 9, text: 'nine' },
        { number: 10, text: 'ten' },
        { number: 11, text: 'eleven' },
        { number: 12, text: 'twelve' },
        { number: 13, text: 'thirteen' },
        { number: 14, text: 'fourteen' },
        { number: 15, text: 'fifteen' },
        { number: 16, text: 'sixteen' },
        { number: 17, text: 'seventeen' },
        { number: 18, text: 'eighteen' },
        { number: 19, text: 'nineteen' },
        { number: 20, text: 'twenty' },
        { number: 30, text: 'thirty' },
        { number: 40, text: 'forty' },
        { number: 50, text: 'fifty' },
        { number: 60, text: 'sixty' },
        { number: 70, text: 'seventy' },
        { number: 80, text: 'eighty' },
        { number: 90, text: 'ninety' }
    ];

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index].number === number) return numbers[index].text;
    }

    if (number % 100 === 0) {
        for (let index = 0; index < 10; index++) {
            if (numbers[index].number === number / 100) return numbers[index].text + ' hundred';
        }
    }

    else {
        let result = '';
        if (number > 100) {
            for (let index = 0; index < 10; index++) {
                if (numbers[index].number === Math.floor(number / 100)) result = numbers[index].text + ' hundred ';
            }
        }
        number = number % 100;
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index].number === number) return result + numbers[index].text;
        }
        let firstDigit = Math.floor(number / 10);
        let secondDigit = number % 10;
        let lastDigitText = '';
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index].number === firstDigit * 10) result += numbers[index].text;
            if (numbers[index].number === secondDigit) lastDigitText = ' ' + numbers[index].text;
        }
        return result + lastDigitText;
    }
    
}