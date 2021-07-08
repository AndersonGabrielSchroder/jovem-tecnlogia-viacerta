const submeterformulario = () =>{
    const rangeinicial = document.getElementById("rangeinicial").value;
    const rangefinal = document.getElementById("rangefinal").value;
    const minhaaposta = document.getElementById("minhaaposta").value;

    realizarsorteio(+rangeinicial, +rangefinal, +minhaaposta);
}


const realizarsorteio = (rangeinicial, rangefinal, minhaaposta)=>{
    
    if(!rangeinicial) {
        alert('informe o range  inicial');
        return;
    }

    if(!rangefinal) {
        alert('informe o range  final');
        return;
    }

    if(rangeinicial > rangefinal){
        alert('o range inicial nao pode ser maior que range final');
    }
    
    if((minhaaposta > rangefinal) || (minhaaposta < rangeinicial)){
        alert('a aposta deve ser entre o range inicial e final');
        return;
    }



const numerosorteado = novosorteio(rangeinicial, rangefinal);

if(numerosorteado === minhaaposta){
    alert('parabens voce acretou');
    return;
}
 alert(`o numero sorteado foi ${numerosorteado}`);

}
const novosorteio = (rangeinicial, rangefinal) => {
    return(Math.floor(Math.random()*( rangefinal - rangeinicial + 1))+ rangeinicial);
}


