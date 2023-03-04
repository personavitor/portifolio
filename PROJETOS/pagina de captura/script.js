
const form = document.getElementById("raffleForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  
  if (!name || !email || !number) {
    alert("Por favor, preencha todos os campos");
    return;
  }
  
  // Aqui você pode enviar os dados do formulário para o servidor para processar a compra
  
  alert(`Obrigado, ${name}! Você comprou o número de rifa ${number}.`);
});



// obter todos os elementos com a classe CSS "rifa"
var rifas = document.getElementsByClassName('rifa');

// adicionar um event listener para cada célula da tabela
for (var i = 0; i < rifas.length; i++) {
  rifas[i].addEventListener('click', function() {
    // adicionar a classe CSS "comprada" ao elemento clicado
    this.classList.add('comprada');
  });
}







//Código do relógio
function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // format hours, minutes and seconds to have leading zeros if needed
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  // create the time string in the format hh:mm:ss
  var timeString = hours + ':' + minutes + ':' + seconds;

  // update the clock element on the HTML page with the current time
  document.getElementById('clock').innerHTML = timeString;
}

// call the updateTime function every second to update the clock
setInterval(updateTime, 1000);
//Fechamento Código do relógio






