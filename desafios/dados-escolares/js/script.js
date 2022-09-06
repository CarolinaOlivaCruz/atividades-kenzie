
let opcao = prompt('Digite o número da oção que deseja saber?');

const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,

    getTheCurse() {

        if (opcao === '1') {
            alert(`O curso é ${this.curso}`);
        }

    },

    getTheSubjects() {

        if (opcao === '2') {
            alert(`A matéria é ${this.materias}`);
        }

    },

    resgistrationStatus() {

        if (opcao === '3') {

            if (this.situacaoMatricula === true) {
                alert('Ativo');
            } else {
                alert('Inativo');
            }
        }

    },

    generateStudentCard() {

        let cardInformation = (`Nome: "${this.nome}", idade: "${this.idade}", curso: "${this.curso}", instituição: "${this.instituicao}"`);

        if (opcao === '4') {

            alert(`${cardInformation}`);

        }
    }
}
console.log(alunoCurso.getTheCurse());
console.log(alunoCurso.getTheSubjects());
console.log(alunoCurso.resgistrationStatus());
console.log(alunoCurso.generateStudentCard());