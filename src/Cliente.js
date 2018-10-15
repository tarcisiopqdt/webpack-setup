export default class Cliente{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log("Olá " + this.nome);
    }
    funfou(){
        console.log(`${this.nome} funfou mesmo com o babel-loarder :)!`)
    }
}