






// Semaine 22/06/2020


rejour1 = document.getElementById("22062001r")
rejour2 = document.getElementById("22062002r")
rejour3 = document.getElementById("22062003r")
rejour4 = document.getElementById("22062004r")
rejour5 = document.getElementById("22062005r")
rejour6 = document.getElementById("22062006r")
rejour7 = document.getElementById("22062007r")
rsemaine01ubr=document.getElementById("ubrsemaine01total")

rejour1d = document.getElementById("22062001deli")
rejour2d = document.getElementById("22062002deli")
rejour3d = document.getElementById("22062003deli")
rejour4d = document.getElementById("22062004deli")
rejour5d = document.getElementById("22062005deli")
rejour6d = document.getElementById("22062006deli")
rejour7d = document.getElementById("22062007deli")
rsemaine01deli=document.getElementById("delisemaine01total")



rtotal2206=document.getElementById("220620Restltr")



afficheR1ubr= 25.45 
afficheR2ubr= 51.31
afficheR3ubr= 85
afficheR4ubr= 83.41
afficheR5ubr= 39.12
afficheR6ubr= 47.32
afficheR7ubr= 0 

afficheR1dev= 4.45
afficheR2dev= 28.60
afficheR3dev= 31.66
afficheR4dev= 10.89
afficheR5dev= 10.89
afficheR6dev= 25.74
afficheR7dev= 0 


afficheDepences01 = 0
afficheDepences02 = 5
afficheDepences03 = 11.13
afficheDepences04 = 20
afficheDepences05 = 5
afficheDepences06 = 5
afficheDepences07 = 0


TotalDepences = afficheDepences01+afficheDepences02+afficheDepences03+afficheDepences04+afficheDepences05+afficheDepences06+afficheDepences07


reslatTotal= ''
resulatatUBR=''
resulatdeli=''




afficheTotalSemaine2206=reslatTotal


djour1 = document.getElementById("22062001d")
djour2 = document.getElementById("22062002d")
djour3 = document.getElementById("22062003d")
djour4 = document.getElementById("22062004d")
djour5 = document.getElementById("22062005d")
djour6 = document.getElementById("22062006d")
djour7 = document.getElementById("22062007d")
dtotal2206=document.getElementById("220620Restltd")




function calculeSemaine01deli ()
{
    resulatdeli=afficheR1dev+afficheR2dev+afficheR3dev+afficheR4dev+afficheR5dev+afficheR6dev+afficheR7dev
    
}

function calculeSemaine01UBR ()
{
    reslatUBR= afficheR1ubr+afficheR2ubr+afficheR3ubr+afficheR4ubr+afficheR5ubr+afficheR6ubr+afficheR7ubr

}



function calculeSemaine01 () 


{

    
    
    
    reslatTotal=reslatUBR+resulatdeli
    depensesetrevenu220620 = resulatdeli + reslatUBR - TotalDepences
    

}




calculeSemaine01UBR()
calculeSemaine01deli ()
calculeSemaine01 ()





function afficheSemaine1 () 

    {

    rejour1.innerHTML=afficheR1ubr
    rejour2.innerHTML=afficheR2ubr
    rejour3.innerHTML=afficheR3ubr
    rejour4.innerHTML=afficheR4ubr
    rejour5.innerHTML=afficheR5ubr
    rejour6.innerHTML=afficheR6ubr
    rejour7.innerHTML=afficheR7ubr


    rejour1d.innerHTML=afficheR1dev
    rejour2d.innerHTML=afficheR2dev
    rejour3d.innerHTML=afficheR3dev
    rejour4d.innerHTML=afficheR4dev
    rejour5d.innerHTML=afficheR5dev
    rejour6d.innerHTML=afficheR6dev
    rejour7d.innerHTML=afficheR7dev









    djour1.innerHTML=afficheDepences01
    djour2.innerHTML=afficheDepences02
    djour3.innerHTML=afficheDepences03
    djour4.innerHTML=afficheDepences04   
    djour5.innerHTML=afficheDepences05
    djour6.innerHTML=afficheDepences06
    djour7.innerHTML=afficheDepences07
    TotalDepences.innerHTML=dtotal2206








        rtotal2206.innerHTML=reslatTotal
        resulatdeli.innerHTML=rsemaine01deli
        reslatUBR.innerHTML=rsemaine01ubr
    

        document.getElementById("dep220620D").innerHTML=TotalDepences
      
        document.getElementById("220620Restltd").innerHTML=depensesetrevenu220620

     }




afficheSemaine1()





// Semaine 








// Tout les revenu additioner depuis le 22/06/2020

affichetotalRevenu = document.getElementById("afficheUn")
totalActivite = reslatTotal


function TotalTouteActivite () 
{



affichetotalRevenu.innerHTML=totalActivite



}
















function cachecache ()
{
    document.getElementById("tables2206").style.display="block"
    
}






///   Semaine du 29/06/20





