document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('score')
    const resultDisplay = document.querySelector('result')
    const width = 4;
    let squares = [];

    //Робим саму гру
    function createBoard(){
        for(let i = 0; i < width*width; i++) {
            let square = document.createElement('div');
            square.innerHTML = 0;           
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    createBoard();

    //генерим числа
    function generate(){
        let randomNumber = Math.floor(Math.random() * squares.length);
        if(squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2;
        }
        else generate();
    }

    //повороти
    function moveR(){
        for(let i=0; i < 16; i++){
            if(i%4 === 0){
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

                console.log(row);

                let filterRow = row.filter(num => num)
                console.log(filterRow);
                let missing = 4 - filterRow.length;
                let zero = Array(missing).fill(0);
                console.log(zero);
                let newRow = zero.concat(zero);
                console.log(newRow);

                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];
            }
        }
    }
    function moveL(){
        for(let i=0; i < 16; i++){
            if(i%4 === 0){
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

                console.log(row);

                let filterRow = row.filter(num => num)
                console.log(filterRow);
                let missing = 4 - filterRow.length;
                let zero = Array(missing).fill(0);
                console.log(zero);
                let newRow = filterRow.concat(zero);
                console.log(newRow);

                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];
            }
        }
    }
    moveL();
})

