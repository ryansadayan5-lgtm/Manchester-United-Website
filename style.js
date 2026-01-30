document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('calculator-container');
    if (container) {
        const display = document.createElement('input');
        display.type = 'text';
        display.id = 'calc-display';
        display.className = 'calc-input';
        display.readOnly = true;
        container.appendChild(display);
        const buttons = [
            ['7', '8', '9', '+'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '*'],
            ['0', 'C', '=', '/']
        ];
        buttons.forEach(row => {
            const calcRow = document.createElement('div');
            calcRow.className = 'calc-row';
            row.forEach(btnText => {
                const btn = document.createElement('button');
                btn.className = 'calc-btn';
                if (btnText === '+' || btnText === '-' || btnText === '*' || btnText === '/') {
                    btn.classList.add('calc-op');
                } else if (btnText === 'C') {
                    btn.classList.add('calc-clear');
                } else if (btnText === '=') {
                    btn.classList.add('calc-equals');
                }
                btn.textContent = btnText;
                btn.onclick = function() {
                    if (btnText === 'C') {
                        clearDisplay();
                    } else if (btnText === '=') {
                        calculate();
                    } else {
                        appendToDisplay(btnText);
                    }
                };
                calcRow.appendChild(btn);
            });
            container.appendChild(calcRow);
        });
    }
});
function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('calc-display').value);
        document.getElementById('calc-display').value = result;
    } catch (error) {
        document.getElementById('calc-display').value = 'Error';
    }
}

 document.getElementById('newsletter-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let errors = [];

            if (name === '') {
                errors.push('Name cannot be empty.');
                document.getElementById('name').classList.add('is-invalid');
            } else {
                document.getElementById('name').classList.remove('is-invalid');
            }

            if (!emailPattern.test(email)) {
                errors.push('Please provide a valid email.');
                document.getElementById('email').classList.add('is-invalid');
            } else {
                document.getElementById('email').classList.remove('is-invalid');
            }

            if (errors.length > 0) {
                document.getElementById('form-errors').innerHTML = errors.join('<br>');
                document.getElementById('form-errors').style.display = 'block';
            } else {
                document.getElementById('form-errors').style.display = 'none';
                alert('Subscribed successfully!');
                this.reset();
            }
        });