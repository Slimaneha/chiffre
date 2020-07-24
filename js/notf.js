rejour12707 = document.getElementById("27072001r")
rejour22707 = document.getElementById("27072002r")
rejour32707 = document.getElementById("27072003r")
rejour42707 = document.getElementById("27072004r")
rejour52707 = document.getElementById("27072005r")
rejour62707 = document.getElementById("27072006r")
rejour72707 = document.getElementById("27072707r")
rsemaine01ubr2707=document.getElementById("ubrsemaine01total")

rejour1d2707 = document.getElementById("27072001deli")
rejour2d2707 = document.getElementById("27072002deli")
rejour3d2707 = document.getElementById("27072003deli")
rejour4d2707 = document.getElementById("27072004deli")
rejour5d2707 = document.getElementById("27072005deli")
rejour6d2707 = document.getElementById("27072006deli")
rejour7d2707 = document.getElementById("27072707deli")
rsemaine01deli2707=document.getElementById("delisemaine01total")



rtotal2707=document.getElementById("270720Restltr")



afficheR1ubr2707= 0.00
afficheR2ubr2707= 0.00
afficheR3ubr2707= 0.00
afficheR4ubr2707= 0.00
afficheR5ubr2707= 0.00
afficheR6ubr2707= 0.00
afficheR7ubr2707= 0.00

afficheR1dev2707= 0.00
afficheR2dev2707= 0.00
afficheR3dev2707= 0.00
afficheR4dev2707= 0.00
afficheR5dev2707= 0.00
afficheR6dev2707= 0.00
afficheR7dev2707= 0.00


afficheDepences012707 = 0
afficheDepences022707 = 0
afficheDepences032707 = 0
afficheDepences042707 = 0
afficheDepences052707 = 0
afficheDepences062707 = 0
afficheDepences072707 = 0


TotalDepences2707 = afficheDepences012707+afficheDepences022707+afficheDepences032707+afficheDepences042707+afficheDepences052707+afficheDepences062707+afficheDepences072707


reslatTotal2707= ''
resulatatUBR2707=''
resulatdeli2707=''




afficheTotalSemaine2707=reslatTotal2707


djour12707 = document.getElementById("27072001d")
djour22707 = document.getElementById("27072002d")
djour32707 = document.getElementById("27072003d")
djour42707 = document.getElementById("27072004d")
djour52707 = document.getElementById("27072005d")
djour62707 = document.getElementById("27072006d")
djour72707 = document.getElementById("27072707d")
dtotal2707=document.getElementById("270720Restltd")




function calculeSemaine01deli2707 ()
{
    resulatdeli2707=afficheR1dev2707+afficheR2dev2707+afficheR3dev2707+afficheR4dev2707+afficheR5dev2707+afficheR6dev2707+afficheR7dev2707
    
}

function calculeSemaine01UBR2707 ()
{
    reslatUBR2707= afficheR1ubr2707+afficheR2ubr2707+afficheR3ubr2707+afficheR4ubr2707+afficheR5ubr2707+afficheR6ubr2707+afficheR7ubr2707

}



function calculeSemaine012707 () 


{

    
    
    
    reslatTotal2707=reslatUBR2707+resulatdeli2707
    depensesetrevenu270720 = resulatdeli2707 + reslatUBR2707 - TotalDepences2707
    

}




calculeSemaine01UBR2707()
calculeSemaine01deli2707 ()
calculeSemaine012707 ()





function afficheSemaine12707 () 

    {

    rejour12707.innerHTML=afficheR1ubr2707
    rejour22707.innerHTML=afficheR2ubr2707
    rejour32707.innerHTML=afficheR3ubr2707
    rejour42707.innerHTML=afficheR4ubr2707
    rejour52707.innerHTML=afficheR5ubr2707
    rejour62707.innerHTML=afficheR6ubr2707
    rejour72707.innerHTML=afficheR7ubr2707


    rejour1d2707.innerHTML=afficheR1dev2707
    rejour2d2707.innerHTML=afficheR2dev2707
    rejour3d2707.innerHTML=afficheR3dev2707
    rejour4d2707.innerHTML=afficheR4dev2707
    rejour5d2707.innerHTML=afficheR5dev2707
    rejour6d2707.innerHTML=afficheR6dev2707
    rejour7d2707.innerHTML=afficheR7dev2707









    djour12707.innerHTML=afficheDepences012707
    djour22707.innerHTML=afficheDepences022707
    djour32707.innerHTML=afficheDepences032707
    djour42707.innerHTML=afficheDepences042707   
    djour52707.innerHTML=afficheDepences052707
    djour62707.innerHTML=afficheDepences062707
    djour72707.innerHTML=afficheDepences072707
    TotalDepences2707.innerHTML=dtotal2707








        rtotal2707.innerHTML=reslatTotal2707
        resulatdeli2707.innerHTML=rsemaine01deli2707
        reslatUBR2707.innerHTML=rsemaine01ubr2707
    

        document.getElementById("dep270720D").innerHTML=TotalDepences2707
      
        document.getElementById("270720Restltd").innerHTML=depensesetrevenu270720
        document.getElementById("delisemaine2707total").innerHTML=resulatdeli2707
        document.getElementById("ubrsemaine2707total").innerHTML=reslatUBR2707

    }




afficheSemaine12707()
