const div = document.createElement ("div")
const h2 = document.createElement ("h2")
const p = document.createElement ("p")
const btn = document.createElement ("button")
const btn1 = document.createElement ("button")


h2.textContent = "Santé!";

p.textContent = "Mangez 5 fruits et légume par jour, les produits laitiers sont nos amis pour la vie, ne mangez ni trop gras, ni trop sucré, ni trop salé, l'abus d'alcool est dangereux pour la santé.";

btn.textContent = "Tchin-Tchin";

btn1.textContent = "Le gras c'est la vie";

div.append(h2,p,btn,btn1)
document.body.appendChild(div)

div.style.backgroundColor = "green"



