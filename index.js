const prompt = require('prompt-sync')();
var horario = [6, 0];
var sorte = 0;
var azar = 0;
var Relogio = 0;
var end = 0;
var opcoes = []

function sleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}


function relogio(horario) {
    if (horario[1] < 10) {
        console.log(`já são ${horario[0]}:0${horario[1]}`)
    } else {
        console.log(`já são ${horario[0]}:${horario[1]}`)
    }
}

function avancaTempo(horario, avanco) {
    horario[1] += avanco
    while (horario[1] >= 60) {
        horario[1] -= 60
        horario[0] += 1
    }
    return horario;
}
// horario = avancaTempo(horario, 80);
// relogio(horario);
console.clear();
console.log(`-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);
console.log(`  Você foi estava andando na rua, e do nada desmaiou, ao  `);
console.log(`acordar percebe que esta amarrado a uma coluna de madeira `);
console.log(`de uma cabana velha, parece que você escuta alguem falando`);
console.log(`no telefone as seguintes palavras: "Já peguei ele(a), quero  `);
console.log(`saber cade minha grana!"`);
console.log(`oque?! tu vai vir só as 11:30? ....`);
console.log(`que seja! se atrazar tu ja sabe! ele(a) morre!!`);
console.log(`-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`);
prompt(`(de enter para prestar mais atenção na o homen falando)`);
console.clear();
console.log(`Você escuta o cara falando: " hey vigia a porta ai por uns 5 minutos, vou ali tirar a agua do joelho numa arvore!`);
sleep(3000);
console.clear();
do {
    opcoes.push(0);
    opcoes[0] = +prompt(`1 - olhar atentamente ao seu redor! 2 - tentar forçar as cordas pra tentar se soutar. 3 - gritar por socorro.  R: `);
    horario = avancaTempo(horario, 1);
    if (opcoes[0] == 1) {
        console.log(`boa! achei uma faca perto de mim que sorte 
            e parece que tem um relogio ali na parede!
            nossa tenho que ser rapido ainda tenho ${ 5 - horario[1] }
            minutos para fugir antes do cara voltar!`);
        Relogio = 1;
        sorte++;
        break;
    } else if (opcoes[0] == 2) {
        console.log(`esta muito apertado não solta!`);
    } else {
        console.log(` o cara da porta grita: "Cala a boca, ou vou ai enfiar uma bala na sua lingua!"`)
    }
} while (horario[1] != 5);
if (sorte == 0) {
    console.log(`o cara me encontrou acordado tentando me soltar, ele acabou batendo a minha cabeça na coluna e desmaiei.`)
    azar++;
    horario = avancaTempo(horario, 30);
    console.log();
    console.log(`acordei com uma dor de cabeça enorme, tenho que tentar fugir rapido ou esses cara vao me matar!`);
    console.log();
}
while (horario[1] != minutos && azar == 1) {
    var minutos = horario[1] + 5;
    opcoes[0] = +prompt(`1 - olhar atentamente ao seu redor! 2 - tentar forçar as cordas pra tentar se soutar. 3 - gritar por socorro.  R: `);
    horario = avancaTempo(horario, 1);
    if (opcoes[0] == 1) {
        console.log(`boa! achei uma faca perto de mim que sorte 
            e parece que tem um relogio ali na parede!
            nossa tenho que ser rapido para fugir antes do cara voltar!`);
        Relogio = 1;
        sorte++;
        break;
    } else if (opcoes[0] == 2) {
        console.log(`esta muito apertado não solta!`);
    } else {
        console.log(` o cara da porta grita: "Cala a boca, ou vou ai enfiar uma bala na sua lingua!"`)
    }
}

if (Relogio == 1) {
    relogio(horario);
}
opcoes.push(0);
if (sorte == 1) {
    console.log(`consegui me soltar, e agora preciso achar um lugar pra me esconder:`)
    opcoes[1] = +prompt(`1- de baixo da cama 2- dentro do guarda-roupa 3- na cozinha r:`)
}
if (opcoes[1] == 1) {
    console.log(`o cara voltou e me achou tentando esconder debaixo da cama! ele me bateu com um pedaço de pau e desmaiei.`);
    horario = avancaTempo(horario, 30);
    azar++
} else if (opcoes[1] == 2) {
    console.log(`ele ia me procurar na floresta, mas antes ia pegar um casaco e me achou dentro do guarda roupa`);
    console.log(`me puxou pra fora e me dou uma coronhada e acabei desmaiando.`);
    horario = avancaTempo(horario, 30);
    azar++
} else {
    console.log(`estou na cozinha, acabei achando um alçapão, vou me esconder aqui.`);
    console.log(`...`)
    sleep(3000);
    console.log(`o cara e seu parceiro pelo visto foram para floresta me procurar devo ter mais ou menos 1 hora para fugir antes que me encontrem novamente.`);
    sorte++;
    horario = avancaTempo(horario, 15);
}

opcoes.push(0);
var time = horario
time[0]++;
if (opcoes[1] != 3) {
    relogio(horario);
    end++;
    console.clear();
    cosole.log("Você foi capturado, os cara que pediu seu sequestros eram contrabandistas de humanos, ele te levaram para uma mineradora de pretoleo em algum lugar do Irã. vc nunca mais ira voltar!");
    sleep(5);
    console.log("GAME OUVER!");

} else {
    console.log("Parece que os cara tracaram a porta antes de sair, preciso encontrar alguma coisa pra abrir a porta ou encontra um meio de sair!");
    do {
        relogio(horario);
        opcoes[2] = +prompt("1- procurar a achave pela cabana 2- vascular o alçapão 3- tentar arrombar a porta R:");
        if (opcoes[2] == 1) {
            console.log("Você acabou revirando toda a cabana e não acou nada, perdeu munto tempo nisso, porem vc achou algo estranho dentro do alçapão!");
            horario = avancaTempo(horario, 20);
            azar++;
        } else if (opcoes[2] == 2) {
            console.log("Você encontrou algum tunel dentro do alçapão, segundo por ele você acabou chegando na floresta!");
            horario = avancaTempo(horario, 30);
            sorte++;
        } else {
            console.log("a porta é muito resistente vc tentou diversas vezes e nada aconteceu!");
            horario = avancaTempo(horario, 15);
            azar++;
        }
        sleep(2000);
        console.clear();
    } while (time >= horario && opcoes[2] != 2);
    relogio(horario);
    console.log(time)
    if (time < horario || azar > sorte) {
        console.log("Você foi capturado, os cara que pediu seu sequestros eram contrabandistas de humanos, ele te levaram para uma mineradora de pretoleo em algum lugar do Irã. vc nunca mais ira voltar!");
    } else if (azar == sorte) {
        console.log("um dos cara te encontrou na floresta, mas ele acabou pisando numa armadinha de urso, você tenta corre e leva um tiro re raspão no braço")
        console.log("conseguindo chegar na estrada vc avista um carro que te leva pra cidade mais procima e você sai vivo!")
    } else {
        console.log("Você saindo acaba na encontrando um dos cara, você corre dele e ele pisa numa armadinha de urso, errando o tiro e sua arma caindo loge dele, alguns segundos um elicoptero aparece")
        console.log("quando voê vê é um elicoptero policial de resgate, te encontrando por conta do tiro disparado e rendendo os bandidos e vc sendo salvo!")
    }
}