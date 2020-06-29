var Janvier = document.getElementById("janvier")
    var fevrier = document.getElementById("fevrier")
    var mars = document.getElementById("mars")
    var avril = document.getElementById("avril")
    var mai = document.getElementById("mai")
    var juin = document.getElementById("juin")
    var juillet = document.getElementById("Juillet")
    var aout = document.getElementById("Aout")
    var septembre = document.getElementById("Septembre")
    var octobre = document.getElementById("Octobre")
    var novembre = document.getElementById("Novembre")
    var decembre = document.getElementById("Décembre")
 





    function affichemoi   ()
    
    {
            Janvier.innerHTML="janvier"
            
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


