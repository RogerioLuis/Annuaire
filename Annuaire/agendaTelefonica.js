function agenda() {
   let lista = [
      ["Rogerio Luis Gonzalez", "(24) 99999-9999", "3000798", "aaaaa@sdsfsdaf"],
      ["dsfds", "(24) 88888 8888", "484664", "dfssfd@jhglglhk"],
   ];

   let favoritos = [];

   function adicionarContato() {
      let nome = prompt("Digite o nome do contato");
      let dataNasc = prompt("Digite a data de nascimento");
      let numero = prompt("Telefone do contato");
      let email = prompt("Digite o e-mail do contato");

      let contatoNovo = [nome, numero, dataNasc, email];
      lista.push(contatoNovo);

      alert("Contato Salvo");
   }

   function listarContatos(contatos) {
      let resposta = "";

      for (let i = 0; i < contatos.length; i++) {
         let contato = contatos[i];
         resposta += `${i + 1}. Nome: ${contato[0]}, Telefone: ${contato[1]}, Data de Nascimento: ${contato[2]}, Email: ${contato[3]}\n`;
      }

      alert(resposta);
   }

   function excluirContato(contatos) {
      let escolha = parseInt(prompt("Número do contato que deseja excluir"));

      if (!isNaN(escolha) && escolha >= 1 && escolha <= contatos.length) {
         contatos.splice(escolha - 1, 1);
         alert("Contato excluído com sucesso");
      } else {
         alert("Número de contato inválido");
      }
   }

   function adicionarFavorito() {
      let escolha = parseInt(prompt("Número do contato que deseja adicionar aos favoritos"));

      if (!isNaN(escolha) && escolha >= 1 && escolha <= lista.length) {
         let contato = lista[escolha - 1];
         favoritos.push(contato);
         alert("Contato adicionado aos favoritos");
      } else {
         alert("Número de contato inválido");
      }
   }

   function listarFavoritos() {
      listarContatos(favoritos);
   }

   function buscarPorNome() {
      let nomeBusca = prompt("Digite o nome que deseja buscar");
      let resultados = [];

      for (let i = 0; i < lista.length; i++) {
         let contato = lista[i];
         if (contato[0].toLowerCase().includes(nomeBusca.toLowerCase())) {
            resultados.push(contato);
         }
      }

      if (resultados.length > 0) {
         alert("Resultados da busca:\n");
         listarContatos(resultados);
      } else {
         alert("Nenhum contato encontrado com esse nome.");
      }
   }

   let select;

   while (select !== 5) {
      select = parseInt(prompt("Agenda telefônica!! \n\n1. Adicionar Novo Contato \n2. Exibir Lista \n3. Excluir Contato \n4. Adicionar aos Favoritos \n5. Buscar por Nome \n6. Sair"));

      switch (select) {
         case 1:
            adicionarContato();
            break;
         case 2:
            listarContatos(lista);
            break;
         case 3:
            excluirContato(lista);
            break;
         case 4:
            adicionarFavorito();
            break;
         case 5:
            buscarPorNome();
            break;
         case 6:
            alert("Saindo da Agenda Telefônica");
            break;
         default:
            alert("Opção inválida, escolha uma opção válida");
      }
   }
}

agenda(); // Start the agenda application
