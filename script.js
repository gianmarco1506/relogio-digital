// Função que atualiza o relógio
function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  document.getElementById(
    "relogio"
  ).textContent = `${horas}:${minutos}:${segundos}`;
}

// Função que atualiza a data
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

  const diaSemana = diasSemana[agora.getDay()];
  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();

  const dataFormatada = `${diaSemana}, ${dia}/${mes}/${ano}`;
  document.getElementById("data").textContent = dataFormatada;
}

// Atualiza o relógio e a data a cada segundo
setInterval(() => {
  atualizarRelogio();
  atualizarData();
}, 1000);

// Chama as funções uma vez para mostrar imediatamente ao carregar a página
atualizarRelogio();
atualizarData();
