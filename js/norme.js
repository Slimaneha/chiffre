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
    document.getElementById("tables0607").style.display="none"
    document.getElementById("tables1307").style.display="none"


   




    
}

function cachecache2906 ()
{
    document.getElementById("tables2206").style.display="none"
    document.getElementById("tables2906").style.display="block"
    document.getElementById("tables0607").style.display="none"
    document.getElementById("tables1307").style.display="none"




    

    
}

function cachecache0607 ()
{
    document.getElementById("tables0607").style.display="block"
    document.getElementById("tables2906").style.display="none"
    document.getElementById("tables1307").style.display="none"



    

    
}

function cachecache1307 ()
{
    document.getElementById("tables0607").style.display="none"
    document.getElementById("tables2906").style.display="none"
    document.getElementById("tables1307").style.display="block"



    

    
}


moiP = document.getElementById("moiPrincipal")
sejuin = document.getElementById("semainejuin")
sejuillet = document.getElementById("semaineJuillet")


moi = 0



function recup01 () 

{
    moiP.style.display="none"
    
}

function recup02 () 

{
    moiP.style.display="none"
    
}

function recup03 () 

{
    moiP.style.display="none"
    
}

function recup04 () 

{
    moiP.style.display="none"
    
}
function recup05 () 

{
    moiP.style.display="none"
    
}


function recup06 () 

{
    moiP.style.display="none"
    sejuin.style.display="block"
    
}

function recup07 () 

{
    moiP.style.display="none"
    sejuillet.style.display="block"
    


    
    
}

function recup08 () 

{
    moiP.style.display="none"
    
}

function recup09 () 

{
    moiP.style.display="none"
    
}

function recup10 () 

{
    moiP.style.display="none"
    
}

function recup11 () 

{
    moiP.style.display="none"
    
}

function recup12 () 

{
    moiP.style.display="none"
    
}










function back ()
{
        moiP.style.display="flex"
        sejuillet.style.display="none"
        sejuin.style.display="none"

        document.getElementById("tables2906").style.display="none"
        document.getElementById("tables2206").style.display="none"
        document.getElementById("tables0607").style.display="none"
        document.getElementById("tables1307").style.display="none"




}











// compart semaine 



function compartSemaine () 
     
{
       if ( reslatTotal2206>reslatTotal2906) 
       {
           document.getElementById("220620Restltr").style.backgroundColor="#04A70B"
           document.getElementById("290620Restltd").style.backgroundColor="#ED7F10"

       }

       else 
       {
           document.getElementById("290620Restltr").style.backgroundColor="#ED7F10"
           document.getElementById("220620Restltd").style.backgroundColor="#ED7F10"

       }

       
}

       

compartSemaine ()
 