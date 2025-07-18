// Função que atualiza o relógio
function atualizarRelogio() {
  const agora = new Date(); // Cria um novo objeto de data com o horário atual
  const horas = String(agora.getHours()).padStart(2, "0"); // Obtém as horas
  const minutos = String(agora.getMinutes()).padStart(2, "0"); // Obtém os minutos
  const segundos = String(agora.getSeconds()).padStart(2, "0"); // Obtém os segundos

  // Atualiza o conteúdo do elemento com id "relogio"
  document.getElementById(
    "relogio"
  ).textContent = `${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez para mostrar o relógio imediatamente ao carregar a página
atualizarRelogio();


/*
// Função que atualiza o relógio
function atualizarData() {
  const agora = new Date(); // Cria um novo objeto de data com o horário atual

  const dia  = String(agora.getDate()).padStart(2, "0"); // Obtém as horas
  const mes = String(agora.getMonth()+ 1).padStart(2, "0"); // Obtém os minutos
  const ano = agora.getFullYear(); 

  const dataFormatada = `${dia}/${mes}/${ano}`; // Exemplo: "18/07/2025"
  
  document.getElementById(
    "data"
  ).textContent = `${dia}/${mes}/${ano}`;
  
  
  return dataFormatada;
}*/

function atualizarData() {
  const agora = new Date();

  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const diaSemana = diasSemana[agora.getDay()]; // 0 (domingo) a 6 (sábado)
  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();

  const dataFormatada = `${diaSemana}, ${dia}/${mes}/${ano}`;
  document.getElementById("data").textContent = dataFormatada;
}

// Atualiza data ao carregar
atualizarData();



// Chama a função uma vez para mostrar a data imediatamente ao carregar a página
atualizarData();



