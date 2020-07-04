






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
afficheR6ubr2206= 47.30
afficheR7ubr2206= 7.80

afficheR1dev2206= 4.45
afficheR2dev2206= 28.60
afficheR3dev2206= 31.66
afficheR4dev2206= 10.89
afficheR5dev2206= 10.89
afficheR6dev2206= 25.74
afficheR7dev2206= 4 


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
        document.getElementById("delisemaine01total").innerHTML=resulatdeli2206
        document.getElementById("ubrsemaine01total").innerHTML=reslatUBR2206

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
afficheR2ubr2906= 63.47
afficheR3ubr2906= 42.59
afficheR4ubr2906= 55.98
afficheR5ubr2906= 37.08
afficheR6ubr2906= 0
afficheR7ubr2906= 0 

afficheR1dev2906= 8.17
afficheR2dev2906= 35.85
afficheR3dev2906= 19.19
afficheR4dev2906= 47.08
afficheR5dev2906= 6.50
afficheR6dev2906= 0
afficheR7dev2906= 0 


afficheDepences012906 = 0
afficheDepences022906 = 15
afficheDepences032906 = 5.61
afficheDepences042906 = 4.60
afficheDepences052906 = 5
afficheDepences062906 = 0
afficheDepences072906 = 0


TotalDepences2906 = afficheDepences012906+afficheDepences022906+afficheDepences032906+afficheDepences042906+afficheDepences052906+afficheDepences062906+afficheDepences072906


reslatTotal2906= ''
resulatatUBR2906=''
resulatdeli2906=''



// Resulat part jour 

jour12206 = document.getElementById("Jour1S2206")
jour22206 = document.getElementById("Jour2S2206")
jour32206 = document.getElementById("Jour3S2206")
jour42206 = document.getElementById("Jour4S2206")
jour52206 = document.getElementById("Jour5S2206")
jour62206 = document.getElementById("Jour6S2206")
jour72206 = document.getElementById("Jour7S2206")

jour12906 = document.getElementById("Jour1S2906")
jour22906 = document.getElementById("Jour2S2906")
jour32906 = document.getElementById("Jour3S2906")
jour42906 = document.getElementById("Jour4S2906")
jour52906 = document.getElementById("Jour5S2906")
jour62906 = document.getElementById("Jour6S2906")
jour72906 = document.getElementById("Jour7S2906")







function calculeJour () 
{


    // Semaine 22/06
jour12206.innerHTML=afficheR1dev2206+afficheR1ubr2206
jour22206.innerHTML=afficheR2dev2206+afficheR2ubr2206
jour32206.innerHTML=afficheR3dev2206+afficheR3ubr2206
jour42206.innerHTML=afficheR4dev2206+afficheR4ubr2206
jour52206.innerHTML=afficheR5dev2206+afficheR5ubr2206
jour62206.innerHTML=afficheR6dev2206+afficheR6ubr2206
jour72206.innerHTML=afficheR7dev2206+afficheR7ubr2206

    // Semaine 29/06
jour12906.innerHTML=afficheR1dev2906+afficheR1ubr2906
jour22906.innerHTML=afficheR2dev2906+afficheR2ubr2906
jour32906.innerHTML=afficheR3dev2906+afficheR3ubr2906
jour42906.innerHTML=afficheR4dev2906+afficheR4ubr2906
jour52906.innerHTML=afficheR5dev2906+afficheR5ubr2906
jour62906.innerHTML=afficheR6dev2906+afficheR6ubr2906
jour72906.innerHTML=afficheR7dev2906+afficheR7ubr2906








}

calculeJour()

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
        document.getElementById("delisemaine2906total").innerHTML=resulatdeli2206
        document.getElementById("ubrsemaine2906total").innerHTML=reslatUBR2906




     }




afficheSemaine12906()









// Semaine 06/07/20 


rejour10607 = document.getElementById("06072001r")
rejour20607 = document.getElementById("06072002r")
rejour30607 = document.getElementById("06072003r")
rejour40607 = document.getElementById("06072004r")
rejour50607 = document.getElementById("06072005r")
rejour60607 = document.getElementById("06072006r")
rejour70607 = document.getElementById("06072007r")
rsemaine01ubr0607=document.getElementById("ubrsemaine01total")

rejour1d0607 = document.getElementById("06072001deli")
rejour2d0607 = document.getElementById("06072002deli")
rejour3d0607 = document.getElementById("06072003deli")
rejour4d0607 = document.getElementById("06072004deli")
rejour5d0607 = document.getElementById("06072005deli")
rejour6d0607 = document.getElementById("06072006deli")
rejour7d0607 = document.getElementById("06072007deli")
rsemaine01deli0607=document.getElementById("delisemaine01total")



rtotal0607=document.getElementById("060720Restltr")



afficheR1ubr0607= 0 
afficheR2ubr0607= 0
afficheR3ubr0607= 0
afficheR4ubr0607= 0
afficheR5ubr0607= 0
afficheR6ubr0607= 0
afficheR7ubr0607= 0 

afficheR1dev0607= 0
afficheR2dev0607= 0
afficheR3dev0607= 0
afficheR4dev0607= 0
afficheR5dev0607= 0
afficheR6dev0607= 0
afficheR7dev0607= 0 


afficheDepences010607 = 0
afficheDepences020607 = 0
afficheDepences030607 = 0
afficheDepences040607 = 0
afficheDepences050607 = 0
afficheDepences060607 = 0
afficheDepences070607 = 0


TotalDepences0607 = afficheDepences010607+afficheDepences020607+afficheDepences030607+afficheDepences040607+afficheDepences050607+afficheDepences060607+afficheDepences070607


reslatTotal0607= ''
resulatatUBR0607=''
resulatdeli0607=''




afficheTotalSemaine0607=reslatTotal0607


djour10607 = document.getElementById("06072001d")
djour20607 = document.getElementById("06072002d")
djour30607 = document.getElementById("06072003d")
djour40607 = document.getElementById("06072004d")
djour50607 = document.getElementById("06072005d")
djour60607 = document.getElementById("06072006d")
djour70607 = document.getElementById("06072007d")
dtotal0607=document.getElementById("060720Restltd")




function calculeSemaine01deli0607 ()
{
    resulatdeli0607=afficheR1dev0607+afficheR2dev0607+afficheR3dev0607+afficheR4dev0607+afficheR5dev0607+afficheR6dev0607+afficheR7dev0607
    
}

function calculeSemaine01UBR0607 ()
{
    reslatUBR0607= afficheR1ubr0607+afficheR2ubr0607+afficheR3ubr0607+afficheR4ubr0607+afficheR5ubr0607+afficheR6ubr0607+afficheR7ubr0607

}



function calculeSemaine010607 () 


{

    
    
    
    reslatTotal0607=reslatUBR0607+resulatdeli0607
    depensesetrevenu060720 = resulatdeli0607 + reslatUBR0607 - TotalDepences0607
    

}




calculeSemaine01UBR0607()
calculeSemaine01deli0607 ()
calculeSemaine010607 ()





function afficheSemaine10607 () 

    {

    rejour10607.innerHTML=afficheR1ubr0607
    rejour20607.innerHTML=afficheR2ubr0607
    rejour30607.innerHTML=afficheR3ubr0607
    rejour40607.innerHTML=afficheR4ubr0607
    rejour50607.innerHTML=afficheR5ubr0607
    rejour60607.innerHTML=afficheR6ubr0607
    rejour70607.innerHTML=afficheR7ubr0607


    rejour1d0607.innerHTML=afficheR1dev0607
    rejour2d0607.innerHTML=afficheR2dev0607
    rejour3d0607.innerHTML=afficheR3dev0607
    rejour4d0607.innerHTML=afficheR4dev0607
    rejour5d0607.innerHTML=afficheR5dev0607
    rejour6d0607.innerHTML=afficheR6dev0607
    rejour7d0607.innerHTML=afficheR7dev0607









    djour10607.innerHTML=afficheDepences010607
    djour20607.innerHTML=afficheDepences020607
    djour30607.innerHTML=afficheDepences030607
    djour40607.innerHTML=afficheDepences040607   
    djour50607.innerHTML=afficheDepences050607
    djour60607.innerHTML=afficheDepences060607
    djour70607.innerHTML=afficheDepences070607
    TotalDepences0607.innerHTML=dtotal0607








        rtotal0607.innerHTML=reslatTotal0607
        resulatdeli0607.innerHTML=rsemaine01deli0607
        reslatUBR0607.innerHTML=rsemaine01ubr0607
    

        document.getElementById("dep060720D").innerHTML=TotalDepences0607
      
        document.getElementById("060720Restltd").innerHTML=depensesetrevenu060720

     }




afficheSemaine10607()







function topSemaine ()
{
    if (reslatTotal2206>reslatTotal2906) 
    {
        document.getElementById("top").innerHTML=reslatTotal2206
    }

    else if (rtotal2906>rtotal2206) 
    {
        document.getElementById("top").innerHTML=reslatTotal2906
    }
}


topSemaine () 