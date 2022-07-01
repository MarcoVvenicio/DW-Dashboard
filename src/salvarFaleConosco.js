import { db } from "./firebase"

function enviar(){
    let nomeS = document.getElementById("nome").value;
    let emailS = document.getElementById("email").value;
    let comentarioS = document.getElementById("comentario").value;
    db.collection("COmentarios").add({
        nome : nomeS,
        email : emailS,
        comentario : comentarioS
    })
    .then(function(docRef){
        console.log("Cadastrado com sucesso");
    })
    .catch(function(error){
        console.log("erro ao cadastrar");
    })
 }
 
 
   