
let main = document.getElementById("main")
let box = document.createElement('div')

var alunosAndNotes = {
    Joao: 8,
    Maria:6,
    Mateus:1,
    Leticia: 2,
    Julia: 'f'
}

//Lista de alunos e suas respectivas notas

var nomes = Object.keys(alunosAndNotes)
var posicao = Object.values(alunosAndNotes)
//converções para que a lista possa ser navegada utilizando o metódo proposto por mim


function showResults(){



function levelNotes(nome, posicoes){
    if(posicao[posicoes] <= 5){
        let box = document.createElement('div')
        main.appendChild(box)
        box.innerHTML = `<p>${nomes[nome]} está com a nota baixa <br> Nota:${posicao[posicoes]}</p>`
        box.style.backgroundColor = 'red'
    } 
    
    else if(posicao[posicoes] <= 7){
        let box = document.createElement('div')
        main.appendChild(box)
        box.innerHTML = `<p>${nomes[nome]} está com a nota média <br> Nota:${posicao[posicoes]}</p>`
        box.style.backgroundColor = '#F1BF00'
    }
    
    else if(posicao[posicoes] >= 8){
        let box = document.createElement('div')
        main.appendChild(box)
        box.innerHTML = `<p>${nomes[nome]} está com a nota alta <br> Nota:${posicao[posicoes]}</p>`
        box.style.backgroundColor = 'green'
    } else{
        let box = document.createElement('div')
        main.appendChild(box)
        box.innerHTML = `<p>${nomes[nome]} não fez a prova</p>`
        box.style.backgroundColor = 'grey'
    }
}

//função que lerá as notas e dará o veridito

// criando variáveis para navegar na lista
var p = 0 // posição
var a = 0 // aluno


//Estrutrura de repetição 
while(p < posicao.length){
    console.log(levelNotes(a,p))
    p++
    a++
}
}


//função que adiociona aluno no banco de dados



