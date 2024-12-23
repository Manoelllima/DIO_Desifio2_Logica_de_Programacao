console.log("------Desafio 2 Logica de Programação------ \n------Calculadora de partidas Rankeadas------\n");

//Atributos do Jogador
let nomeJogador = "Lucas"; //altere para o seu nome
let vitorias = 0; 
const ranks = ['Ferro','Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal' ,'Radiante'];
let rankAtual = ranks[0];


console.log("------ Voçê iniciou uma partida ------");
console.log("------ Vamos vencer! ------\n");

//Função para calcular as partidas
function calculoPartida(partidas){
    let win = 0, defeat = 0; //variaveis de vitorias e derrotas    
    for(let i = 0; i <= partidas; i++){  //simulador de partidas aleatorias  
        let change = Math.floor(Math.random() * 100);           
        if( Math.floor(change) > 30 ){
            win++;
            console.log("------ Você ganhou a partida! ------\n");
        }else{
            defeat++;
            console.log("------ Você perdeu a partida! ------\n");
        }               
    }
    if(win - defeat <= 0) 
        return 0
    else
        return win - defeat;
}

vitorias = calculoPartida(100);

if(vitorias < 10){
    rankAtual = ranks[0];
}
else if(vitorias > 11 && vitorias < 20){
    rankAtual = ranks[1];
}
else if(vitorias > 21 && vitorias < 50){
    rankAtual = ranks[2];
}
else if(vitorias > 51 && vitorias < 70){
    rankAtual = ranks[3];
}
else if(vitorias > 71 && vitorias < 80){
    rankAtual = ranks[4];
}
else if(vitorias > 81 && vitorias < 90){
    rankAtual = ranks[5];
}
else if(vitorias > 91 && vitorias < 100){
    rankAtual = ranks[6];
}
else{
    rankAtual = ranks[7];
}

console.log(`O Jogador de nome ${nomeJogador} está no rank de ${rankAtual} com um total de ${vitorias} vitorias`);