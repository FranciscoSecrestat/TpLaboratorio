function FbotonOn() {
    var uno = document.getElementById('btnSeguir');
    if (uno.innerHTML == 'Dejar de seguir') 
        uno.innerHTML = 'Seguir';
    else uno.innerHTML = 'Dejar de seguir'; 
  }
  console.log(FbotonOn())

  const BtnMeGusta = document.getElementById('BtnMegusta');

  let click = false;
  let count = document.querySelector("#count");

  BtnMeGusta.addEventListener("click", ()=>{

    if(!click){
        click = true
        count.textContent++;
    }
  })