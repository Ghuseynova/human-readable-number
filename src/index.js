module.exports = function toReadable(number) {
    const singles = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const units = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const th = ["thousand", "million", "billion"];

    const stringNum = number.toString();

    if (number < 10) {
        return singles[number];
    } else if (number > 10 && number < 20) {
        return units[(number % 10) - 1];
    } else if (number % 10 == 0 && number < 100) {
        return tens[number / 10 - 1];
    } else if (number > 20 && number < 100 && number % 10 !== 0) {
        return `${tens[Math.floor(number / 10) - 1]} ${singles[number % 10]}`;
    } else if (number >= 100 && number < 1000 && number % 100 === 0) {
        return `${singles[number / 100]} hundred`;
    } else if (number > 100 && number < 1000 && number % 100 !== 0) {
        const r = number % 100;

        if (r < 10) {
            return `${singles[Math.floor(number / 100)]} hundred ${singles[r]}`;
        } else if (r > 10 && r < 20) {
            return `${singles[Math.floor(number / 100)]} hundred ${
                units[(r % 10) - 1]
            }`;
        } else {
            return `${singles[Math.floor(number / 100)]} hundred ${
                tens[Math.floor(r / 10) - 1]
            }${r % 10 !== 0 ? " " + singles[r % 10] : ""}`;
        }
    }
};
