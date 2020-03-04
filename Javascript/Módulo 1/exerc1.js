//Crie uma função que dado o objeto a seguir:
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};


/*Retorne o seguinte conteúdo:

O usuário mora em São Paulo / SP,
no bairro Centro,
na rua "Rua dos Pinheiros" com nº 1293. */

function retornaEndereco(end){
    console.log(
        `O usuário mora em ${end.cidade} / ${end.uf},
        no bairro ${end.bairro},
        na rua "${end.rua}" com nº ${end.numero}`
    )
}

retornaEndereco(endereco);