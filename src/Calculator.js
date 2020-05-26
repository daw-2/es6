export default class Calculator {
    constructor() {
        this.operators = ['+', '-', 'x', '/', '='];
        this.displayValue = '0';
        this.firstOperand = null;
        this.hasSecondOperand = false;
        this.operator = null;
        this.calculation = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '/': (a, b) => a / b,
            'x': (a, b) => a * b,
            '=': (a, b) => b
        }
    }

    init() {
        let buttons = document.querySelectorAll('button');

        for (let button of buttons) {
            button.addEventListener('click', event => {
                let value = event.target.textContent;

                if ('AC' === value) {
                    this.handleClear();
                } else if ('.' === value && !this.operator) {
                    this.handleDot();
                } else if (this.isOperator(value)) {
                    this.handleOperator(value);
                } else if (!this.isOperator(value)) {
                    this.handleDigit(value);
                }

                this.updateDisplay();
            });
        }
    }

    handleClear() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.hasSecondOperand = false;
        this.operator = null;
    }

    handleDot() {
        if (!this.displayValue.includes('.')) {
            this.displayValue += '.';
        }
    }

    handleDigit(value) {
        if (this.firstOperand && !this.hasSecondOperand) {
            this.displayValue = '0';
            this.hasSecondOperand = true;
        }

        this.displayValue = '0' === this.displayValue ? value : this.displayValue + value;
    }

    handleOperator(value) {
        if (this.hasSecondOperand) {
            this.firstOperand = this.calculation[this.operator](this.firstOperand, parseFloat(this.displayValue));
            this.displayValue = String(this.firstOperand);
            this.hasSecondOperand = false;
        }

        this.firstOperand = parseFloat(this.displayValue);
        this.operator = value;
    }

    isOperator(value) {
        return this.operators.includes(value);
    }

    updateDisplay() {
        document.querySelector('#result').textContent = this.displayValue;
    }
}
