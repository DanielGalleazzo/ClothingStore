function copyIpPublisher1() {
  let tl_sel = document.getElementById('contato1').innerHTML;
  navigator.clipboard.writeText(tl_sel);
  console.log('Copiado ' + tl_sel + ' para a Área de Trânsferência...');
}
function copyIpPublisher2() {
  let tl_sel = document.getElementById('contato2').innerHTML;
  navigator.clipboard.writeText(tl_sel);
  console.log('Copiado ' + tl_sel + ' para a Área de Trânsferência...');
}
function copyIpPublisher3() {
  let tl_sel = document.getElementById('contato3').innerHTML;
  navigator.clipboard.writeText(tl_sel);
  console.log('Copiado ' + tl_sel + ' para a Área de Trânsferência...');
}
function copyIpPublisher4() {
  let tl_sel = document.getElementById('contato4').innerHTML;
  navigator.clipboard.writeText(tl_sel);
  console.log('Copiado ' + tl_sel + ' para a Área de Trânsferência...');
}
/////////////////////////

    const links = [
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29236.351154696167!2d-46.526167!3d-23.6565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce428f5f669687%3A0x7a4b573500ee48!2sNike%20Factory%20Santo%20Andr%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1747765154655!5m2!1spt-BR!2sbr",
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58467.07864356149!2d-46.575044!3d-23.669076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce430d3ff3f2e9%3A0xa7a2b2c34a681ec3!2sNike%20Factory%20S%C3%A3o%20Bernardo!5e0!3m2!1spt-BR!2sbr!4v1747765208179!5m2!1spt-BR!2sbr",
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58493.39068553906!2d-46.666882!3d-23.610181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b12f2805175%3A0x18c9662d5728d8e2!2sNike%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1747765245745!5m2!1spt-BR!2sbr",
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58521.7513575489!2d-46.638664!3d-23.546545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5853ca25ca85%3A0x25e71df1dc257e17!2sNike%20Factory%20Light!5e0!3m2!1spt-BR!2sbr!4v1747765288330!5m2!1spt-BR!2sbr",
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58513.58383193303!2d-46.503413!3d-23.564888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67b2b96df2ad%3A0xa8ad64a10c0dafcd!2sNike%20Unite%20Aricanduva!5e0!3m2!1spt-BR!2sbr!4v1747765328486!5m2!1spt-BR!2sbr",
    ];

    let index = 0;

    function atualizarIframe() {
      const iframe = document.getElementById("meuIframe");
      iframe.src = links[index];
    }

    function AvancarLink() {
      index = (index + 1) % links.length;
      atualizarIframe();
    }

    function RetornarLink() {
      index = (index - 1 + links.length) % links.length;
      atualizarIframe();
    }

    //////////////////////////////
    function abrirnikeDunkAzul() {
      window.open('nikeDunkAzul.html', '_blank'); 
    }
   const imagens = [
  'https://artwalk.vtexassets.com/arquivos/ids/570918-1200-auto?v=638696067474200000&width=1200&height=auto&aspect=true',
  'https://artwalk.vtexassets.com/arquivos/ids/570919-1200-auto?v=638696068728500000&width=1200&height=auto&aspect=true',
  'https://artwalk.vtexassets.com/arquivos/ids/570920-1200-auto?v=638696068907570000&width=1200&height=auto&aspect=true',
  'https://artwalk.vtexassets.com/arquivos/ids/570921-1200-auto?v=638696069410770000&width=1200&height=auto&aspect=true'
];
let indiceAtual = 0;
function mostrarImagem() {
  document.getElementById('imagemProdutoTENISNIKEDUNK').src = imagens[indiceAtual];
}
function avancarImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem();
}
function voltarImagem() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem();
}
window.onload = mostrarImagem;;