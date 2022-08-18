// S4-05 | 💪 Atividades - Funções: Exercitando o uso de parâmetro
// Ex.1





// S4-21 | 💪 Atividades - Loops: Exercitando uso do While

// Ex.1
function funcaoContaPasso(passos){
    let i = 0 
    while(i < passos){
        i++
      console.log(`Visitei a ${i}ª casa`)
      }
    } 
  console.log(funcaoContaPasso(10))


// Ex.2
function recomecando(casa) {
    let i = 0;
     
  while (i < casa && i > 0 || i >= 1) {
    
        i--
    console.log(i)
    }
}console.log(recomecando(5))

