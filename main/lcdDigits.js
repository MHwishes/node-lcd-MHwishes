exports.loadLcdDigits = function () {
    return [
        {
            digit: '0',
            partLcdDigits: ['._.', '|.|', '|_|']
        },
        {
            digit: '1',
            partLcdDigits: ['...', '..|', '..|']
        },
        {
            digit: '2',
            partLcdDigits: ['._.', '._|', '|_.']
        },
        {
            digit: '3',
            partLcdDigits: ['._.', '._|', '._|']
        },
        {
            digit: '4',
            partLcdDigits: ['...', '|_|', '..|']
        },
        {
            digit: '5',
            partLcdDigits: ['._.', '|_.', '._|']
        },
        {
            digit: '6',
            partLcdDigits: ['._.', '|_.', '|_|']
        },
        {
            digit: '7',
            partLcdDigits: ['._.', '..|', '..|']
        },
        {
            digit: '8',
            partLcdDigits: ['._.', '|_|', '|_|']
        },
        {
            digit: '9',
            partLcdDigits: ['._.', '|_|', '..|']
        }
    ];
}


exports.buildDigitArray = function (input) {
    var digitsArray = [];

    digitsArray = input.split("");

    return digitsArray;
}

function findLcdDigits(digit, lcds) {
    for (var i = 0; i < lcds.length; i++) {
        if (digit === lcds[i].digit)

            return lcds[i].partLcdDigits;
    }
}

exports.buildLcdDigts = function (digitsArray, lcds) {
    var lcdDigits = [];

    digitsArray.forEach(function (digit) {
        var lcd = findLcdDigits(digit, lcds);

        if (lcd) {
            lcdDigits.push(lcd);
        }
    });

    return lcdDigits;
}

function buildLcdPart(lcdDigitText, lcdDigits, k) {
    lcdDigits.forEach(function (lcdDigit) {
        lcdDigitText += lcdDigit[k] + ' ';

    });

    return lcdDigitText;
}

exports.buildLcdDigitText = function (lcdDigits) {
    var lcdDigitText = '';

    for (var k = 0; k < 3; k++) {
        lcdDigitText = buildLcdPart(lcdDigitText, lcdDigits, k);
        if (k < 2)
            lcdDigitText += '\n';
    }

    console.log(lcdDigitText);
}


