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
