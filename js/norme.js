var Janvier = document.getElementById("janvier")
    var fevrier = document.getElementById("fevrier")
    var mars = document.getElementById("mars")
    var avril = document.getElementById("avril")
    var mai = document.getElementById("mai")
    var juin = document.getElementById("juin")
    var juillet = document.getElementById("juillet")
    var aout = document.getElementById("août")
    var septembre = document.getElementById("septembre")
    var octobre = document.getElementById("octobre")
    var novembre = document.getElementById("novembre")
    var decembre = document.getElementById("décembre")
 





    function affichemoi   ()
    
    {
            Janvier.innerHTML="Janvier"
            fevrier.innerHTML="Fevrier"
            mars.innerHTML="Mars"
            avril.innerHTML="Avril"
            mai.innerHTML="Mai"
            juin.innerHTML="Juin"
            juillet.innerHTML="Juillet"
            aout.innerHTML="Août"
            septembre.innerHTML="Spetembre"
            octobre.innerHTML="Octobre"
            novembre.innerHTML="novembre"
            decembre.innerHTML="Décembre"


            
    }


    affichemoi ()





function cachecache2206 ()
{
    document.getElementById("tables2206").style.display="block"
    document.getElementById("tables2906").style.display="none"
    document.getElementById("Semaine2206").style.backgroundColor="#32383E"
    document.getElementById("Semaine2906").style.backgroundColor="#F2F2F2"
    document.getElementById("Semaine2206").style.color="#F2F2F2"
    document.getElementById("Semaine2906").style.color="black"




    
}

function cachecache2906 ()
{
    document.getElementById("tables2206").style.display="none"
    document.getElementById("tables2906").style.display="block"
    document.getElementById("Semaine2906").style.backgroundColor="#32383E"
    document.getElementById("Semaine2206").style.backgroundColor="#F2F2F2"
    document.getElementById("Semaine2906").style.color="#F2F2F2"
    document.getElementById("Semaine2206").style.color="black"


    

    
}


moi = ""

function recup () 

{
    moi=01
    alert(moi)
}




