let btn = document.querySelector("#btn");
let input = document.querySelector("#text");
let action = document.querySelector(".action");

const affiche = document.querySelector("#affiche");

const affiche2 = document.querySelector("#affiche2");

let index = 0;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //creation d'une div
  const div = document.createElement("div");
  //je recupere la valeur de l'input dans la div 
  div.textContent = input.value ;
  //j'ajoute une classe a ma div
  div.classList.add("test" + index);
  //j'ajoute cet meme div a ma "div class=affiche"
  affiche.append(div);

 //creation d'une divAction
  const divAction = document.createElement("div");
  //j'ajoute une classe a ma divAction
  divAction.classList.add("actiontest"+index);
  //j'ajoute avec .innerHTML mes boutons
  divAction.innerHTML = `
    <button type="button" id="edit${index}" onclick="createEditView(${index})"><span class="material-symbols-outlined">
    edit
    </span></button>
    <button type="submit" id="done${index}" onclick="doneToDo(${index})"><span class="material-symbols-outlined">
    done
    </span></button>
    <button type="submit" id="delete${index}" onclick="removeToDo(${index})"><span class="material-symbols-outlined">
    delete
    </span></button> 
  `;
  //j'ajoute ma divAction a ma "div class=affiche2"
  affiche2.append(divAction);
  index++;

  //   document.querySelector("#edit" + index).addEventListener("click", (e) => {
  //     e.preventDefault();
  //     document.querySelector(".test" + index).innerHTML = `<input type="text">`;
  //   });
});


//fonction pour remplacer le produit par un input/bouton
function createEditView(index) {
  // e.preventDefault();
  document.querySelector(".test" + index).innerHTML = `<input id="mod" type="text" class="form-control m-2" >
  <button style="padding:1em; margin-top: 1em" type="submit" onclick= "modify(${index})">Modifier </button>`;
  
}
 
//fonction pour modifier
function modify(index){
  let mod = document.querySelector("#mod").value
  document.querySelector(".test" + index).innerHTML = mod

}
//fonction pour supprimez
function removeToDo(index) {
  // e.preventDefault();
  document.querySelector(".test" + index).remove();
  document.querySelector(".actiontest" + index).remove();
};
//fonction pour placer un "ok" et validez
function doneToDo(index){
document.querySelector(".test" + index).style.textDecoration="line-through";
}

function enableDarkMode(){
    document.querySelector("body").classList.toggle("dark-mode")
}
function enableWhiteMode(){
    document.querySelector("body").classList.toggle("white-mode")
}
function enableBlueMode(){
    document.querySelector("body").classList.toggle("blue-mode")
}




