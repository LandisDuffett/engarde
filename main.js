let player = []
let opponent = []
let opploss = 0
let playloss = 0
let oppweap = ""
let gameStatus = ""
let oppweapimg = ""


let combatants = {
    bugeisha: {
        name: "Onna-bugeisha",
        health: 100,
        strength: 5,
        ferocity: 7,
        intelligence: 9,
        description: "Trained to kill.",
        img: "bugeisha.jpg",
        items: []
    },
    mulan: {
        name: "Mulan",
        health: 100,
        strength: 7,
        ferocity: 8,
        intelligence: 6,
        description: "A determined and skilled warrior",
        img: "mulan.jpg",
        items: []
    },
    shaolin: {
        name: "Shaolin",
        health: 100,
        strength: 6,
        ferocity: 6,
        intelligence: 7,
        description: "A large punch in a small package.",
        img: "shaolin.jpg",
        items: []
    },
    kungfupanda: {
        name: "Kung fu Panda",
        health: 100,
        strength: 10,
        ferocity: 5,
        intelligence: 5,
        description: "His bear hugs can kill you.",
        img: "kungfupanda.jpg",
        items: []
    }
}

let weapons = {
    katana: {
        name: 'Katana',
        modifier: 5,
        description: "legendary sword of the Saumrai"
    },
    qiang: {
        name: "Sword",
        modifier: 2,
        description: "Chinese spear: swift and deadly"
    },
    nunchaku: {
        name: "Nunchucks",
        modifier: 3,
        description: "brutal and relentless"
    }
}



function removeInstructions() {
    $(document.getElementById("intro")).hide()
    drawAvatars()
}

function returnInstructions() {
    $(document.getElementById("intro")).show()
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
        `<div class="row m-2" style="justify-content: space-evenly;">
            <div class="col-12 col-md-4 m-3 text-center toprow playerbox">
                <h4><b>YOU: </b>${player[0].name}</h4>
                <img src=${player[0].img} alt="">
                <h4>current weapon: ${player[0].items[0]}</h4>
                <h4>current health: ${player[0].health}</h4>
            </div>
            <div class="col-12 col-md-4 m-3 text-center toprow playerbox">
                <h4><b>OPPONENT: </b>${opponent[0].name}</h4>
                <img src=${opponent[0].img} alt="">
                <h4>current weapon: ${opponent[0].items[0]}</h4>
                <h4>current health: ${opponent[0].health}</h4>
            </div>
        </div>
        <div class="row m-2" style="justify-content: space-evenly;">
            <div class="col-5 statusboard bottomrow mb-3">
                <div class="row text-center" style="justify-content: space-evenly;">
                    <div class="col-12">
                        <h1><b>PREPARE TO ATTACK!</b></h1>
                    </div>
                    <div class="col-12">
                        <h2>Choose your weapon(optional):</h2>
                    </div>
                    <div class="col-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" src="katana.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <button class="btn btn-danger rounded" style="margin-top: 4rem;"
                                onclick="chooseWeapon('${weapons.katana}')">
                                Katana
                            </button>
                        </div>
                    </div>
                    <div class="col-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" src="qiang.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <button class="btn btn-danger rounded m-4" onclick="chooseWeapon('${weapons.qiang}')">
                                Qiang
                            </button>
                        </div>
                    </div>
                    <div class="col-3 col3border">
                        <div class="row align-items-center justify-content-center">
                            <img class="img-fluid" style="height: 5rem; width: 5rem;" src="nanchaku.jpg" alt="">
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <button class="btn btn-danger rounded m-4" onclick="chooseWeapon('${weapons.nunchaku}')">
                                Nunchaku
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center m-3">
                    <button class="btn btn-info rounded mt-4" onclick="attack('${player[0].items[0]}')">
                        <h3>ATTACK</h3>
                    </button>
                </div>
            </div>
            <div class="col-5 statusboard bottomrow mb-3">
                <div class="row justify-content-center">
                    <h1><b>STATUS BOARD</b></h1>
                </div>
                <div class="row ml-1">
                    <h2>DAMAGE:</h2>
                </div>
                <div class="row ml-4">
                    <p>Opponent loses: ${opploss} health points.</p>
                </div>
                <div class="row ml-4">
                    <p>You lose: ${playloss} health points.</p>
                </div>
                <div class="row ml-1">
                    <h2>OPPONENT ATTACKS WITH:</h2>
                </div>
                <div class="row ml-4">
                    <p>${oppweap}</p>
                    <img src=${oppweapimg} alt="">
                </div>
                <div class="row ml-1">
                    <h2>RESULT OF OPPONENT'S ATTACK:</h2>
                </div>
                <div class="row ml-4">
                    <p>Opponent loses: ${opploss} health points.</p>
                </div>
                <div class="row ml-4">
                    <p>You lose: ${playloss} health points.</p>
                </div>
                <div class="row ml-1">
                    <h2>${gameStatus}</h2>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("gameboard").innerHTML = template;
}

function chooseWeapon(weapon) {
    player[0].items.push(weapon);
}

function randomGen(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()) * (max - min) + min;
}

function modifier() {
    return randomGen(4, 11);
}

function noWeapon() {
    return randomGen(0, 4);
}

function oppWeapon() {
    let z = randomGen(1, 4);
    let w = opponent[0].items
    switch (z) {
        case 1:
            w.push(weapons.nunchaku.name);
            break;
        case 2:
            w.push(weapons.katana.name);
            break;
        case 3:
            w.push(weapons.qiang.name)
            break;
    }
    oppAttack()
}

function oppAttack() {
    let m = modifier();
    playloss2 -= m;
    opploss2 -= m;
    if ()
        drawGameboard();
}

function attack(arms) {
    let y = 0;
    if (arms == false) {
        y = noWeapon()
    } else {
        y = modifier()
    }
    playloss1 = y;
    opploss1 = y;
    update()
}

function update() {
    if (opponent[0].items == false) {
        if (opponent[0].health < 1) {
            gameStatus = "GAME OVER: You win!"
            drawGameboard;
            break;
        } else if (player[0].health < 1) {
            gameStatus = `GAME OVER: ${opponent[0].name} wins!"
        }
    } else {
        if (player[0].health < 1) {

        } else if (opponent[0].health < 1) {

        }
    }
    player[0].health -= playloss1;
    opponent[0].health -= playloss2;
}
function startGame() {
    $(document.getElementById("hideme")).hide()
}

startGame()

