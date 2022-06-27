function spawnTheRock() {
    let elements = document.querySelectorAll('img');
    let elementsAmmount = elements.length;
    let ramdomNumber = Math.floor(Math.random() * elementsAmmount);
    let elementoTheRock  = elements[ramdomNumber];

    elementoTheRock.classList.add(`tr${Math.floor(Math.random() * 6)}`)
};

function killTheRock() {
    for (let i=1; i<8; i++) {
        let supostoTheRock = document.querySelector(`.tr${i}`);
        if (supostoTheRock !== null) {
            supostoTheRock.classList.remove(`tr${i}`)
        };
    };
}

function main() {
    spawnTheRock();
    setTimeout(killTheRock, 500);
};

setInterval(main, 1000);