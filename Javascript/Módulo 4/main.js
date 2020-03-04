/*const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/AndreLuiz-JS");
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};*/

/*const minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/AndreLuiz-JS");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição: '+xhr.statusText);
        }
      }
    };
  });
};
minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })*/

axios
  .get("https://api.github.com/users/AndreLuiz-JS")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
