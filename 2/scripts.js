/*Crie um programa que imite um relógio. O output deve ser exibido a cada segundo e a
  hora deve seguir o formato “hh:mm:ss” (o horário precisa estar de acordo com a hora atual).
  Ex: 10:44:02
      10:44:03
      10:44:04*/

function format(x) { return x < 10 ? '0' + x : x  }


setInterval(() => {
    
    let horario = new Date();
    document.getElementById('relogio').textContent = format(horario.getHours()) + ':' + format(horario.getMinutes()) + ':' + format(horario.getSeconds());

}, 1000)