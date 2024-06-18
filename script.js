window.onload = function() {
    const adviceID = document.getElementById('advice-id');
    const advice = document.getElementById('advice');
    const button = document.getElementById('button');
    
    async function getAdvice() {
        const response = await fetch('https://api.adviceslip.com/advice');
        const newAdvice = await response.json();
        return newAdvice;
    }

    async function displayAdvice() {
        let newAdvice = await getAdvice();
        adviceID.innerHTML = `Advice #${newAdvice.slip.id}`;
        advice.innerHTML = `"${newAdvice.slip.advice}"`;
    }

    button.addEventListener('click', displayAdvice);

    displayAdvice();
}