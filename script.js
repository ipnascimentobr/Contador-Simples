document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const decrementButton = document.getElementById('decrementButton');
    const incrementButton = document.getElementById('incrementButton');

    let count = 0;

    decrementButton.addEventListener('click', () => {
        count--;
        counterElement.textContent = count;
    });

    incrementButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });
});
