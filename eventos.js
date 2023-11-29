/* Eventos em Java Script 29/11/2023
 São ações disparadas pela interação dos usuários na página. É o correto manejo desses eventos que tornam as páginas interativas e dinÂmicas.
 eventos mais utilizados :

onclick -> Disparado quando recebe um click.
ondbclick -> Disparado quando recebe um click duplo
onmouseover -> Disparado quando o mouse está sobre
onmouseout -> Disparado quando o mouse é movido para fora do elemento 
onmousemove -> Disparado quando o mouse é movido no elemento 
onfocus -> Disparado quando elemento recebe o foco, Válido para input,
onchange -> Disparado quando existe uma mudança no conteudo, "Ao mudar"
onblur -> Disparado quando elemento perde o foco.
onkeydown -> quando uma tecla é pressionada
onkeypress -> quando uma tecla é pressionada e solta
onload -> Disparado quando uma página termina de ser carregada (body)
onresize -> quando há um redirecionamento da janela.

 (arquivo html)
 <body>
   <h1>JavaScript Eventos</h1>
   <button onclick="EventoClick()">Clique Aqui</button>
   <button dblclick="EventoClick()">Clique Aqui</button>
 </body>
 */
  function eventoClick() {
    alert('Acionou um evento click');
    document.body.style.backgroundColor = "yellow"
  }

  function eventoDblClick() {
    alert('Evento de clique duplo');
  }












