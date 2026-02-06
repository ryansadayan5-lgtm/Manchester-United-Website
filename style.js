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


document.addEventListener('DOMContentLoaded', function() {
    const tableSection = document.querySelector('.row.mt-5 .col-12');
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-table';
    toggleButton.className = 'btn btn-danger mb-3';
    toggleButton.textContent = 'Hide Rivalry Table';
    tableSection.insertBefore(toggleButton, tableSection.querySelector('h2'));
    toggleButton.addEventListener('click', function() {
        const table = document.querySelector('.table');
        if (table.style.display === 'none') {
            table.style.display = 'table';
            this.textContent = 'Hide Rivalry Table';
        } else {
            table.style.display = 'none';
            this.textContent = 'Show Rivalry Table';
        }
    });
    const form = document.getElementById('newsletter-form');
    const errorDiv = document.getElementById('form-errors');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let errors = [];
        const email = document.getElementById('email');
        const name = document.getElementById('name');
        if (!email.value || !email.value.includes('@')) {
            errors.push('Please provide a valid email.');
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }
        if (!name.value.trim()) {
            errors.push('Name cannot be empty.');
            name.classList.add('is-invalid');
        } else {
            name.classList.remove('is-invalid');
        }
        if (errors.length > 0) {
            errorDiv.innerHTML = errors.join('<br>');
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
            alert('Subscribed successfully!');
            form.reset();
        }
    });
    setInterval(function() {
        const rows = document.querySelectorAll('.table tbody tr');
        if (rows.length > 0) {
            const randomRow = rows[Math.floor(Math.random() * (rows.length - 1))]; 
            const cells = randomRow.querySelectorAll('td');
            if (cells.length > 0) {
                const randomCell = cells[Math.floor(Math.random() * cells.length)];
                const currentValue = parseInt(randomCell.textContent);
                randomCell.textContent = currentValue + Math.floor(Math.random() * 5);
            }
        }
    }, 10000);
});