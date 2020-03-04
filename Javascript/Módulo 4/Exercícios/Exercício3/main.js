function getUser() {
  const user = document.querySelector("#user").value;
  const list = document.querySelector("#list");
  axios
    .get("https://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      list.innerHTML = "";
      if (response.data.length == 0) {
        list.innerHTML = "Não há repositórios para este usuário"
      } else {
        for (data of response.data) {
          const item = document.createElement("li");
          const link = document.createElement("a");
          link.innerText = data.name + " (" + data.description + ")";
          link.setAttribute("href", data.html_url);
          link.setAttribute("target", "_blank");
          item.appendChild(link);
          list.appendChild(item);
        }
        console.log(response);
      }
    })
    .catch(function(error) {
      console.warn(error);
    });
}
