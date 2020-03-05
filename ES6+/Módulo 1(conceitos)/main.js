//Classes
/*class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor(){
        super();
        this.usuario = 'André';
    }

    mostraUsuario(){
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}
MinhaLista.mostraUsuario();*/

/*class Matematica{
    static soma(a,b){
        return a+b;
    }
}

//Operações em array
console.log(Matematica.soma(1,2))*/
/*const arr = [1, 2, 3, 46, 67, 87, 93];

const newArr = arr.map(function(item, index) {
  return item * index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
  return item === 46;
});

console.log(find)
*/

/*const arr = [1,3,4,5,6];

//arrow functions
const newArr = arr.map(item => item * 2);

  console.log(newArr);

  const teste = () =>({ nome:'André'})

  console.log(teste())*/

//valores padrão
/*const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());*/

//Desestruturação
/*const usuario = {
  nome: "André",
  idade: 33,
  endereco: {
    cidade: "São Pedro da Aldeia",
    estado: "RJ"
  }
};
const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome,idade }) {
  console.log(nome);
  console.log(idade);
}

mostraNome(usuario);*/

//rest
/*const usuario = {
    nome: "André",
    idade: 33,
    empresa: "DevPleno"
  };

  const {nome, ...resto} = usuario;

  console.log(nome);
  console.log(resto);*/

/*const arr = [1,2,3,4];

  const [a,b,...c] = arr;

  console.log(a);
  console.log(b);
  console.log(c);*/

/*function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));*/

//spread

/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);*/

/*const usuario1 = {
    nome: "André",
    idade: 33,
    empresa: "DevPleno"
  };

  const usuario2 = {...usuario1, nome:'Diego'}

  console.log(usuario2)*/

//template literals
/*const nome = "André";
  const idade = 33;

  console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);*/

//object short sintax
/*const nome = "André";
const idade = 33;

const usuario = {
  nome,
  idade,
  empresa: "DevPleno"
};
console.log(usuario);*/