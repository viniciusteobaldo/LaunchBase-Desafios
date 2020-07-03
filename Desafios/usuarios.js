//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array):

const usuarios = [
    {nome: "Vinicius",tecnologias: ["HTML", "CSS"]},
    {nome: "Rodrigues",tecnologias: ["JavaScript", "CSS"]},
    {nome: "Teobaldo",tecnologias: ["HTML", "Node"]}
];

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

//Carlos trabalha com HTML, CSS
//Jarmine trabalha com JavaScript, CSS
 //Tuane trabalha com HTML, Node.js


for (let a = 0; a < usuarios.length; a++) {

    let tecnologias = "";

    for ( let i = 0; i < usuarios[a].tecnologias.length; i ++) {
        if ( i == 0) {
            tecnologias = usuarios[a].tecnologias[i];
        } else {
            tecnologias = tecnologias + ", " + usuarios[a].tecnologias[i];
        }
    }
    console.log(`${usuarios[a].nome} trabalha com ${tecnologias}.`);
}

//For Of
for (usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}.`);
}




