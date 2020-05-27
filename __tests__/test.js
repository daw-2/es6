import Calculator from '../src/Calculator';

describe('My tests', () => {
    it('can addition', () => {
        let calc = new Calculator();

        expect(calc.isOperator('12')).toBe(false);
        for (let operator of calc.operators) {
            expect(calc.isOperator(operator)).toBe(true);
        }
    });

    it('should calculate', () => {
        let calc = new Calculator();

        document.body.innerHTML = '<button>5</button><div id="result">0</div>';
        calc.init();

        document.querySelector('button').click();
        console.log(document.getElementById('result').textContent);
    });
});
