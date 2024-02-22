const listMots = ['armoire', { mot: "banc", indices: [] }, 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'clef', 'coin', 'couloir', 'dossier', 'eau',
    'ecole', 'ecriture', 'entree', 'escalier', 'etagere', 'etude', 'exterieur',
    'fenetre', 'interieur', 'lavabo', 'lecture', 'lit', 'marche', 'matelas', 'maternelle', 'recreation',];

function motsAleatoire() {
    let mots = Math.floor(Math.random() * listMots.length);
    let motChoisi = listMots[mots];
    return motChoisi
}

function tableau(leMot) {
    let tab = leMot.split("")
    return tab
}


const img = document.createElement("img")
img.src = "./image/pendu7.png"
const image = document.getElementById("image")
image.appendChild(img)


let mot = tableau(motsAleatoire())
console.log(mot);

let nbchance = 7
const chance = document.createElement("h2")
chance.innerHTML = nbchance


document.getElementById("title").appendChild(chance)

const alpha = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's',
'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n']

alpha.forEach((element, index) => {
    
    document.querySelectorAll("#letter>button").disabled = true

    const btn = document.createElement("button")
    const texte = document.getElementById("letter")


    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "lightgrey";
        btn.innerHTML = ""
        checkIfExist(element)


    });

    btn.innerHTML = element
    texte.appendChild(btn)

});
mot.forEach((lettre, index) => {
    const btn = document.createElement("button")
    btn.id = index + lettre
    const baliseMot = document.getElementById("mot")
    btn.innerHTML = "_"
    baliseMot.appendChild(btn)
})


function checkIfExist(lettre) {
    mot.forEach((element, index) => {

        if (element == lettre) {
            document.getElementById(index + lettre).innerHTML = lettre
        }
    })
    if (!mot.includes(lettre) && chance.innerHTML > 0) {
        chance.innerHTML = nbchance - 1
        nbchance--
        img.src = "./image/pendu" + nbchance + ".png"

    } else if (nbchance < 1) {

            chance.innerHTML = `Perdu`;
        image.innerHTML = `<button id="btndem" style="width: 250px; height: 250px;"><img src="./image/giphy.gif" alt=""></button>`
        let tryAgain = document.querySelector("#btndem");
        tryAgain.addEventListener("click", () => {
            location.reload()
        })
    }
}

const next = document.getElementById("next")
next.addEventListener("click", () => {
    location.reload()
})

window.addEventListener("keyup", (e)=>{
    if(alpha.match(e.key)){
        checkIfExist(e.key)
    }
})