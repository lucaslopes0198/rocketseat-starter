const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item.idade)

console.log(idades)

const usuariosFiltrados = usuarios.filter(item => item.idade > 18 && item.empresa === "Rocketseat")

console.log(usuariosFiltrados)

const findGoogle = usuarios.find(item => item.empresa === "Google")

console.log(findGoogle)

const mapFilterUsuarios = usuarios.map(item => {
    item.idade *= 2
    return item
}).filter(item => item.idade < 50)

console.log(mapFilterUsuarios)
