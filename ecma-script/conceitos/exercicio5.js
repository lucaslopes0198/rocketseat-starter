// REST
const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
function soma(...params) { 
    // return 0
    return params.reduce((total, next) => total + next)
}

// SPREAD
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
    }
};

const usuario1 = { ...usuario, nome: "Gabriel" }
console.log(usuario1)

const usuario2 = { ...usuario, endereco: {...usuario.endereco, cidade: "Lontras"} }
console.log(usuario2)
