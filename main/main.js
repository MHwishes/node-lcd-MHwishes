exports.creatLcdDigits = function (inputs) {
    var printLcdDigits = require('./lcdDigits');

    var lcds = printLcdDigits.loadLcdDigits();
    var digitsArray = printLcdDigits.buildDigitArray(inputs);

    var lcdDigits = printLcdDigits.buildLcdDigts(digitsArray, lcds);

    printLcdDigits.buildLcdDigitText(lcdDigits);
}
