const listaDosConvidados = prompt("Quais são os nomes dos convidados?");
const listaDosConvidadosCorrigida = listaDosConvidados
 .trim()
 .split(", ")
 .map(item => item.charAt(0).toUpperCase() + item.slice(1));
 
console.log(listaDosConvidadosCorrigida.join(), listaDosConvidadosCorrigida.length, "usuários cadastrados sejam bem-vindos!");