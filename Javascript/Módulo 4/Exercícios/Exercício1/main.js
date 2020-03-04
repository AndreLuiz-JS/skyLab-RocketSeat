const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (idade >= 18) {
        resolve();
      } else {
        reject();
      }
    },2000);
  });
}
btn.onclick = function () {
  checaIdade(Number(input.value))
    .then(function() {
      console.log("Maior de 18");
    })
    .catch(function() {
      console.warn("Menor de 18");
    });
}
