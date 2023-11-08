const elementos = {
    telaInicial: document.getElementById('inicial'),
    telaCadastro: document.getElementById('cadastro'),
    telaJogo: document.getElementById('jogo'),
    telaMensagem: document.getElementById('.mensagem'),
    textoMensagem: document.getElementById('.mensagem .texto'),
    teclado: document.getElementById('.teclado'),
    palavra: document.getElementById('.palavra'),
    dica: document.getElementById('.dica'),

    botoes: {
        facil: document.getElementById('.botao-facil'),
        medio: document.getElementById('.botao-medio'),
        dificil: document.getElementById('.botao-dificil'),
        cadastrar: document.getElementById('.botao-cadastrar'),
        realizarCadastro: document.getElementById('.botao-realizar-cadastro'),
        voltar: document.getElementById('.botao-voltar'),
        reiniciar: document.getElementById('.botao-reiniciar'),

    },
    campos: {
        dificuldade: {
            facil: document.getElementById('facil'),
            medio: document.getElementById('medio'),
            dificil: document.getElementById('dificil'),
        },
        palavra: document.getElementById('palavra'),
        dica: document.getElementById('dica'),
    },
    boneco: [
        document.querySelector('.boneco-cabeca'),
        document.querySelector('.boneco-corpo'),
        document.querySelector('.boneco-braco-esquerdo'),
        document.querySelector('.boneco-braco-direito'),
        document.querySelector('.boneco-perna-esquerda'),
        document.querySelector('.boneco-perna-direita'),
    ],
};

const palavras = {
    facil: [
        {
            palavra: 'série',
            dica: 'Game Of thrones é a melhor...'
        },
        {
            palavra: 'ímpar',
            dica: 'Se não é par é ...'
        },
    ],
};

function novoJogo(){
    jogo = {
        dificuldade: undefined,
        palavra: {
            original: undefined, 
            semAcentos: undefined,
            tamanho: undefined,
            dica: undefined,
        },
        acertos: undefined,
        jogadas: [],
        chances: 6,
        definirPalavra: function (palavra, dica) {
            this.palavra.original = palavra;
            this.palavra.tamanho = palavra.length;
            this.acerto = '';

            this.palavra.semAcentos = this.palavra.original.normalize('NFD').replace(/[\u0300- \u036f]/g, '');
            this.palavra.dica = dica;

            for (let i = 0; i < this.palavra.tamanho; i++) {
                this.acertos += ' ';
                
            }
            
        },
        jogar: function (letraJogada){
            let acertou = false;
            for (let i = 0; i < this.palavra.tamanho; i++) {
                const letra = this.palavra.semAcentos[i].toLowerCase();
                if(letra === letraJogada.toLowerCase()){
                    acertou = true;

                    this.acertos = substituirCaractere(this.acertos, i , this.palavra.original[i]);
                }
                
            }
            if (!acertou) {
                this.chances --;
            }
            return acertou;
        },
        ganhou: function (){
            return !this.acertos.include(' ');
        },
        perdeu: function () {
            return this.chances <= 0;
        },
        acabou: function (){
            return this.ganhou() || this.perdeu();
        },
        emAndamento: false,
        
    };  
}
function criarTeclado(){
    
}
function mostrarErro(){

}
function mostrarMensagem(vitoria){

}
function abrirTelaCadastroPalavra(){

}
function voltarInicio(){

}
function cadastrarPalavra(){

}
function sortearPalavra(){

}
function mostrarPalavra(){

}
function selecionarLetra(Letra){

}
function iniciarJogo(dificuldade){

}

function substituirCaractere(str, indice, novoCaractere){
    const parteAntes = str.substring(0, indice);
    const parteDepois = str.substring(indice + 1);
    const novaString = parteAntes + novoCaractere + parteDepois;
    return novaString;
}
