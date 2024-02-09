const perguntas = [
    {
        pergunta: 'Qual é a finalidade da função "parseInt()" em JavaScript?',
        respostas: [
            'Converter uma string para um número inteiro.',
            'Arredondar um número decimal para o inteiro mais próximo.',
            'Converter um número inteiro para uma string.',
        ],
        correta: 0
    },
    {
        pergunta: 'Como se declara uma variável em JavaScript?',
        respostas: [
            'variable x = 10;',
            'var x = 10;',
            'let x = 10;',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a função do operador "===" em comparações em JavaScript?',
        respostas: [
            'Comparação estrita de valores e tipos.',
            'Atribuição de valores.',
            'Comparação de valores, ignorando os tipos.',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é o DOM em JavaScript?',
        respostas: [
            'Diretório de Módulos.',
            'Documento de Objeto de Modelo.',
            'Modelo de Objeto de Documento.',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a forma correta de comentar uma linha de código em JavaScript?',
        respostas: [
            '// Comentário',
            '/** Comentário */',
            '/* Comentário */',
        ],
        correta: 0
    },
    {
        pergunta: 'O que o método "addEventListener" faz em JavaScript?',
        respostas: [
            'Remove um evento de um elemento.',
            'Adiciona um ouvinte de eventos a um elemento.',
            'Altera o estilo de um elemento.',
        ],
        correta: 1
    },
    {
        pergunta: 'Como se realiza a concatenação de strings em JavaScript?',
        respostas: [
            'string1 + string2',
            'string1 .concat(string2)',
            'string1, string2',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é JSON em JavaScript?',
        respostas: [
            'Uma linguagem de programação.',
            'Um formato de intercâmbio de dados.',
            'Um método para criar objetos.',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a diferença entre "null" e "undefined" em JavaScript?',
        respostas: [
            'São equivalentes e podem ser usados indistintamente.',
            'Null representa ausência de valor, enquanto undefined é atribuído automaticamente a variáveis não inicializadas.',
            'Undefined é usado para indicar valores nulos, enquanto null representa variáveis não inicializadas.',
        ],
        correta: 1
    },
    {
        pergunta: 'O que é o operador ternário em JavaScript?',
        respostas: [
            'Um operador lógico para comparações ternárias.',
            'Um operador para cálculos matemáticos em três operandos.',
            'Um operador condicional que avalia uma expressão e retorna um valor com base nessa avaliação.',
        ],
        correta: 2
    },
];

const corretas = new Set()
const totalDePerguntas = perguntas.length


// busca o id quiz
const quiz = document.querySelector('#quiz');

// busca a tag template
const template = document.querySelector('template');

// busca o id acertos e dentro dele o span 
const mostrarTotal = document.querySelector('#acertos span');


for(let item of perguntas) {
    // clona o que estiver dentro da tag template
    const quizItem = template.content.cloneNode(true);

    // insere uma informação nova dentro do h3
    quizItem.querySelector('h3').textContent = item.pergunta;
    
    for (let resposta of item.respostas) {
        // clona o que estiver dentro do dl e do dt
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        
        // insere uma informação nova dentro do span
        dt.querySelector('span').textContent = resposta;

        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }

        // coloca as alternativas dentro do dl
        quizItem.querySelector('dl').appendChild(dt);
    }

// remove o que estiver dentro de dt
quizItem.querySelector('dl dt').remove()
    
    // coloca a pergunta na tela    
    quiz.appendChild(quizItem);
}