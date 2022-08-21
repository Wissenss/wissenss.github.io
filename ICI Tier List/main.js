//Model
let players = [
    {
        name: "maru",
        score: 60,
        emoji: "ᕕ(⌐■_■)ᕗ ♪♬",
        name_color: "#CC4125",
        emoji_color: "#CC4125",
        profile: "https://github.com/MaruDeHabanero"
    }, {
        name: "Bass",
        score: 46,
        emoji: "( ͡° ͜ʖ ͡°)",
        name_color: "#FF00FF",
        emoji_color: null,
        profile: "https://github.com/BassHM"
    }, {
        name: "-Ikaros-",
        score: 17,
        emoji: "(づ￣ ³￣)づ",
        name_color: "#7BA64E",
        emoji_color: null,
        profile: "https://github.com/IkarosKurtz"
    }, {
        name: "Ivsarel",
        score: 7,
        emoji: null,
        name_color: null,
        emoji_color: null,
        profile: null
    }, {

        name: "TEST",
        score: 70,
        emoji: "( ͡° ͜ʖ ͡°)",
        name_color: "#FF00F0",
        emoji_color: null,
        profile: null
    }
];

//sort list by score, max score first (quick sort implementation)
const sortList = (list) => {
    if (list.length < 1) {
        return [];
    }

    let left = [];
    let right = [];
    const pivot = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i].score > pivot.score) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }

    return [].concat(sortList(left), pivot, sortList(right));
}

//sort players
players = sortList(players);

//View
window.onload = renderList;

const openProfile = (player) => {
    if (player.profile) {
        window.open(player.profile)
    }
}

function createArticle(player, position) {
    //line container
    const item = document.createElement("article");
    item.classList.add("item");

    //line elements
    const number = document.createElement("p");
    number.classList.add("number");
    const name = document.createElement("p");
    name.classList.add("name");
    const emoji = document.createElement("p");
    emoji.classList.add("emoji");
    const score = document.createElement("p");
    score.classList.add("score");
    const pts = document.createElement("p");
    pts.classList.add("pts");

    //fill line information
    if (position < 1) {
        number.innerText = "👑";
        emoji.style = "color:" + player.emoji_color + ";";
    }
    else {
        number.innerText = position + 1;
    }

    if (position < 2) {
        name.style = "color:" + player.name_color + ";";
    }

    if (position < 3) {
        emoji.innerText = player.emoji;
    }

    name.innerText = player.name;
    score.innerText = player.score;
    pts.innerText = "pts";

    //redirect to profile
    item.onclick = openProfile(player);

    //join line elements on container
    item.appendChild(number);
    item.appendChild(name);
    item.appendChild(emoji);
    item.appendChild(score);
    item.appendChild(pts);

    return item;
}

function renderList() {
    const list = document.getElementById("tier");
    players.forEach((player, position) => {
        const item = createArticle(player, position);
        list.appendChild(item);
    });
}

//Controler