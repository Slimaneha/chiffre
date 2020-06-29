rejour12906 = document.getElementById("29062001r")
rejour22906 = document.getElementById("29062002r")
rejour32906 = document.getElementById("29062003r")
rejour42906 = document.getElementById("29062004r")
rejour52906 = document.getElementById("29062005r")
rejour62906 = document.getElementById("29062006r")
rejour72906 = document.getElementById("29062007r")
rsemaine01ubr2906=document.getElementById("ubrsemaine01total")

rejour1d2906 = document.getElementById("29062001deli")
rejour2d2906 = document.getElementById("29062002deli")
rejour3d2906 = document.getElementById("29062003deli")
rejour4d2906 = document.getElementById("29062004deli")
rejour5d2906 = document.getElementById("29062005deli")
rejour6d2906 = document.getElementById("29062006deli")
rejour7d2906 = document.getElementById("29062007deli")
rsemaine01deli2906=document.getElementById("delisemaine01total")



rtotal2906=document.getElementById("290620Restltr")



afficheR1ubr2906= 0 
afficheR2ubr2906= 0
afficheR3ubr2906= 0
afficheR4ubr2906= 0
afficheR5ubr2906= 0
afficheR6ubr2906= 0
afficheR7ubr2906= 0 

afficheR1dev2906= 0
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


