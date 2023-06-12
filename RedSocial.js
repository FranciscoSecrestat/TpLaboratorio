//var userName = "";
//function btnSeguir() {
//    var uno = document.getElementById('btnSeguir');
//    if(userName == ""){
//      return
//    }
//    if (uno.innerHTML == 'Dejar de seguir') {
//      uno.innerHTML = 'Seguir';
//    }
//    else uno.innerHTML = 'Dejar de seguir'; 
//  }
//  console.log(btnSeguir())
//
//const formularioUsuario = document.querySelector('#Usuario');
//const mostrarNombre = document.querySelector('#usuarioB');
//formularioUsuario.addEventListener('submit', event => {
//  event.preventDefault();
//  const user = event.target.elements.inpUsuario.value;
//  if (user.length >= 5 && typeof user === "string") {
//    userName = user;
//    mostrarNombre.innerHTML = user;
//    formularioUsuario.setAttribute("hidden", "")
//    return;
//  }
//  alert("Ingresar un mensaje");
//});
//
//const formilarioComentario = document.querySelector('#FormComentarios');
//const PanelComentarios = document.querySelector('#Comentarios')
//formilarioComentario.addEventListener('submit', event =>{
//  event.preventDefault();
//  const Comentario = event.target.elements.Barra.value;
//  if(Comentario.length >=10 && userName != ""){
//    PanelComentarios.insertAdjacentHTML("beforeend", 
//     `<div id=""><p><strong>${userName}</strong> : ${Comentario}</p></div>`);
//    return;
//  }
//  alert("No se puede agregar un comentario, intente de nuevo mas tarde");
//})
//
//const BtnMegusta = document.querySelector('#BtnMegusta');
//const likes = document.querySelector('#likes');
//BtnMegusta.addEventListener("click", event => {
//
//  var mg = document.getElementById('BtnMegusta');
//  if(userName == ""){
//    return
//  }
//  if (mg.innerHTML == 'me gusta') {
//    mg.innerHTML = 'no me gusta';
//    likes.innerHTML = "201 me gustas";
//  }
//  else {
//    mg.innerHTML = 'me gusta'; 
//    likes.innerHTML = "200 me gustas";
//  }
//  
//})
//console.log(BtnMegusta())

const app = Vue.createApp({
  data(){
    return{
      nombre:"Jane Doe",
      email:"jane_doe@gmail.com",
      fechaNacimiento:"01/05/1996",
      telefono:"917-936-9585",
      ciudad:"Tokyo, Japón",
      trabajo:"trabajando en Lawn N",
      seguir: false,
      fotoPerfil: "https://i.imgur.com/99qgQJy.jpeg",
      informacion:"¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio, Japon. Me encanta capturar la esencia de la vida urbana a través de mi lente explorando el contraste entre la arquitectura moderna y las tradiciones centenarias que conviven en esta metrópolis única. Desde rascacielos deslimbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, encuentro inspiración en cada rincón de esta increíble ciudad",
      inputText:'',
      textoP:'Ingrese el usuario...',
      agregarNombre: "Agregue un nombre",
      fotoBarraSuperior: "https://i.imgur.com/Qx8uR89.png",
      btnmegusta: "Me gusta",
      likes: 201,
     
     
        
        

        
      
      
    }
  },
  methods:{
    Megusta(){
      if(this.btnmegusta === "Me gusta"){
        this.btnmegusta = "Ya no me gusta";
        this.likes += 1;
      }else{
        this.btnmegusta = "Me gusta";
        this.likes -= 1;
      }
    }
  }
})
app.mount('#app')
