alunosTurmaA = [
    {
        nome: "Vinicius",
        nota: 9
    },
    {
        nome: "Bruno",
        nota: 8
    },
    {
        nome: "Marcio",
        nota: 8
    },
    {
        nome: "Leticia",
        nota: 10
    },
]

alunosTurmaB = [
    {
        nome: "Rodrigo",
        nota: 7
    },
    {
        nome: "Paulo",
        nota: 4
    },
    {
        nome: "Viviane",
        nota: 4
    }, {
        nome: "Marcela",
        nota: 3
    },
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length

    return media
}

const media = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enviaMensagem(media, turma) {

    if (media >= 6) {
        console.log(`Parabéns, a média da turma ${turma} foi ${media}`)
    } else {
        console.log(`A média da turma ${turma} foi ${media}`)
    }
}

enviaMensagem(media, 'A')
enviaMensagem(media2, 'B')
