let player = []
let opponent = []
let opploss1 = 0
let playloss1 = 0
let opploss2 = 0
let playloss2 = 0
let oppweap = ""
let gameStatus = "It's Your Turn!"
let oppweapimg = "none.png"


let combatants = {
    bugeisha: {
        name: "Onna-bugeisha",
        health: 100,
        strength: 5,
        ferocity: 7,
        intelligence: 9,
        description: "Trained to kill.",
        img: "bugeisha.jpg",
        items: ["None"]
    },
    mulan: {
        name: "Mulan",
        health: 100,
        strength: 7,
        ferocity: 8,
        intelligence: 6,
        description: "A determined and skilled warrior",
        img: "mulan.jpg",
        items: ["None"]
    },
    shaolin: {
        name: "Shaolin",
        health: 100,
        strength: 6,
        ferocity: 6,
        intelligence: 7,
        description: "A large punch in a small package.",
        img: "shaolin.jpg",
        items: ["None"]
    },
    kungfupanda: {
        name: "Kung fu Panda",
        health: 100,
        strength: 10,
        ferocity: 5,
        intelligence: 5,
        description: "His bear hugs can kill you.",
        img: "kungfupanda.jpg",
        items: ["None"]
    }
}

let weapons = ["Katana", "Qiang", "Nunchaku"]

function removeInstructions() {
    $(document.getElementById("intro")).hide()
    drawAvatars()
}

function returnInstructions() {
    $(document.getElementById("intro")).show()
}

function newGame() {
    $(document.getElementById("gameboard")).hide()
    drawAvatars()
}

function drawAvatars() {
    let template = ""
    for (let prop in combatants) {
        let warrior = combatants[prop];
        template2 =
            `Choose Your Avatar`
        template +=
            `   <div class="col-12 col-md-2 m-3 border" style="display: inline-grid">
                <h4>Name: ${warrior.name}</h4>
                <div><img src=${warrior.img} alt=""></div>
                <h5>Strength: ${warrior.strength}</h5>
                <h5>Ferocity: ${warrior.ferocity}</h5>
                <h5>Intelligence: ${warrior.intelligence}</h5>
                <h5>Notes: ${warrior.description}</h5>
                <button class="btn btn-danger rounded mt-4" onclick = "chooseSelf('${prop}')"> Choose </button></h4>
                </div>`
    }
    document.getElementById("t2").innerText = template2
    document.getElementById("avatars").innerHTML = template
    $(document.getElementById("hideme")).show()
}

function chooseSelf(person) {
    player.push(combatants[person])
    drawOpponents()
}

function drawOpponents() {
    let template = ""
    for (let prop in combatants) {
        if (player[0] != combatants[prop]) {
            let warrior = combatants[prop];
            template2 =
                `Choose Your Opponent`
            template +=
                `<div class="col-12 col-md-2 m-3 border" style="display: inline-grid">
                <h4>Name: ${warrior.name}</h4>
                <div><img src=${warrior.img} alt=""></div>
                <h5>Strength: ${warrior.strength}</h5>
                <h5>Ferocity: ${warrior.ferocity}</h5>
                <h5>Intelligence: ${warrior.intelligence}</h5>
                <h5>Notes: ${warrior.description}</h5>
                <button class="btn btn-danger rounded mt-4" onclick = "chooseOther('${prop}')"> Choose </button></h4>
                </div>`
        }
    }
    document.getElementById("t2").innerText = template2
    document.getElementById("avatars").innerHTML = template

}

function chooseOther(person) {
    opponent.push(combatants[person])
    $(document.getElementById("hideme")).hide()
    drawGameboard()
}

function drawGameboard() {
    let template = ""
    template +=
        /*html*/
        `<div class="row m-2 currplayrow" style="justify-content: space-evenly;">
            <div class="col-5 col-md-4 m-3 text-center toprow playerbox">
                <p><b>YOU: </b>${player[0].name}</p>
                <img src=${player[0].img} alt="">
                <h4>current weapon: ${player[0].items[0]}</h4>
                <h4>current health: ${player[0].health}</h4>
            </div>
            <div class="col-5 col-md-4 m-3 text-center toprow playerbox">
                <p><b>OPPONENT: </b>${opponent[0].name}</p>
                <img src=${opponent[0].img} alt="">
                <h4>current weapon: ${opponent[0].items[0]}</h4>
                <h4>current health: ${opponent[0].health}</h4>
            </div>
        </div>
        <div class="row m-2" style="justify-content: space-evenly;">
            <div class="col-12 col-md-5 statusboard bottomrow mb-3">
                <div class="row text-center" style="justify-content: space-evenly;">
                    <div class="col-12">
                        <h1><b>PREPARE TO ATTACK!</b></h1>
                    </div>
                    <div class="col-12">
                        <h2>Choose your weapon(optional):</h2>
                    </div>
                    <div class="col-12 col-md-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" src="katana.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center" style="padding: 1rem; margin-top: 2rem;">
                            <button class="btn btn-danger rounded" style="margin-top: 1.5em;" onclick="chooseWeapon('Katana')">
                                Katana
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" src="qiang.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <button class="btn btn-danger rounded m-4" onclick="chooseWeapon('Qiang')">
                                Qiang
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" style="height: 5rem; width: 5rem;" src="nunchaku.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <button class="btn btn-danger rounded m-4" onclick="chooseWeapon('Nunchaku')">
                                Nunchaku
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center m-3">
                    <button id="attack" class="btn btn-info rounded mt-4" onclick="attack('${player[0].items[0]}')">
                        <h3>ATTACK</h3>
                    </button>
                </div>
                <div class="row align-items-center text-center m-3">
                    <h3>Your weapon: ${player[0].items[0]}</h3>
                </div>
            </div>
            <div class="col-12 col-md-5 statusboard bottomrow mb-3">
                <div class="row justify-content-center">
                    <h1><b>STATUS BOARD</b></h1>
                </div>
                <div class="row ml-1">
                    <h2>DAMAGE:</h2>
                </div>
                <div class="row ml-4">
                    <p>Opponent loses: ${opploss1} health point(s).</p>
                </div>
                <div class="row ml-4">
                    <p>You lose: ${playloss1} health point(s).</p>
                </div>
                <div class="row ml-1">
                    <h2>OPPONENT FIGHTS WITH:</h2>
                </div>
                <div class="row justify-content-center">
                    <p>${oppweap}</p>
                    </div>
                    <div class="row justify-content-center">
                    <img src=${oppweapimg} alt="">
                </div>
                <div class="row ml-1">
                    <h2>RESULT OF OPPONENT'S ATTACK:</h2>
                </div>
                <div class="row ml-4">
                    <p>Opponent loses: ${opploss2} health point(s).</p>
                </div>
                <div class="row ml-4">
                    <p>You lose: ${playloss2} health point(s).</p>
                </div>
                <div class="row ml-1">
                    <h2>${gameStatus}</h2>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("gameboard").innerHTML = template;
}

function drawGameboardEnd() {
    let template = ""
    template +=
        /*html*/
        `<div class="row m-2 currplayrow" style="justify-content: space-evenly;">
            <div class="col-5 col-md-4 m-3 text-center toprow playerbox">
                <p><b>YOU: </b>${player[0].name}</p>
                <img src=${player[0].img} alt="">
                <h4>current weapon: ${player[0].items[0]}</h4>
                <h4>current health: ${player[0].health}</h4>
            </div>
            <div class="col-5 col-md-4 m-3 text-center toprow playerbox">
                <p><b>OPPONENT: </b>${opponent[0].name}</p>
                <img src=${opponent[0].img} alt="">
                <h4>current weapon: ${opponent[0].items[0]}</h4>
                <h4>current health: ${opponent[0].health}</h4>
            </div>
        </div>
        <div class="row m-2" style="justify-content: space-evenly;">
            <div class="col-12 col-md-5 statusboard bottomrow mb-3">
                <div class="row text-center" style="justify-content: space-evenly;">
                    <div class="col-12">
                        <h1><b>PREPARE TO ATTACK!</b></h1>
                    </div>
                    <div class="col-12">
                        <h2>Choose your weapon(optional):</h2>
                    </div>
                    <div class="col-12 col-md-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" src="katana.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center" style="padding: 1rem; margin-top: 2rem;">
                            <button class="btn btn-danger rounded" style="margin-top: 1.5em;" onclick="chooseWeapon('Katana')" disabled>
                                Katana
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" src="qiang.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <button class="btn btn-danger rounded m-4" onclick="chooseWeapon('Qiang')" disabled>
                                Qiang
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" style="height: 5rem; width: 5rem;" src="nunchaku.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <button class="btn btn-danger rounded m-4" onclick="chooseWeapon('Nunchaku')" disabled>
                                Nunchaku
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center m-3">
                    <button id="attack" class="btn btn-info rounded mt-4" onclick="attack('${player[0].items[0]}')" disabled>
                        <h3>ATTACK</h3>
                    </button>
                </div>
                <div class="row align-items-center text-center m-3">
                    <h3>Your weapon: ${player[0].items[0]}</h3>
                </div>
            </div>
            <div class="col-12 col-md-5 statusboard bottomrow mb-3">
                <div class="row justify-content-center">
                    <h1><b>STATUS BOARD</b></h1>
                </div>
                <div class="row ml-1">
                    <h2>DAMAGE:</h2>
                </div>
                <div class="row ml-4">
                    <p>Opponent loses: ${opploss1} health point(s).</p>
                </div>
                <div class="row ml-4">
                    <p>You lose: ${playloss1} health point(s).</p>
                </div>
                <div class="row ml-1">
                    <h2>OPPONENT FIGHTS WITH:</h2>
                </div>
                <div class="row justify-content-center">
                    <p>${oppweap}</p>
                    </div>
                    <div class="row justify-content-center">
                    <img src=${oppweapimg} alt="">
                </div>
                <div class="row ml-1">
                    <h2>RESULT OF OPPONENT'S ATTACK:</h2>
                </div>
                <div class="row ml-4">
                    <p>Opponent loses: ${opploss2} health point(s).</p>
                </div>
                <div class="row ml-4">
                    <p>You lose: ${playloss2} health point(s).</p>
                </div>
                <div class="row ml-1">
                    <h1><b>${gameStatus}</b></h1>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("gameboard").innerHTML = template;
}



function chooseWeapon(weapon) {
    let f = player[0].items
    f.splice(0, 1, weapon);
    oppWeapon();
}

function randomGen() {
    return Math.floor(Math.random() * 4);
}

function modifier() {
    return Math.floor(Math.random() * 12);
}

function noWeapon() {
    return randomGen();
}

function oppWeapon() {
    let z = randomGen();
    let w = opponent[0].items;
    switch (z) {
        case 1:
            w.splice(0, 1, "Nunchaku");
            oppweap = "Nunchaku";
            oppweapimg = "nunchaku.jpg";
            break;
        case 2:
            w.splice(0, 1, "Katana");
            oppweap = "Katana";
            oppweapimg = "katana.jpg";
            break;
        case 3:
            w.splice(0, 1, "Qiang");
            oppweap = "Qiang";
            oppweapimg = "qiang.jpg";
            break;
    }
    update()
}

function oppAttack() {
    let m = 0;
    let n = 0;
    if (opponent[0].items == "None") {
        m = noWeapon()
        n = noWeapon()
    } else {
        m = modifier()
        n = noWeapon()
    }
    playloss2 = m;
    opploss2 = n;
    player[0].health -= playloss2;
    opponent[0].health -= opploss2;
    update()
    player[0].items = ["None"]
    opponent[0].items = ["None"]
    oppweap = ""
    oppweapimg = "quest.png"
    drawGameboard()
}

function attack(arms) {
    let y = 0;
    let j = 0;
    if (arms == "None") {
        y = noWeapon()
        j = noWeapon()
    } else {
        y = noWeapon()
        j = modifier()
    }
    playloss1 = y;
    opploss1 = j;
    player[0].health -= playloss1;
    opponent[0].health -= opploss1;
    update()
    oppAttack()
}

function update() {
    if (player[0].health < 0) {
        player[0].health = 0
    }
    if (opponent[0].health < 0) {
        opponent[0].health = 0
    }
    if ((opponent[0].health < 1) && (player[0].health < 1)) {
        gameStatus = "GAME OVER: You both die!";
        drawGameboardEnd();
    } else if (
        opponent[0].health < 1
    ) {
        gameStatus = `GAME OVER: ${player[0].name} wins!`;
        drawGameboardEnd();

    } else if (player[0].health < 1) {
        gameStatus = `GAME OVER: ${opponent[0].name} wins!`;
        drawGameboardEnd()
    } else {
        drawGameboard();
    }

}

function startGame() {
    $(document.getElementById("hideme")).hide()
}

function stopGame() {
    let template = ""
    template +=
        `<section class="container-fluid" style="height: 100vh z-index: 1;">
        <p class="text-center" style="font-size: 8rem;">Good Bye!</p>
        </section>`
    $("div").addClass("viz");
    document.getElementById("bod").innerHTML = template;
}

startGame()