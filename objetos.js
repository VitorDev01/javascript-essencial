   // defindindo objeto 
       const pessoa = {
        nome: 'Luiz',
        sobrenome: 'Oliveira',
        idade: 34,
        signo: 'peixes',
        altura: 1.78,
        nacionalidade: 'kanadense',
        curso: 'publicidade',
        //um objeto dentro e ouro
        endereco: {
           rua: 'Av Brasil', 
           numero: 440,
        }
    } 

    console.log(pessoa);
    // usando a notação de ponto (.) para atribuição normal 
    console.log(pessoa.nome);
    
    console.log(pessoa.signo);
    
    console.log(pessoa.idade);
    
    console.log(pessoa.altura);
    
    // jogar numa variável 
    
    //const nome = pessoa.nome;
    //console.log(nome);
    
    // atribuição via desestruturação usando Chaves {}
    
    const { nome, sobrenome, idade } = pessoa;
    console.log(nome + " " + sobrenome, idade);
    
    const {endereco: { rua, numero}} = pessoa;
    console.log(rua, numero);


  //OBJETOS 

  const carro = {
     marca: "ford",
     modelo: "ka",
     ano: 2015,
     placa: "BCD-2233",
     buzina: function() { alert('biiiiiiiii')}
     
  };


  console.log(carro.placa);
  carro.buzina();


  
     
