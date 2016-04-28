var lcd_digits = require('../main/main');
var buildDigits = require('../main/lcdDigits');

describe("lcd_digits", function () {
    var lcds;

    beforeEach(function () {
        lcds = buildDigits.loadLcdDigits();
    });

    it("should get the correct result", function () {

        spyOn(console, 'log');

        lcd_digits.creatLcdDigits("910");

        expectText = '._. ... ._. ' + '\n'
            + '|_| ..| |.| ' + '\n'
            + '..| ..| |_| ';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe("buildDigitArray()", function () {

    it("should print correct array", function () {

        var digitArray = buildDigits.buildDigitArray("910");
        expect(digitArray).toEqual(['9', '1', '0']);
    })
});

describe("buildLcdDigits()", function () {

    it("should get the correct LCD_digits", function () {

        var digitArray = ['9', '1', '0'];

        var lcds = buildDigits.loadLcdDigits();
        var lcdDigts = buildDigits.buildLcdDigts(digitArray, lcds);

        var expectResult = [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];

        expect(lcdDigts).toEqual(expectResult);
    });
});

describe(" buildLcdDigitText()", function () {

    it("should print correct digits", function () {

        var lcdDigits = [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];

        spyOn(console, 'log');
        buildDigits.buildLcdDigitText(lcdDigits);
        expectText = '._. ... ._. ' + '\n'
            + '|_| ..| |.| ' + '\n'
            + '..| ..| |_| ';

        expect(console.log).toHaveBeenCalledWith(expectText);
    })
});
