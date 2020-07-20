rejour12007 = document.getElementById("20072001r")
rejour22007 = document.getElementById("20072002r")
rejour32007 = document.getElementById("20072003r")
rejour42007 = document.getElementById("20072004r")
rejour52007 = document.getElementById("20072005r")
rejour62007 = document.getElementById("20072006r")
rejour72007 = document.getElementById("20072007r")
rsemaine01ubr2007=document.getElementById("ubrsemaine01total")

rejour1d2007 = document.getElementById("20072001deli")
rejour2d2007 = document.getElementById("20072002deli")
rejour3d2007 = document.getElementById("20072003deli")
rejour4d2007 = document.getElementById("20072004deli")
rejour5d2007 = document.getElementById("20072005deli")
rejour6d2007 = document.getElementById("20072006deli")
rejour7d2007 = document.getElementById("20072007deli")
rsemaine01deli2007=document.getElementById("delisemaine01total")



rtotal2007=document.getElementById("200720Restltr")



afficheR1ubr2007= 58.40
afficheR2ubr2007= 0.00
afficheR3ubr2007= 0.00
afficheR4ubr2007= 0.00
afficheR5ubr2007= 0.00
afficheR6ubr2007= 0.00
afficheR7ubr2007= 0.00

afficheR1dev2007= 35.10
afficheR2dev2007= 0.00
afficheR3dev2007= 0.00
afficheR4dev2007= 0.00
afficheR5dev2007= 0.00
afficheR6dev2007= 0.00
afficheR7dev2007= 0.00


afficheDepences012007 = 0
afficheDepences022007 = 0
afficheDepences032007 = 0
afficheDepences042007 = 0
afficheDepences052007 = 0
afficheDepences062007 = 0
afficheDepences072007 = 0


TotalDepences2007 = afficheDepences012007+afficheDepences022007+afficheDepences032007+afficheDepences042007+afficheDepences052007+afficheDepences062007+afficheDepences072007


reslatTotal2007= ''
resulatatUBR2007=''
resulatdeli2007=''




afficheTotalSemaine2007=reslatTotal2007


djour12007 = document.getElementById("20072001d")
djour22007 = document.getElementById("20072002d")
djour32007 = document.getElementById("20072003d")
djour42007 = document.getElementById("20072004d")
djour52007 = document.getElementById("20072005d")
djour62007 = document.getElementById("20072006d")
djour72007 = document.getElementById("20072007d")
dtotal2007=document.getElementById("200720Restltd")




function calculeSemaine01deli2007 ()
{
    resulatdeli2007=afficheR1dev2007+afficheR2dev2007+afficheR3dev2007+afficheR4dev2007+afficheR5dev2007+afficheR6dev2007+afficheR7dev2007
    
}

function calculeSemaine01UBR2007 ()
{
    reslatUBR2007= afficheR1ubr2007+afficheR2ubr2007+afficheR3ubr2007+afficheR4ubr2007+afficheR5ubr2007+afficheR6ubr2007+afficheR7ubr2007

}



function calculeSemaine012007 () 


{

    
    
    
    reslatTotal2007=reslatUBR2007+resulatdeli2007
    depensesetrevenu200720 = resulatdeli2007 + reslatUBR2007 - TotalDepences2007
    

}




calculeSemaine01UBR2007()
calculeSemaine01deli2007 ()
calculeSemaine012007 ()





function afficheSemaine12007 () 

    {

    rejour12007.innerHTML=afficheR1ubr2007
    rejour22007.innerHTML=afficheR2ubr2007
    rejour32007.innerHTML=afficheR3ubr2007
    rejour42007.innerHTML=afficheR4ubr2007
    rejour52007.innerHTML=afficheR5ubr2007
    rejour62007.innerHTML=afficheR6ubr2007
    rejour72007.innerHTML=afficheR7ubr2007


    rejour1d2007.innerHTML=afficheR1dev2007
    rejour2d2007.innerHTML=afficheR2dev2007
    rejour3d2007.innerHTML=afficheR3dev2007
    rejour4d2007.innerHTML=afficheR4dev2007
    rejour5d2007.innerHTML=afficheR5dev2007
    rejour6d2007.innerHTML=afficheR6dev2007
    rejour7d2007.innerHTML=afficheR7dev2007









    djour12007.innerHTML=afficheDepences012007
    djour22007.innerHTML=afficheDepences022007
    djour32007.innerHTML=afficheDepences032007
    djour42007.innerHTML=afficheDepences042007   
    djour52007.innerHTML=afficheDepences052007
    djour62007.innerHTML=afficheDepences062007
    djour72007.innerHTML=afficheDepences072007
    TotalDepences2007.innerHTML=dtotal2007








        rtotal2007.innerHTML=reslatTotal2007
        resulatdeli2007.innerHTML=rsemaine01deli2007
        reslatUBR2007.innerHTML=rsemaine01ubr2007
    

        document.getElementById("dep200720D").innerHTML=TotalDepences2007
      
        document.getElementById("200720Restltd").innerHTML=depensesetrevenu200720
        document.getElementById("delisemaine2007total").innerHTML=resulatdeli2007
        document.getElementById("ubrsemaine2007total").innerHTML=reslatUBR2007

    }




afficheSemaine12007()
