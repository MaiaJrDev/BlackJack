
let regrasJ = document.getElementById("regrass");
let regrasBtn = document.getElementById("regras");
let result = document.getElementById("resultado");
let cartas = document.getElementById("cartas");
let btnSim = document.getElementById("btnSim");
let btnNao = document.getElementById("btnNao");
let jogar = document.getElementById('jogar');
let gifWin = document.getElementById('gif');

function regras() {
  result.setAttribute("style", "display : none");
  a = regrasJ.getAttribute("style");

  if (a == "display : block") {
    regrasJ.setAttribute("style", "display : none");
  } else {
    regrasJ.setAttribute("style", "display : block");
  }
}

function atualizarValorTotal() {
  totalUser2 = 0;
  totalPc = 0;
  for (let i in cartasUserValor) {
    totalUser2 += cartasUserValor[i];
  }
  for (let i in cartasPcValor) {
    totalPc += cartasPcValor[i];
  }
  return totalUser2, totalPc;
}

function exibirResultado() {
  //função que exibi o resultado
  atualizarValorTotal();
  result.setAttribute("style", "display : block");

  let mensagem;

  if (
    (totalUser2 > 21 && totalPc <= 21) ||
    (totalUser2 < 21 && totalPc == 21)
  ) {
    mensagem = "O Computador Ganhou !";
  } else if (
    (totalPc > 21 && totalUser2 <= 21) ||
    (totalPc < 21 && totalUser2 == 21)
  ) {
    mensagem = "Você Ganhou !!";
    gif.setAttribute("style", "display : block");
  } else if (totalUser2 == 0 && totalPc == 0) {
    mensagem = "Você não quis jogar =/";
  } else if (totalUser2 == totalPc && totalUser2 && totalPc !== 0) {
    mensagem = "Empate !!";
  } else {
    mensagem = "Ninguem Ganhou =(";
  }
  result.innerHTML = `<b><br/>O Jogo Terminou !<br/>
Usuario - Cartas: ${cartasUserNaipe} - Pontuação ${totalUser2}<br/>
Computador - Cartas: ${cartasPcNaipe} - Pontuação ${totalPc}<br/>
${mensagem}</b>`;

jogar.innerHTML = 'Jogar Novamente';
jogar.setAttribute("style", "display : inline")
jogar.setAttribute("onclick", "zerarJogo()");
btnSim.setAttribute("style", "display : none")
btnNao.setAttribute("style", "display : none");
}

  //arrays para armazenar os valores e os naipes
  let cartasUserValor = [];
  let cartasUserNaipe = [];
  let cartasPcValor = [];
  let cartasPcNaipe = [];

  
  //variaveis globais para atualizar o valor
  let totalUser2 = 0;
  let totalPc = 0;

  function botonSim(){
    clickSim = true;
    segundaRodada();
  }
  function botonNao(){
    clickSim = false;
    // cartasUserValor.push(carta1.valor, carta2.valor);
    // cartasUserNaipe.push(carta1.texto, carta2.texto);
    // cartasPcValor.push(carta3.valor, carta4.valor);
    // cartasPcNaipe.push(carta3.texto, carta4.texto);
    exibirResultado();
  }

  let clickSim;

function iniciarJogo() {
  gif.setAttribute("style", "display : none");
  regrasJ.setAttribute("style", "display : none");
  regrasBtn.setAttribute("style", "display : none");
  result.setAttribute("style", "display : none");

  jogar.setAttribute("style", "display : none");


  exibirCartas();
  //   // se ok no confirm chama essa function

  
  function exibirCartas() {
    carta1 = comprarCarta();
    carta2 = comprarCarta();
    carta3 = comprarCarta();
    carta4 = comprarCarta();

        cartas.innerHTML = `Suas Cartas São: ${carta1.texto} ${carta2.texto}, As Cartas do computador é ${carta3.texto} ${carta4.texto}<br/> Deseja comprar mais uma carta ?`;
        btnSim.setAttribute("style", "display : block")
        btnNao.setAttribute("style", "display : block");

        cartasUserValor.push(carta1.valor, carta2.valor);
        cartasUserNaipe.push(carta1.texto, carta2.texto);
        cartasPcValor.push(carta3.valor, carta4.valor);
        cartasPcNaipe.push(carta3.texto, carta4.texto);
        atualizarValorTotal();
        
        if(totalPc >= 21 || totalUser2 >= 21){
          exibirResultado();
        }
  }
}
function zerarJogo(){
  totalUser2 = 0;
  totalPc = 0;
  cartasUserValor = [];
  cartasUserNaipe = [];
  cartasPcValor = [];
  cartasPcNaipe = [];
  iniciarJogo();

}

function segundaRodada() {
  carta1 = comprarCarta();
  carta2 = comprarCarta();

      cartas.innerHTML = `a carta que você comprou é: ${carta1.texto}, e a do computador é ${carta2.texto}<br/> Deseja comprar mais uma carta ?`;
      btnSim.setAttribute("style", "display : block")
      btnNao.setAttribute("style", "display : block");

      cartasUserValor.push(carta1.valor);
      cartasUserNaipe.push(carta1.texto);
      cartasPcValor.push(carta2.valor);
      cartasPcNaipe.push(carta2.texto);

      jogar.setAttribute("style", "display : none");
      atualizarValorTotal();

      if(totalPc >= 21 || totalUser2 >= 21){
        exibirResultado();
      }
 }