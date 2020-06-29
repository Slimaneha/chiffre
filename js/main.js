






// Semaine 22/06/2020


rejour12206 = document.getElementById("22062001r")
rejour22206 = document.getElementById("22062002r")
rejour32206 = document.getElementById("22062003r")
rejour42206 = document.getElementById("22062004r")
rejour52206 = document.getElementById("22062005r")
rejour62206 = document.getElementById("22062006r")
rejour72206 = document.getElementById("22062007r")
rsemaine01ubr2206=document.getElementById("ubrsemaine01total")

rejour1d2206 = document.getElementById("22062001deli")
rejour2d2206 = document.getElementById("22062002deli")
rejour3d2206 = document.getElementById("22062003deli")
rejour4d2206 = document.getElementById("22062004deli")
rejour5d2206 = document.getElementById("22062005deli")
rejour6d2206 = document.getElementById("22062006deli")
rejour7d2206 = document.getElementById("22062007deli")
rsemaine01deli2206=document.getElementById("delisemaine01total")



rtotal2206=document.getElementById("220620Restltr")



afficheR1ubr2206= 25.45 
afficheR2ubr2206= 51.31
afficheR3ubr2206= 85
afficheR4ubr2206= 83.41
afficheR5ubr2206= 39.12
afficheR6ubr2206= 47.32
afficheR7ubr2206= 0 

afficheR1dev2206= 4.45
afficheR2dev2206= 28.60
afficheR3dev2206= 31.66
afficheR4dev2206= 10.89
afficheR5dev2206= 10.89
afficheR6dev2206= 25.74
afficheR7dev2206= 0 


afficheDepences012206 = 0
afficheDepences022206 = 5
afficheDepences032206 = 11.13
afficheDepences042206 = 20
afficheDepences052206 = 5
afficheDepences062206 = 5
afficheDepences072206 = 5


TotalDepences2206 = afficheDepences012206+afficheDepences022206+afficheDepences032206+afficheDepences042206+afficheDepences052206+afficheDepences062206+afficheDepences072206


reslatTotal2206= ''
resulatatUBR2206=''
resulatdeli2206=''




afficheTotalSemaine2206=reslatTotal2206


djour12206 = document.getElementById("22062001d")
djour22206 = document.getElementById("22062002d")
djour32206 = document.getElementById("22062003d")
djour42206 = document.getElementById("22062004d")
djour52206 = document.getElementById("22062005d")
djour62206 = document.getElementById("22062006d")
djour72206 = document.getElementById("22062007d")
dtotal2206=document.getElementById("220620Restltd")




function calculeSemaine01deli2206 ()
{
    resulatdeli2206=afficheR1dev2206+afficheR2dev2206+afficheR3dev2206+afficheR4dev2206+afficheR5dev2206+afficheR6dev2206+afficheR7dev2206
    
}

function calculeSemaine01UBR2206 ()
{
    reslatUBR2206= afficheR1ubr2206+afficheR2ubr2206+afficheR3ubr2206+afficheR4ubr2206+afficheR5ubr2206+afficheR6ubr2206+afficheR7ubr2206

}



function calculeSemaine012206 () 


{

    
    
    
    reslatTotal2206=reslatUBR2206+resulatdeli2206
    depensesetrevenu220620 = resulatdeli2206 + reslatUBR2206 - TotalDepences2206
    

}




calculeSemaine01UBR2206()
calculeSemaine01deli2206 ()
calculeSemaine012206 ()





function afficheSemaine12206 () 

    {

    rejour12206.innerHTML=afficheR1ubr2206
    rejour22206.innerHTML=afficheR2ubr2206
    rejour32206.innerHTML=afficheR3ubr2206
    rejour42206.innerHTML=afficheR4ubr2206
    rejour52206.innerHTML=afficheR5ubr2206
    rejour62206.innerHTML=afficheR6ubr2206
    rejour72206.innerHTML=afficheR7ubr2206


    rejour1d2206.innerHTML=afficheR1dev2206
    rejour2d2206.innerHTML=afficheR2dev2206
    rejour3d2206.innerHTML=afficheR3dev2206
    rejour4d2206.innerHTML=afficheR4dev2206
    rejour5d2206.innerHTML=afficheR5dev2206
    rejour6d2206.innerHTML=afficheR6dev2206
    rejour7d2206.innerHTML=afficheR7dev2206









    djour12206.innerHTML=afficheDepences012206
    djour22206.innerHTML=afficheDepences022206
    djour32206.innerHTML=afficheDepences032206
    djour42206.innerHTML=afficheDepences042206   
    djour52206.innerHTML=afficheDepences052206
    djour62206.innerHTML=afficheDepences062206
    djour72206.innerHTML=afficheDepences072206
    TotalDepences2206.innerHTML=dtotal2206








        rtotal2206.innerHTML=reslatTotal2206
        resulatdeli2206.innerHTML=rsemaine01deli2206
        reslatUBR2206.innerHTML=rsemaine01ubr2206
    

        document.getElementById("dep220620D").innerHTML=TotalDepences2206
      
        document.getElementById("220620Restltd").innerHTML=depensesetrevenu220620

     }




afficheSemaine12206()







// Semaine 








// Tout les revenu additioner depuis le 22/06/2020

affichetotalRevenu = document.getElementById("afficheUn")
totalActivite = reslatTotal2206


function TotalTouteActivite () 
{



affichetotalRevenu.innerHTML=totalActivite



}






















///   Semaine du 29/06/20





