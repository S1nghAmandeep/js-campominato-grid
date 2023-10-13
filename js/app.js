// # Gliglia Campo Minato

const bodyCellElement = document.querySelector('.cell-body');
console.log(bodyCellElement);

const playBtnElement = document.getElementById('play-btn');
console.log(playBtnElement);

playBtnElement.addEventListener('click', function () {

    bodyCellElement.innerHTML = '';
   
    for (let i = 0; i < 100; i++){
        const n = i + 1;
        
        // creato stinga per inserirela nel DOM
        const cellsString = `<div class="cell">${n}</div>`;
        bodyCellElement.innerHTML += cellsString;
    }
    

})
