






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
afficheR6ubr2906= 20.03
afficheR7ubr2906= 28.56 

afficheR1dev2906= 8.17
afficheR2dev2906= 35.85
afficheR3dev2906= 19.19
afficheR4dev2906= 47.08
afficheR5dev2906= 6.50
afficheR6dev2906= 19.94
afficheR7dev2906= 28.41


afficheDepences012906 = 0
afficheDepences022906 = 15
afficheDepences032906 = 5.61
afficheDepences042906 = 4.60
afficheDepences052906 = 5
afficheDepences062906 = 5
afficheDepences072906 = 100


TotalDepences2906 = afficheDepences012906+afficheDepences022906+afficheDepences032906+afficheDepences042906+afficheDepences052906+afficheDepences062906+afficheDepences072906


reslatTotal2906= ''
resulatatUBR2906=''
resulatdeli2906=''







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



afficheR1ubr0607= 15.56
afficheR2ubr0607= 40.47
afficheR3ubr0607= 5.21
afficheR4ubr0607= 58.62
afficheR5ubr0607= 51.99
afficheR6ubr0607= 24.95
afficheR7ubr0607= 39.78

afficheR1dev0607= 23.97
afficheR2dev0607= 30.80
afficheR3dev0607= 12.54
afficheR4dev0607= 41.10
afficheR5dev0607= 30.40
afficheR6dev0607= 0
afficheR7dev0607= 5.50



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





// Semaine 13/07

rejour11307 = document.getElementById("13072001r")
rejour21307 = document.getElementById("13072002r")
rejour31307 = document.getElementById("13072003r")
rejour41307 = document.getElementById("13072004r")
rejour51307 = document.getElementById("13072005r")
rejour61307 = document.getElementById("13072006r")
rejour71307 = document.getElementById("13072007r")
rsemaine01ubr1307=document.getElementById("ubrsemaine01total")

rejour1d1307 = document.getElementById("13072001deli")
rejour2d1307 = document.getElementById("13072002deli")
rejour3d1307 = document.getElementById("13072003deli")
rejour4d1307 = document.getElementById("13072004deli")
rejour5d1307 = document.getElementById("13072005deli")
rejour6d1307 = document.getElementById("13072006deli")
rejour7d1307 = document.getElementById("13072007deli")
rsemaine01deli1307=document.getElementById("delisemaine01total")



rtotal1307=document.getElementById("130720Restltr")



afficheR1ubr1307= 58.40
afficheR2ubr1307= 53.50
afficheR3ubr1307= 28.65
afficheR4ubr1307= 71.54
afficheR5ubr1307= 84.50
afficheR6ubr1307= 0.00
afficheR7ubr1307= 49.95

afficheR1dev1307= 35.10
afficheR2dev1307= 18.20
afficheR3dev1307= 0.00
afficheR4dev1307= 4.96
afficheR5dev1307= 0.00
afficheR6dev1307= 4.60
afficheR7dev1307= 0.00


afficheDepences011307 = 0
afficheDepences021307 = 0
afficheDepences031307 = 0
afficheDepences041307 = 0
afficheDepences051307 = 0
afficheDepences061307 = 0
afficheDepences071307 = 0


TotalDepences1307 = afficheDepences011307+afficheDepences021307+afficheDepences031307+afficheDepences041307+afficheDepences051307+afficheDepences061307+afficheDepences071307


reslatTotal1307= ''
resulatatUBR1307=''
resulatdeli1307=''




afficheTotalSemaine1307=reslatTotal1307


djour11307 = document.getElementById("13072001d")
djour21307 = document.getElementById("13072002d")
djour31307 = document.getElementById("13072003d")
djour41307 = document.getElementById("13072004d")
djour51307 = document.getElementById("13072005d")
djour61307 = document.getElementById("13072006d")
djour71307 = document.getElementById("13072007d")
dtotal1307=document.getElementById("130720Restltd")




function calculeSemaine01deli1307 ()
{
    resulatdeli1307=afficheR1dev1307+afficheR2dev1307+afficheR3dev1307+afficheR4dev1307+afficheR5dev1307+afficheR6dev1307+afficheR7dev1307
    
}

function calculeSemaine01UBR1307 ()
{
    reslatUBR1307= afficheR1ubr1307+afficheR2ubr1307+afficheR3ubr1307+afficheR4ubr1307+afficheR5ubr1307+afficheR6ubr1307+afficheR7ubr1307

}



function calculeSemaine011307 () 


{

    
    
    
    reslatTotal1307=reslatUBR1307+resulatdeli1307
    depensesetrevenu130720 = resulatdeli1307 + reslatUBR1307 - TotalDepences1307
    

}




calculeSemaine01UBR1307()
calculeSemaine01deli1307 ()
calculeSemaine011307 ()





function afficheSemaine11307 () 

    {

    rejour11307.innerHTML=afficheR1ubr1307
    rejour21307.innerHTML=afficheR2ubr1307
    rejour31307.innerHTML=afficheR3ubr1307
    rejour41307.innerHTML=afficheR4ubr1307
    rejour51307.innerHTML=afficheR5ubr1307
    rejour61307.innerHTML=afficheR6ubr1307
    rejour71307.innerHTML=afficheR7ubr1307


    rejour1d1307.innerHTML=afficheR1dev1307
    rejour2d1307.innerHTML=afficheR2dev1307
    rejour3d1307.innerHTML=afficheR3dev1307
    rejour4d1307.innerHTML=afficheR4dev1307
    rejour5d1307.innerHTML=afficheR5dev1307
    rejour6d1307.innerHTML=afficheR6dev1307
    rejour7d1307.innerHTML=afficheR7dev1307









    djour11307.innerHTML=afficheDepences011307
    djour21307.innerHTML=afficheDepences021307
    djour31307.innerHTML=afficheDepences031307
    djour41307.innerHTML=afficheDepences041307   
    djour51307.innerHTML=afficheDepences051307
    djour61307.innerHTML=afficheDepences061307
    djour71307.innerHTML=afficheDepences071307
    TotalDepences1307.innerHTML=dtotal1307








        rtotal1307.innerHTML=reslatTotal1307
        resulatdeli1307.innerHTML=rsemaine01deli1307
        reslatUBR1307.innerHTML=rsemaine01ubr1307
    

        document.getElementById("dep130720D").innerHTML=TotalDepences1307
      
        document.getElementById("130720Restltd").innerHTML=depensesetrevenu130720
        document.getElementById("delisemaine1307total").innerHTML=resulatdeli1307
        document.getElementById("ubrsemaine1307total").innerHTML=reslatUBR1307

    }




afficheSemaine11307()



// SEMAINE 20/07


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



afficheR1ubr2007= 0.00
afficheR2ubr2007= 0.00
afficheR3ubr2007= 0.00
afficheR4ubr2007= 0.00
afficheR5ubr2007= 0.00
afficheR6ubr2007= 0.00
afficheR7ubr2007= 0.00

afficheR1dev2007= 0.00
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



/// Semaine 27/07


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

jour10607 = document.getElementById("Jour1S0607")
jour20607 = document.getElementById("Jour2S0607")
jour30607 = document.getElementById("Jour3S0607")
jour40607 = document.getElementById("Jour4S0607")
jour50607 = document.getElementById("Jour5S0607")
jour60607 = document.getElementById("Jour6S0607")
jour70607 = document.getElementById("Jour7S0607")

jour11307 = document.getElementById("Jour1S1307")
jour21307 = document.getElementById("Jour2S1307")
jour31307 = document.getElementById("Jour3S1307")
jour41307 = document.getElementById("Jour4S1307")
jour51307 = document.getElementById("Jour5S1307")
jour61307 = document.getElementById("Jour6S1307")
jour71307 = document.getElementById("Jour7S1307")



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

// Semaine 06/07

jour10607.innerHTML=afficheR1dev0607+afficheR1ubr0607
jour20607.innerHTML=afficheR2dev0607+afficheR2ubr0607
jour30607.innerHTML=afficheR3dev0607+afficheR3ubr0607
jour40607.innerHTML=afficheR4dev0607+afficheR4ubr0607
jour50607.innerHTML=afficheR5dev0607+afficheR5ubr0607
jour60607.innerHTML=afficheR6dev0607+afficheR6ubr0607
jour70607.innerHTML=afficheR7dev0607+afficheR7ubr0607

// Semaine 13/07

jour11307.innerHTML=afficheR1dev1307+afficheR1ubr1307
jour21307.innerHTML=afficheR2dev1307+afficheR2ubr1307
jour31307.innerHTML=afficheR3dev1307+afficheR3ubr1307
jour41307.innerHTML=afficheR4dev1307+afficheR4ubr1307
jour51307.innerHTML=afficheR5dev1307+afficheR5ubr1307
jour61307.innerHTML=afficheR6dev1307+afficheR6ubr1307
jour71307.innerHTML=afficheR7dev1307+afficheR7ubr1307





}

calculeJour()


















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