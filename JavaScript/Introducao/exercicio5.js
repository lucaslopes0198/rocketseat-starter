function Habilidades(usuarios) {
    for (usuario of usuarios) {
        console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`);
    }
    // console.log("O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir")
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

Habilidades(usuarios)