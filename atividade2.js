
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO!] verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebeh.jpg')
                
                
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovemh.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'img/adultoh.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'img/velhoh.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovemm.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'img/adultom.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'img/velham.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}
