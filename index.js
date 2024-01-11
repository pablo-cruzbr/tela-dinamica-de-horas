function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
 
    //var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`; 

    if (hora >= 0 && hora < 12){
        //Bom dia 
        img.src = "img/manha.png.png"
        document.body.style.background = '#ffde02'
    }else if (hora >= 12 && hora <18){
        //Boa tarde
        img.src = "img/tarde.png.png"
        document.body.style.background = '#e85d04'
    }else{
        //boa noite
        img.src = "img/noite.png.png"
        document.body.style.background = '#3f37c9'
    }
}
