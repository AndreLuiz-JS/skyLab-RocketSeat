//A partir do seguinte objeto:
const empresa = {
    nome: "Rocketseat",
    endereco: {
      cidade: "Rio do Sul",
      estado: "SC"
    }
  };
  /*Utilize a desestruturação para transformar as propriedades
  nome, cidade e estado em variáveis, nofim deve ser possível
  fazer o seguinte:*/
  const {
    nome,
    endereco: { cidade },
    endereco: { estado }
  } = empresa;
  console.log(nome); // Rocketseat
  console.log(cidade); // Rio do Sul
  console.log(estado); // SC
  
  //Na seguinte função
  
  function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
  }
  mostraInfo({ nome: "Diego", idade: 23 });
  /*Utilize a desestruturação nos parâmetros da função para
  buscaro nome e idade do usuário separadamente e a função
  poder retornar apenas:
  return `${nome} tem ${idade} anos.`; */
  function mostraInfo2(usuario) {
    const { nome, idade } = usuario;
    return `${nome} tem ${idade} anos.`;
  }
  console.log(mostraInfo2({ nome: "Diego", idade: 23 }));
  