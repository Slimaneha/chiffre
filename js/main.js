






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




rejour12906 = document.getElementById("29062001r")
rejour22906 = document.getElementById("29062002r")
rejour32906 = document.getElementById("29062003r")
rejour42906 = document.getElementById("29062004r")
rejour52906 = document.getElementById("29062005r")
rejour62906 = document.getElementById("29062006r")
rejour72906 = document.getElementById("29062007r")
rsemaine01ubr2906=document.getElementById("ubrsemaine2906total")

rejour1d2906 = document.getElementById("29062001deli")
rejour2d2906 = document.getElementById("29062002deli")
rejour3d2906 = document.getElementById("29062003deli")
rejour4d2906 = document.getElementById("29062004deli")
rejour5d2906 = document.getElementById("29062005deli")
rejour6d2906 = document.getElementById("29062006deli")
rejour7d2906 = document.getElementById("29062007deli")
rsemaine01deli2906=document.getElementById("delisemaine2906total")



rtotal2906=document.getElementById("290620Restltr")



afficheR1ubr2906= 8
afficheR2ubr2906= 0
afficheR3ubr2906= 0
afficheR4ubr2906= 0
afficheR5ubr2906= 0
afficheR6ubr2906= 0
afficheR7ubr2906= 0 

afficheR1dev2906= 8.17
afficheR2dev2906= 0
afficheR3dev2906= 0
afficheR4dev2906= 0
afficheR5dev2906= 0
afficheR6dev2906= 0
afficheR7dev2906= 0 


afficheDepences012906 = 0
afficheDepences022906 = 0
afficheDepences032906 = 0
afficheDepences042906 = 0
afficheDepences052906 = 0
afficheDepences062906 = 0
afficheDepences072906 = 0


TotalDepences2906 = afficheDepences012906+afficheDepences022906+afficheDepences032906+afficheDepences042906+afficheDepences052906+afficheDepences062906+afficheDepences072906


reslatTotal2906= ''
resulatatUBR2906=''
resulatdeli2906=''




afficheTotalSemaine2906=reslatTotal2906


djour12906 = document.getElementById("29062001d")
djour22906 = document.getElementById("29062002d")
djour32906 = document.getElementById("29062003d")
djour42906 = document.getElementById("29062004d")
djour52906 = document.getElementById("29062005d")
djour62906 = document.getElementById("29062006d")
djour72906 = document.getElementById("29062007d")
dtotal2906=document.getElementById("290620Restltd")




function calculeSemaine01deli2906 ()
{
    resulatdeli2906=afficheR1dev2906+afficheR2dev2906+afficheR3dev2906+afficheR4dev2906+afficheR5dev2906+afficheR6dev2906+afficheR7dev2906
    
}

function calculeSemaine01UBR2906 ()
{
    reslatUBR2906= afficheR1ubr2906+afficheR2ubr2906+afficheR3ubr2906+afficheR4ubr2906+afficheR5ubr2906+afficheR6ubr2906+afficheR7ubr2906

}



function calculeSemaine012906 () 


{

    
    
    
    reslatTotal2906=reslatUBR2906+resulatdeli2906
    depensesetrevenu290620 = resulatdeli2906 + reslatUBR2906 - TotalDepences2906
    

}




calculeSemaine01UBR2906()
calculeSemaine01deli2906 ()
calculeSemaine012906 ()





function afficheSemaine12906 () 

    {

    rejour12906.innerHTML=afficheR1ubr2906
    rejour22906.innerHTML=afficheR2ubr2906
    rejour32906.innerHTML=afficheR3ubr2906
    rejour42906.innerHTML=afficheR4ubr2906
    rejour52906.innerHTML=afficheR5ubr2906
    rejour62906.innerHTML=afficheR6ubr2906
    rejour72906.innerHTML=afficheR7ubr2906


    rejour1d2906.innerHTML=afficheR1dev2906
    rejour2d2906.innerHTML=afficheR2dev2906
    rejour3d2906.innerHTML=afficheR3dev2906
    rejour4d2906.innerHTML=afficheR4dev2906
    rejour5d2906.innerHTML=afficheR5dev2906
    rejour6d2906.innerHTML=afficheR6dev2906
    rejour7d2906.innerHTML=afficheR7dev2906









    djour12906.innerHTML=afficheDepences012906
    djour22906.innerHTML=afficheDepences022906
    djour32906.innerHTML=afficheDepences032906
    djour42906.innerHTML=afficheDepences042906   
    djour52906.innerHTML=afficheDepences052906
    djour62906.innerHTML=afficheDepences062906
    djour72906.innerHTML=afficheDepences072906
    TotalDepences2906.innerHTML=dtotal2906








        rtotal2906.innerHTML=reslatTotal2906
        resulatdeli2906.innerHTML=rsemaine01deli2906
        reslatUBR2906.innerHTML=rsemaine01ubr2906
    

        document.getElementById("dep290620D").innerHTML=TotalDepences2906
      
        document.getElementById("290620Restltd").innerHTML=depensesetrevenu290620

     }




afficheSemaine12906()



