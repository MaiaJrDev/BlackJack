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

  //   cartas.innerHTML = "Boas vindas ao jogo de Blackjack!<br/>Deseja iniciar uma Nova Rodada ?";
  //primeira condição
  //   if (continuar) {
  //     exibirCartas();
  //   } else {
  //     confirm("o Jogo Acabou !");
  //     exibiResultado();
  //   }
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

        //verifica se as primeiras cartas sairam com 2 A's = 21 , se sim sorteia novamente
        // if((carta1.valor && carta2.valor == 11) || (carta3.valor && carta4.valor == 11)){
        //   afirmacao = cartas.innerHTML = 
        //     `Opa! as cartas vieram iguais , vamos sortear novamente;
        //     Suas Cartas São: ${carta1.texto} ${carta2.texto}, A Carta revelada do computador é ${carta3.texto} ${carta4.texto}\n Deseja comprar mais uma carta ?`
        // }

        cartasUserValor.push(carta1.valor, carta2.valor);
        cartasUserNaipe.push(carta1.texto, carta2.texto);
        cartasPcValor.push(carta3.valor, carta4.valor);
        cartasPcNaipe.push(carta3.texto, carta4.texto);
        atualizarValorTotal();
        
        if(totalPc >= 21 || totalUser2 >= 21){
          exibirResultado();
        }

    
    //     //se pedir mais uma carta joga os valores no array e continua


    //     //variaveis criadas para armazenar o valor dos confirms
    //     let validar;
    //     let validar1;
    //     let validar2;

    //     if (afirmacao == true) {
    //       //se os numeros forem maiores ou igual a 21 chama o resultado
    //       if(totalUser2 || totalPc >= 21){
    //         exibiResultado();
    //       }else{
    //       carta5 = comprarCarta();
    //       carta7 = comprarCarta();
    //       cartasUserValor.push(carta5.valor);
    //       cartasUserNaipe.push(carta5.texto);
    //       cartasPcValor.push(carta7.valor);
    //       cartasPcNaipe.push(carta7.texto);
    //       validar =+ confirm(
    //         `Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${carta5.texto} A Carta revelada do computador é ${carta7.texto}\n Deseja comprar mais uma carta ?`
    //       );
    //     }
    //   }
    //   //se clicar em cancelar chama o resultado se não continua o programa
    //     if (validar == 0) {
    //       exibiResultado();
    //     } else if (validar == 1) {
    //       //atualiza os valores que contem as pontuações
    //       atualizarValorTotal();
    //       //se for maior ou igual a 21 para se não continua
    //       if (totalUser2 >= 21) {
    //         exibiResultado();
    //       } else {
    //         carta6 = comprarCarta();
    //         carta7 = comprarCarta();
    //         validar1 =+ confirm(`Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${cartasUserNaipe[2]}, ${carta6.texto} A Carta revelada do computador é ${carta7.texto}\n Deseja comprar mais uma carta ?`);
    //         cartasUserValor.push(carta6.valor);
    //         cartasUserNaipe.push(carta6.texto);
    //         cartasPcValor.push(carta7.valor);
    //         cartasPcNaipe.push(carta7.texto);
    //       }
    //     }
    //     if (validar1 == 0) {
    //       exibiResultado();
    //     } else if (validar1 == 1) {
    //       atualizarValorTotal();
    //       if (totalUser2 >= 21) {
    //         exibiResultado();
    //       } else {
    //         carta8 = comprarCarta();
    //         carta9 = comprarCarta();
    //         validar2 =+ confirm(`Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${cartasUserNaipe[2]}, ${cartasUserNaipe[3]}, ${carta8.texto} A Carta revelada do computador é ${carta9.texto}\n Deseja comprar mais uma carta ?`);
    //         cartasUserValor.push(carta8.valor);
    //         cartasUserNaipe.push(carta8.texto);
    //         cartasPcValor.push(carta9.valor);
    //         cartasPcNaipe.push(carta9.texto);
    //       }
    //     }
    //     if (validar2 == 0) {
    //       exibiResultado();
    //     } else if (validar2 == 1) {
    //       atualizarValorTotal();
    //       if (totalUser2 >= 21) {
    //         exibiResultado();
    //       } else {
    //         carta10 = comprarCarta();
    //         carta11 = comprarCarta();
    //         confirm(`Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${cartasUserNaipe[2]}, ${cartasUserNaipe[3]}, ${cartasUserNaipe[4]}, ${carta10.texto} A Carta revelada do computador é ${carta11.texto}\n Deseja comprar mais uma carta ?`);
    //         cartasUserValor.push(carta10.valor);
    //         cartasUserNaipe.push(carta10.texto);
    //         cartasPcValor.push(carta11.valor);
    //         cartasPcNaipe.push(carta11.texto);
    //       }
    //     }
  
  
  
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