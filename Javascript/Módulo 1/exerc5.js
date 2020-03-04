//Dado o seguinte vetor de objetos:
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    },
    {
        nome: "André",
        habilidades: ["Javascript", "HTML", "CSS"]
    }
];
lerHabilidades(usuarios);
function lerHabilidades(obj) {
    for(let usr of obj){
        console.log(`O ${usr.nome} possui as habilidades : ${usr.habilidades.join(', ')}`)
        
        
    }
}

//Escreva uma função que produza o seguinte resultado:
//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir