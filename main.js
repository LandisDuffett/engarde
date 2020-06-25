let players = {
    target: {
        health: 100,
        name: "Ryu",
        hits: 0,
        items: []
    },
    player: {
        health: 100,
        name: "Ken",
        hits: 0,
        items: []
    }
}

let items = {
    fire: {
        name: 'Fire',
        modifier: 2,
        description: "IT BURNS!"
    },
    sword: {
        name: "Sword",
        modifier: 5,
        description: "Slash your opponent!"
    },
    bodyblock: {
        name: "Body Block",
        modifier: 3,
        description: "Block any attack!"
    }

}

function removeInstructions() {
    document.getElementById("intro").remove()
}
function giveItem() {

}

function slap() {
    ryu.health--;
    ryu.hits++;
    update();
}

function punch() {
    ryu.health -= 5;
    ryu.hits++;
    update();
}

function kick() {
    ryu.health -= 10;
    ryu.hits++;
    update();
}

function update() {
    template = ""
    template += `<span><h3>Target name: <span id="name">${players.target.name}</span>!</h3></span>
  <div>
  <span class="m-4">Health:<span id="health">${players.target.health}</span></span>
  <span class="m-4">Hits:<span id="hits">${players.target.hits}</span></span>
  </div>`
    document.getElementById("health").innerHTML = template;
}

update()

