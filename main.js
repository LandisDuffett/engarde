let player = []
let opponent = []

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
        ` <div class="row justify-content-center">
        <div class="col-12 col-md-4 border m-3 text-center">
            <h4><b>YOU:</b>${player[0].name}</h4>
            <img src=${player[0].img} alt="">
            <h4>current weapon: ${player[0].items[0]}</h4>
            <h4>current health: ${player[0].health}</h4>
        </div>
        <div class="col-12 col-md-4 border m-3 text-center">
            <h4><b>OPPONENT:</b>${opponent[0].name}</h4>
            <img src=${opponent[0].img} alt="">
            <h4>current weapon: ${opponent[0].items[0]}</h4>
            <h4>current health: ${opponent[0].health}</h4>
        </div>
        <div class="col-12">
            <div class="row justify-content-center align-content-center">
                <h2>Choose a Weapon:</h2>
                <img src="katana.jpg" alt="">
                <button class="btn btn-danger rounded mt-4" onclick="chooseWeapon('${weapons.katana}')"> Choose
                </button>
                <img src="qiang.jpg" alt="">
                <button class="btn btn-danger rounded mt-4" onclick="chooseWeapon('${weapons.qiang}')"> Choose </button>

                <img src="nanchaku.jpg" alt="">
                <button class="btn btn-danger rounded mt-4" onclick="chooseWeapon('${weapons.nanchaku}')"> Choose
                </button>
                <h2>Choose your attack:</h2>
            </div>
            <div class="row justify-content-center align-content-center">

            </div>
        </div>
    </div>`
    document.getElementById("gameboard").innerHTML = template;
}

function startGame() {
    $(document.getElementById("hideme")).hide()
}

startGame()

