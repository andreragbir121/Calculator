document.addEventListener('DOMContentLoaded', function () {
    const output = document.querySelector('.output');
    const buttons = document.querySelectorAll('.calculator button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.value;

            if (value === '=') {
                try {
                    output.value = eval(output.value);
                } catch (error) {
                    output.value = 'Error';
                }
            } else if (value === 'del') {
                output.value = output.value.slice(0, -1); 
            } else {
                output.value += value;
            }
        });
    });
});