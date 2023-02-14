//chama as classes definidas no HTML
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let playerPC;

//Contador de pontos
let player1 = 0;
let player2 = 0;

//Adicionando evento nas 9 caixas
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {

        //**Chamada da função para ver quem vai jogar
        let elemento = checkJogador(player1, player2);

        //o IF abaixo não permite que seja adicionado mais de um elemento ao mesmo campo
        if (this.childNodes.length == 0) {
            let clonarElemento = elemento.cloneNode(true);
            this.appendChild(clonarElemento);
            //capturar a jogada
            if (player1 == player2) {
                player1++; //x
                /*verifica função para jogador automatico*/
                if (playerPC == 'pc-player') {
                    //executa a jogada
                    computadorJoga();
                    player2++;
                }
            } else {
                player2++; //o
            }
            //Chamada da função para ver quem é o ganhador
            checkGanhador();
        }

    });
}

/*************** Verifica sse é o PC *********************************/
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        playerPC = this.getAttribute("id");
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }
        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}

/*************** Verifica quem vai jogar *********************************/
function checkJogador(player1, player2) {
    if (player1 == player2) {
        elemento = x;  //jogador x
    } else {
        elemento = o; //jogador o
    }
    return elemento;
}

/*************** Verifica quem é o ganhador *********************************/
function checkGanhador() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    /*************** Verifica na horizontal *********************************/
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc1 = b1.childNodes[0].className;
        let blc2 = b2.childNodes[0].className;
        let blc3 = b3.childNodes[0].className;

        if (blc1 == 'x' && blc2 == 'x' && blc3 == 'x') {
            declaraGanhador('x');
        } else if (blc1 == 'o' && blc2 == 'o' && blc3 == 'o') {
            declaraGanhador('o');
        }
    }
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc4 = b4.childNodes[0].className;
        let blc5 = b5.childNodes[0].className;
        let blc6 = b6.childNodes[0].className;

        if (blc4 == 'x' && blc5 == 'x' && blc6 == 'x') {
            declaraGanhador('x');
        } else if (blc4 == 'o' && blc5 == 'o' && blc6 == 'o') {
            declaraGanhador('o');
        }
    }
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc7 = b7.childNodes[0].className;
        let blc8 = b8.childNodes[0].className;
        let blc9 = b9.childNodes[0].className;

        if (blc7 == 'x' && blc8 == 'x' && blc9 == 'x') {
            declaraGanhador('x');
        } else if (blc7 == 'o' && blc8 == 'o' && blc9 == 'o') {
            declaraGanhador('o');
        }
    }
    /*************** Verifica na vertical *********************************/
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc1 = b1.childNodes[0].className;
        let blc4 = b4.childNodes[0].className;
        let blc7 = b7.childNodes[0].className;

        if (blc1 == 'x' && blc4 == 'x' && blc7 == 'x') {
            declaraGanhador('x');
        } else if (blc1 == 'o' && blc4 == 'o' && blc7 == 'o') {
            declaraGanhador('o');
        }
    }
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc2 = b2.childNodes[0].className;
        let blc5 = b5.childNodes[0].className;
        let blc8 = b8.childNodes[0].className;

        if (blc2 == 'x' && blc5 == 'x' && blc8 == 'x') {
            declaraGanhador('x');
        } else if (blc2 == 'o' && blc5 == 'o' && blc8 == 'o') {
            declaraGanhador('o');
        }
    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc3 = b3.childNodes[0].className;
        let blc6 = b6.childNodes[0].className;
        let blc9 = b9.childNodes[0].className;

        if (blc3 == 'x' && blc6 == 'x' && blc9 == 'x') {
            declaraGanhador('x');
        } else if (blc3 == 'o' && blc6 == 'o' && blc9 == 'o') {
            declaraGanhador('o');
        }
    }

    /*************** Verifica na diagonal *********************************/
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc1 = b1.childNodes[0].className;
        let blc5 = b5.childNodes[0].className;
        let blc9 = b9.childNodes[0].className;

        if (blc1 == 'x' && blc5 == 'x' && blc9 == 'x') {
            declaraGanhador('x');
        } else if (blc1 == 'o' && blc5 == 'o' && blc9 == 'o') {
            declaraGanhador('o');
        }
    }
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        //verifica se é X ou O que possui no campo - "childNodes"
        let blc3 = b3.childNodes[0].className;
        let blc5 = b5.childNodes[0].className;
        let blc7 = b7.childNodes[0].className;

        if (blc3 == 'x' && blc5 == 'x' && blc7 == 'x') {
            declaraGanhador('x');
        } else if (blc3 == 'o' && blc5 == 'o' && blc7 == 'o') {
            declaraGanhador('o');
        }
    }

    /*************** Soma as jogadas *********************************/
    let contador = 0;
    for (i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            contador++;
        }
    }
    if (contador == 9) {
        declaraGanhador('Deu velha');
    }
}

/*************** Apresenta o ganhador, e apaga os valores da matriz *********************************/
function declaraGanhador(vencedor) {
    let placarX = document.querySelector("#placar-score-x");
    let placarO = document.querySelector("#placar-score-o");
    let apresentaMensagem = '';

    if (vencedor == 'x') {
        placarX.textContent = parseInt(placarX.textContent) + 1;
        apresentaMensagem = "Jogador 1 ganhou";
    } else if (vencedor == 'o') {
        placarO.textContent = parseInt(placarO.textContent) + 1;
        apresentaMensagem = "Jogador 2 ganhou";
    } else {
        apresentaMensagem = "Deu velha";
    }

   alert(apresentaMensagem);

    //apaga valores da matriz
    let removeElementos = document.querySelectorAll(".box div");
    for (let i = 0; i < removeElementos.length; i++) { 
        removeElementos[i].parentNode.removeChild(removeElementos[i]);
    }
}

/*************** Joga contra o computador *********************************/
function computadorJoga() {
    let cloneO = o.cloneNode(true);
    let cont = 0;
    let preenchido = 0;
   
    for (let i = 0; i < boxes.length; i++) {
        let random = Math.floor(Math.random() * 5);

        //So preenche se o campo estiver vazio
        if (boxes[i].childNodes[0] == undefined) {
            if(random <= 1){
                boxes[i].appendChild(cloneO);
                cont++;
                break;
            }
        } else {
            preenchido++;
        }
    }
    //Verifica o total preenchidos
    if(cont == 0 && preenchido < 9){
        computadorJoga();
    }
}