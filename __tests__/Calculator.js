import Calculator from '../src/Calculator';

describe('Test Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('can check if a value is an operator', () => {
        // let calc = new Calculator();

        expect(calc.isOperator('12')).toBe(false);
        for (let operator of calc.operators) {
            expect(calc.isOperator(operator)).toBe(true);
        }
    });

    it('should calculate 55 + 31 / 12', () => {
        // let calc = new Calculator();

        document.body.innerHTML = `
            <button>5</button><button>3</button><button>1</button><button>2</button>
            <button>+</button><button>/</button><button>=</button>
            <div id="result">0</div>
        `;
        calc.init();

        let buttons = document.querySelectorAll('button');

        // 55
        buttons[0].click();
        buttons[0].click();
        // +
        buttons[4].click();
        expect(document.getElementById('result').textContent).toBe('55');

        // 31
        buttons[1].click();
        buttons[2].click();
        expect(document.getElementById('result').textContent).toBe('31');

        // /
        buttons[5].click();
        expect(document.getElementById('result').textContent).toBe('86');

        // 12
        buttons[2].click();
        buttons[3].click();

        // =
        buttons[6].click();
        expect(document.getElementById('result').textContent).toBe('7.166666666666667');
    });

    it('can clear and add dot like 12.25 + 0.75 - 3 * 20 = 200', () => {
        let fs = require('fs');
        let html = fs.readFileSync('./build/calculatrice.html', 'utf8');
        let newDom = new DOMParser().parseFromString(html, 'text/html');
        document.body.innerHTML = newDom.body.innerHTML;

        calc.init();

        let buttons = document.querySelectorAll('button');

        // 12..25
        buttons[9].click();
        buttons[10].click();
        buttons[14].click();
        buttons[14].click();
        buttons[10].click();
        buttons[6].click();

        expect(document.getElementById('result').textContent).toBe('12.25');

        // +
        buttons[12].click();
        expect(document.getElementById('result').textContent).toBe('12.25');

        // .
        buttons[14].click();
        expect(document.getElementById('result').textContent).toBe('.');

        // 75
        buttons[1].click();
        buttons[6].click();
        expect(document.getElementById('result').textContent).toBe('.75');

        // -
        buttons[8].click();
        expect(document.getElementById('result').textContent).toBe('13');
        // 3
        buttons[11].click();
        // x
        buttons[4].click();
        expect(document.getElementById('result').textContent).toBe('10');
        // 20
        buttons[10].click();
        buttons[13].click();

        // =
        buttons[15].click();

        expect(document.getElementById('result').textContent).toBe('200');

        // AC
        buttons[0].click();
        expect(document.getElementById('result').textContent).toBe('0');
        expect(calc.firstOperand).toBe(null);
        expect(calc.hasSecondOperand).toBe(false);
        expect(calc.operator).toBe(null);
    })
});
