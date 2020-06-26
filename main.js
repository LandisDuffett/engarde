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
        img: "kungfupanda.jpg"
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
}

function returnInstructions() {
    $(document.getElementById("intro")).show()
}