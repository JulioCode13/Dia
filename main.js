let l = document.getElementById("id_sem");
l.classList.toggle('sem')
//Funcion del llamado
function semana() {
  let dia = new Date().getDay();

  //Los dias 
  if(dia === 4){   //Probando el dia jueves
    l.textContent = "Probando";
  }
  else{
    l.textContent ="Salida almuerzo:";
  }

}
semana();

