

async function getRandomAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice'); 
    const data = await response.json(); 
    

    const advice = data.slip.advice; 
    const id = data.slip.id;
    
    const idDiv = document.getElementById('adviceId');
    idDiv.innerHTML = `<h4>ADVICE #${id}</h4>`; 

    const adviceDiv = document.getElementById('advice');
    adviceDiv.innerHTML = `<h1>"${advice}"</h1>`;



}




getRandomAdvice();



