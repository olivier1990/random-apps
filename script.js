
// Pendu 17/05/2022

// let my_button = document.querySelector(".button65");

// my_button.addEventListener("click", simpleclick);

// function simpleclick () {
//   let input = document.querySelector("input");
  
//   this.innerHTML = input.value
//   input.value = ""
// }

// let array = ['a', 'l', 'g', 'o']


// 31-05-2022

// Grâce au FileReader, et de manière asynchrone



//mise en variable de l'input file ainsi que du bouton download
let input_file = document.querySelector('#file-input');
let download_btn = document.querySelector('button.download');

//ajout d'event listeners
input_file.addEventListener('change', file_changed);
download_btn.addEventListener('click', download);

//cette fonction est appellée dès que le fichier est changé
function file_changed() {
  if (this.files.length === 0) {
    console.log('Pas de fichier sélectionné');
    return;
  }

  const reader = new FileReader();
    reader.onload = function contenu_charger() {
    //ce résultat est appellé lorsque le contenu du fichier uploadé est chargé
    console.log(reader.result);
  };
  reader.readAsText(this.files[0]); //on va récupérer le fichier dans l'input avec this.files[0] car on peut potentiellement upload plusieurs fichiers d'un coup
}

//prend 3 parametres : le text, le nom du fichier et son type (par defaut text/plain)
function generate(text, name, type = 'text/plain') {
   let link_to_download = document.querySelector("a#download");
   let file = new Blob([text], {type: type});
   link_to_download.href = URL.createObjectURL(file);
   link_to_download.download = name;
}

//appellée au click du bouton "Créer le fichier"
function download() {
   generate('test', 'test.txt', 'text/plain');
}