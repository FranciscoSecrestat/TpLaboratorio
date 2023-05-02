var userName = "";
function btnSeguir() {
    var uno = document.getElementById('btnSeguir');
    if(userName == ""){
      return
    }
    if (uno.innerHTML == 'Dejar de seguir') {
      uno.innerHTML = 'Seguir';
    }
    else uno.innerHTML = 'Dejar de seguir'; 
  }
  console.log(btnSeguir())

const formularioUsuario = document.querySelector('#Usuario');
const mostrarNombre = document.querySelector('#usuarioB');
formularioUsuario.addEventListener('submit', event => {
  event.preventDefault();
  const user = event.target.elements.inpUsuario.value;
  if (user.length >= 5 && typeof user === "string") {
    userName = user;
    mostrarNombre.innerHTML = user;
    formularioUsuario.setAttribute("hidden", "")
    return;
  }
  alert("Ingresar un mensaje");
});

const formilarioComentario = document.querySelector('#FormComentarios');
const PanelComentarios = document.querySelector('#Comentarios')
formilarioComentario.addEventListener('submit', event =>{
  event.preventDefault();
  const Comentario = event.target.elements.Barra.value;
  if(Comentario.length >=10 && userName != ""){
    PanelComentarios.insertAdjacentHTML("beforeend", 
     `<div id=""><p><strong>${userName}</strong> : ${Comentario}</p></div>`);
    return;
  }
  alert("No se puede agregar un comentario, intente de nuevo mas tarde");
})

const BtnMegusta = document.querySelector('#BtnMegusta');
const likes = document.querySelector('#likes');
BtnMegusta.addEventListener("click", event => {

  var mg = document.getElementById('BtnMegusta');
  if(userName == ""){
    return
  }
  if (mg.innerHTML == 'me gusta') {
    mg.innerHTML = 'no me gusta';
    likes.innerHTML = "201 me gustas";
  }
  else {
    mg.innerHTML = 'me gusta'; 
    likes.innerHTML = "200 me gustas";
  }
  
})
console.log(BtnMegusta())


