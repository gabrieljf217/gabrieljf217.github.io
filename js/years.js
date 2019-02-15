function mostraranios(){  
    var ano=1997,
    mes=7,
    dia=21,
    fecha=new Date(),
    ano_A=fecha.getFullYear(),
    mes_A=fecha.getMonth(),
    dia_A=fecha.getDay(),
    years = document.getElementById('years')
    years_A=ano_A-ano;

    if ( mes_A < (mes - 1)){
        years_A--;
    }if (((mes - 1) == mes_A) && (dia_A < dia)){ 
        years_A--;
    }
    years.innerHTML='<strong>Age . . . . .</strong> '+years_A;
}

var intervalo = setInterval(mostraranios,1000)