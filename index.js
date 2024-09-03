const NomeCompleto = "Jennifer Gralik";
const AnoNascimento = 2006;
let AnoAtual = 2024;
let Idade = 18;


console.log("Olá eu sou " + NomeCompleto + " estamos no ano " + AnoAtual + " minha idade é " + Idade + " e eu sou nascida no ano de " + AnoNascimento);

AnoAtual = AnoAtual + 1;

console.log("Olá eu sou " + NomeCompleto + " estamos no ano " + AnoAtual + " minhaidade é " + Idade + " e irei cursar Administração ");

console.log("Oi eu sou ${NomeCompleto} meu ano de nascimento ${AnoNascimento} minha idade é ${Idade}")

const ListaDeViagens = new Array(
  " Singapura ",
  " Seul ",
  " Orlando ",
  " Paris",
  " Ottawa".
  );

console.log(ListaDeViagens);

console.log(ListaDeViagens[4]);
ListaDeViagens.push("Coronel Vivida");
console.log(ListaDeViagens);

ListaDeViagens.splice(1,2);
console.log(ListaDeViagens);

const IdadeComprador = 16;

if(IdadeComprador < 18){
  console.log("Poxa! infelizmente você é menor de idade, não podemos vender nossas passagens")
}
if(IdadeComprador >= 18){
  console.log
}
