
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    
   
   
    if (hora >= 5 && hora <12) {
        // BOM DIA!
        img.src = 'imgs/manha.png'
        msg.innerHTML = `Bom Dia.`
        document.body.style.background = '#fdad5f'
    }
        
        else if (hora >= 12 && hora < 18){
            // BOA TARDE!
            img.src = 'imgs/tarde.png'
             msg.innerHTML = `Boa Tarde.` 
             document.body.style.background = '#a95327'
        }
        else {
            // BOA NOITE!
            img.src = 'imgs/noite.png'
            msg.innerHTML = `Boa Noite.`
            document.body.style.background = '#939395'
        }
    }
