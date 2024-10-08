const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Jennifer Gralik";
const anoNascimento = 2006;
let anoAtual = 2024;
const idade = 18;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025;
let Idade = 19;
const NomeCompleto = "Jennifer Gralik";
const Faculdade = "Administração";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou a ${nomeCompleto}, tenho ${idade} anos, nasci em ${anoNascimento}, e em ${AnoAtual} eu quero seguir na área de ${Faculdade}`);

const loginCerto = "Jennifer";
const senhaCerta = 12345;
console.log("---------------------------------------------------------------------------------------");
console.log("");
console.log("                                   ❂  𝑨𝒈𝒆̂𝒏𝒄𝒊𝒂 𝒅𝒆 𝑽𝒊𝒂𝒈𝒆𝒏𝒔  ❂    ");
console.log("                                      𝓢𝓮𝓳𝓪 𝓫𝓮𝓶-𝓿𝓲𝓷𝓭𝓸(𝓪)!"     );
console.log("");
console.log("---------------------------------------------------------------------------------------");
console.log("");
console.log("");
console.log("❂ 𝑨́𝒓𝒆𝒂 𝒅𝒆 𝑳𝒐𝒈𝒊𝒏:");

var login = entrada("↪︎ Digite o seu login: ");
var senha = entrada("↪︎ Digite a sua senha: ");

while(login != loginCerto){
  console.log("Login incorreto");
  login = entrada("Digite o seu Login novamente: ");

}

while(senha != senhaCerta){
  console.log("senha incorreta");
  senha = entrada("Digite a sua senha novamente: ");
}

console.log("");
console.log("");
console.log("");
console.log("❂ 𝑪𝒐𝒏𝒇𝒊𝒓𝒂 𝒂𝒔 𝒏𝒐𝒔𝒔𝒂𝒔 𝒐𝒑𝒄̧𝒐̃𝒆𝒔 𝒅𝒆 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔:");
console.log("");

const listaDeViagens = new Array(
  'Japão',
  `Canadá`,
  `Estados Unidos`,
  `México`,
  `Rússia`
)

console.log(listaDeViagens);

console.log(listaDeViagens[4]);
listaDeViagens.push("Campo Mourão");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);
var nomeComprador = entrada("qual é o seu nome? ");

var idadeComprador = entrada("qual é a sua idade? ");

if(idadeComprador < 18){
  console.log("Não vendemos passagens para menores de 18 anos.");
console.log(`Ja que sua idade é ${idadeComprador} infelizmente não podemos te vender as passagens`);
}
if(idadeComprador >= 18){
   console.log("Compra realizada com sucesso.")
  console.log(`Ja que sua idade é ${idadeComprador} podemos te vender a passagem parabens!`);
}


