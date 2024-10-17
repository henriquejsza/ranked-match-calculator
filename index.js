const prompt = require('prompt-sync')();

// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base nas vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função para validar as entradas
function validarEntradas(vitorias, derrotas) {
    if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        return false;
    }
    return true;
}

// Função para exibir o resultado formatado
function exibirResultado(saldoVitorias, nivel) {
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
}

// Função principal que calcula o saldo e determina o nível
function calcularPartidas(vitorias, derrotas) {
    if (!validarEntradas(vitorias, derrotas)) {
        return "Por favor, insira números válidos (números inteiros não negativos) para vitórias e derrotas.";
    }

    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);

    return exibirResultado(saldoVitorias, nivel);
}

// Captura de dados do usuário
const vitorias = parseInt(prompt('Digite o número de vitórias (um número inteiro): '));
const derrotas = parseInt(prompt('Digite o número de derrotas (um número inteiro): '));

// Exibe o resultado ou a mensagem de erro
const resultado = calcularPartidas(vitorias, derrotas);
console.log(resultado);
