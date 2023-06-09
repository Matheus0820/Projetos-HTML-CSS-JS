function gqrcode() {
    var input = document.querySelector('textarea').value;
    var googlechardAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=h&chl=';
    var conteudoqrcode = googlechardAPI + encodeURIComponent(input);

    document.querySelector('#qrcodeimg').src = conteudoqrcode; 


}

// encodeURIComponent = TRANSFORMA TEXTO EM LINK;
// cht=qr = FALA O TIPO DA IMAGEM;
// chs=500x500 = FALA A DIMENÇÃO DA IMAGEM;
// chld=h = NIVEL DE CORREÇÃO DO QRCODE;
// chl= = Onde vai o link que o QRCODE vai direcionar;