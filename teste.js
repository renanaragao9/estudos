function verificar() {
 
    var n1 =  Number(document.getElementById('num').value)
    var n2 =  Number(document.getElementById('n').value)
    var res = document.getElementById('res')
    var escolha = document.querySelector('input[name="opr"]:checked').value
    
    if (escolha == 'adicao') {
        var numero = n1 + n2
        res.innerHTML = (`A soma entre os números ${n1} + ${n2}  = ${numero}`)
    } 
        else if (escolha == 'subtracao') {
             numero = n1 - n2
             res.innerHTML = (`A subtração entre os números ${n1} - ${n2}  = ${numero}`)
    }   
            else if (escolha == 'multiplicacao') {
                 numero = n1 * n2
                 res.innerHTML = (`A multiplicação entre os números ${n1} x ${n2}  = ${numero}`)
    }      
                else if (escolha == 'divisao') {
                    numero = n1 / n2
                    res.innerHTML = (`A divisão entre os números ${n1} / ${n2}  = ${numero}`)
    }
    
    
}
