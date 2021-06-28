if(window.SimpleSlide){
new SimpleSlide({
  slide : "quote" ,  // nome do atributo data-slide = "principal" 
  tempo : 5000 ,  // tempo de transição dos slides 
})
new SimpleSlide({
  slide : "portfolio" ,  
  tempo : 5000 ,
  nav: true ,  
})
}
if(window.SimpleAnime){
new SimpleAnime ();
} 

if(window.SimpleForm){
   new SimpleForm({
  form:".formphp",//seletor do formulário
  button:"#enviar",//seletor do butão
  erro:"<div id='form-erro'><h2>Erro no envio ! </h2><p> Um erro ocorreu, tente para o emial contato@bickcraft.com</p></div>", //menssagem erro
  sucesso:"<div id='form-sucesso' ><h2>Formulário enviado com sucesso </h2><p> Em breve eu entro em contato com você</p><div>", //menssagem sucesso  
})
}