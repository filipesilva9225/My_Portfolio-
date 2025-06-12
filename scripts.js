function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  const telefone = "5575991681075";

  const texto = `
    Olá! Me chamo ${nome}, estou enviando está mensagem: ${mensagem}
`;

  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wame.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "-blank");
}
