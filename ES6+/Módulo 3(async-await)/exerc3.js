import axios from "axios";
//3
class Github {
  static getRepositories(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("Repositório não existe");
      });
  }
}
Github.getRepositories("rocketseat/awesome");
Github.getRepositories("rocketseat/dslkvmskv");

class Github2 {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.warn("Repositório inexistente.");
    }
  }
}
Github2.getRepositories("rocketseat/awesome");
Github2.getRepositories("rocketseat/dslkvmskv");

const buscaUsuario = user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log("Usuário não existe");
    });
};
buscaUsuario("diego3g");

const buscaUsuario2 = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    console.warn("Usuário inexistente.");
  }
};
buscaUsuario2("diego3g");
