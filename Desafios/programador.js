const empresa = {
    name:'Rocketseat',
    color: 'Roxo',
    focus: 'Programação',
    address: {
        street: "Rua Guilherme",
        number: 20,
    }
};

console.log(`A empresa ${empresa.name} está localizada em ${empresa.address.street}, número ${empresa.address.number}`);


const programador = {
    nome: 'Vinicius',
    idade: 24,

    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome:'Python', especialidade: 'Data Science'},
        {nome:'JavaScript', especialidade: 'Web / Mobile'},
    ]    
}

console.log(`O programador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[2].nome} com especiliade em ${programador.tecnologias[2].especialidade}`);

