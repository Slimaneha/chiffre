rejour10308 = document.getElementById("03082001r")
rejour20308 = document.getElementById("03082002r")
rejour30308 = document.getElementById("03082003r")
rejour40308 = document.getElementById("03082004r")
rejour50308 = document.getElementById("03082005r")
rejour60308 = document.getElementById("03082006r")
rejour70308 = document.getElementById("03082007r")
rsemaine01ubr0308=document.getElementById("ubrsemaine01total")

rejour1d0308 = document.getElementById("03082001deli")
rejour2d0308 = document.getElementById("03082002deli")
rejour3d0308 = document.getElementById("03082003deli")
rejour4d0308 = document.getElementById("03082004deli")
rejour5d0308 = document.getElementById("03082005deli")
rejour6d0308 = document.getElementById("03082006deli")
rejour7d0308 = document.getElementById("03082007deli")
rsemaine01deli0308=document.getElementById("delisemaine01total")



rtotal0308=document.getElementById("030820Restltr")



afficheR1ubr0308= 0.00
afficheR2ubr0308= 0.00
afficheR3ubr0308= 0.00
afficheR4ubr0308= 0.00
afficheR5ubr0308= 0.00
afficheR6ubr0308= 0.00
afficheR7ubr0308= 0.00

afficheR1dev0308= 0.00
afficheR2dev0308= 0.00
afficheR3dev0308= 0.00
afficheR4dev0308= 0.00
afficheR5dev0308= 0.00
afficheR6dev0308= 0
afficheR7dev0308= 0



afficheDepences010308 = 0
afficheDepences020308 = 0
afficheDepences030308 = 0
afficheDepences040308 = 0
afficheDepences050308 = 0
afficheDepences060308 = 0
afficheDepences070308 = 0


TotalDepences0308 = afficheDepences010308+afficheDepences020308+afficheDepences030308+afficheDepences040308+afficheDepences050308+afficheDepences060308+afficheDepences070308


reslatTotal0308= ''
resulatatUBR0308=''
resulatdeli0308=''




afficheTotalSemaine0308=reslatTotal0308


djour10308 = document.getElementById("03082001d")
djour20308 = document.getElementById("03082002d")
djour30308 = document.getElementById("03082003d")
djour40308 = document.getElementById("03082004d")
djour50308 = document.getElementById("03082005d")
djour60308 = document.getElementById("03082006d")
djour70308 = document.getElementById("03082007d")
dtotal0308=document.getElementById("030820Restltd")




function calculeSemaine01deli0308 ()
{
    resulatdeli0308=afficheR1dev0308+afficheR2dev0308+afficheR3dev0308+afficheR4dev0308+afficheR5dev0308+afficheR6dev0308+afficheR7dev0308
    
}

function calculeSemaine01UBR0308 ()
{
    reslatUBR0308= afficheR1ubr0308+afficheR2ubr0308+afficheR3ubr0308+afficheR4ubr0308+afficheR5ubr0308+afficheR6ubr0308+afficheR7ubr0308

}



function calculeSemaine010308 () 


{

    
    
    
    reslatTotal0308=reslatUBR0308+resulatdeli0308
    depensesetrevenu030820 = resulatdeli0308 + reslatUBR0308 - TotalDepences0308
    

}




calculeSemaine01UBR0308()
calculeSemaine01deli0308 ()
calculeSemaine010308 ()





function afficheSemaine10308 () 

    {

    rejour10308.innerHTML=afficheR1ubr0308
    rejour20308.innerHTML=afficheR2ubr0308
    rejour30308.innerHTML=afficheR3ubr0308
    rejour40308.innerHTML=afficheR4ubr0308
    rejour50308.innerHTML=afficheR5ubr0308
    rejour60308.innerHTML=afficheR6ubr0308
    rejour70308.innerHTML=afficheR7ubr0308


    rejour1d0308.innerHTML=afficheR1dev0308
    rejour2d0308.innerHTML=afficheR2dev0308
    rejour3d0308.innerHTML=afficheR3dev0308
    rejour4d0308.innerHTML=afficheR4dev0308
    rejour5d0308.innerHTML=afficheR5dev0308
    rejour6d0308.innerHTML=afficheR6dev0308
    rejour7d0308.innerHTML=afficheR7dev0308









    djour10308.innerHTML=afficheDepences010308
    djour20308.innerHTML=afficheDepences020308
    djour30308.innerHTML=afficheDepences030308
    djour40308.innerHTML=afficheDepences040308   
    djour50308.innerHTML=afficheDepences050308
    djour60308.innerHTML=afficheDepences060308
    djour70308.innerHTML=afficheDepences070308
    TotalDepences0308.innerHTML=dtotal0308








        rtotal0308.innerHTML=reslatTotal0308
        resulatdeli0308.innerHTML=rsemaine01deli0308
        reslatUBR0308.innerHTML=rsemaine01ubr0308
    

        document.getElementById("dep030820D").innerHTML=TotalDepences0308
      
        document.getElementById("030820Restltd").innerHTML=depensesetrevenu030820

     }




afficheSemaine10308()




// SEMAINE DU 03/08/20


rejour11008 = document.getElementById("10082001r")
rejour21008 = document.getElementById("10082002r")
rejour31008 = document.getElementById("10082003r")
rejour41008 = document.getElementById("10082004r")
rejour51008 = document.getElementById("10082005r")
rejour61008 = document.getElementById("10082006r")
rejour71008 = document.getElementById("10082007r")
rsemaine01ubr1008=document.getElementById("ubrsemaine01total")

rejour1d1008 = document.getElementById("10082001deli")
rejour2d1008 = document.getElementById("10082002deli")
rejour3d1008 = document.getElementById("10082003deli")
rejour4d1008 = document.getElementById("10082004deli")
rejour5d1008 = document.getElementById("10082005deli")
rejour6d1008 = document.getElementById("10082006deli")
rejour7d1008 = document.getElementById("10082007deli")
rsemaine01deli1008=document.getElementById("delisemaine01total")



rtotal1008=document.getElementById("100820Restltr")



afficheR1ubr1008= 0
afficheR2ubr1008= 0
afficheR3ubr1008= 0
afficheR4ubr1008= 0
afficheR5ubr1008= 0
afficheR6ubr1008= 0
afficheR7ubr1008= 0

afficheR1dev1008= 0
afficheR2dev1008= 0
afficheR3dev1008= 0
afficheR4dev1008= 0
afficheR5dev1008= 0
afficheR6dev1008= 0
afficheR7dev1008= 0



afficheDepences011008 = 0
afficheDepences021008 = 0
afficheDepences031008 = 0
afficheDepences041008 = 0
afficheDepences051008 = 0
afficheDepences061008 = 0
afficheDepences071008 = 0


TotalDepences1008 = afficheDepences011008+afficheDepences021008+afficheDepences031008+afficheDepences041008+afficheDepences051008+afficheDepences061008+afficheDepences071008


reslatTotal1008= ''
resulatatUBR1008=''
resulatdeli1008=''




afficheTotalSemaine1008=reslatTotal1008


djour11008 = document.getElementById("10082001d")
djour21008 = document.getElementById("10082002d")
djour31008 = document.getElementById("10082003d")
djour41008 = document.getElementById("10082004d")
djour51008 = document.getElementById("10082005d")
djour61008 = document.getElementById("10082006d")
djour71008 = document.getElementById("10082007d")
dtotal1008=document.getElementById("100820Restltd")




function calculeSemaine01deli1008 ()
{
    resulatdeli1008=afficheR1dev1008+afficheR2dev1008+afficheR3dev1008+afficheR4dev1008+afficheR5dev1008+afficheR6dev1008+afficheR7dev1008
    
}

function calculeSemaine01UBR1008 ()
{
    reslatUBR1008= afficheR1ubr1008+afficheR2ubr1008+afficheR3ubr1008+afficheR4ubr1008+afficheR5ubr1008+afficheR6ubr1008+afficheR7ubr1008

}



function calculeSemaine011008 () 


{

    
    
    
    reslatTotal1008=reslatUBR1008+resulatdeli1008
    depensesetrevenu100820 = resulatdeli1008 + reslatUBR1008 - TotalDepences1008
    

}




calculeSemaine01UBR1008()
calculeSemaine01deli1008 ()
calculeSemaine011008 ()





function afficheSemaine11008 () 

    {

    rejour11008.innerHTML=afficheR1ubr1008
    rejour21008.innerHTML=afficheR2ubr1008
    rejour31008.innerHTML=afficheR3ubr1008
    rejour41008.innerHTML=afficheR4ubr1008
    rejour51008.innerHTML=afficheR5ubr1008
    rejour61008.innerHTML=afficheR6ubr1008
    rejour71008.innerHTML=afficheR7ubr1008


    rejour1d1008.innerHTML=afficheR1dev1008
    rejour2d1008.innerHTML=afficheR2dev1008
    rejour3d1008.innerHTML=afficheR3dev1008
    rejour4d1008.innerHTML=afficheR4dev1008
    rejour5d1008.innerHTML=afficheR5dev1008
    rejour6d1008.innerHTML=afficheR6dev1008
    rejour7d1008.innerHTML=afficheR7dev1008









    djour11008.innerHTML=afficheDepences011008
    djour21008.innerHTML=afficheDepences021008
    djour31008.innerHTML=afficheDepences031008
    djour41008.innerHTML=afficheDepences041008   
    djour51008.innerHTML=afficheDepences051008
    djour61008.innerHTML=afficheDepences061008
    djour71008.innerHTML=afficheDepences071008
    TotalDepences1008.innerHTML=dtotal1008








        rtotal1008.innerHTML=reslatTotal1008
        resulatdeli1008.innerHTML=rsemaine01deli1008
        reslatUBR1008.innerHTML=rsemaine01ubr1008
    

        document.getElementById("dep100820D").innerHTML=TotalDepences1008
      
        document.getElementById("100820Restltd").innerHTML=depensesetrevenu100820

     }




afficheSemaine11008()




rejour11708 = document.getElementById("17082001r")
rejour21708 = document.getElementById("17082002r")
rejour31708 = document.getElementById("17082003r")
rejour41708 = document.getElementById("17082004r")
rejour51708 = document.getElementById("17082005r")
rejour61708 = document.getElementById("17082006r")
rejour71708 = document.getElementById("17082007r")
rsemaine01ubr1708=document.getElementById("ubrsemaine01total")

rejour1d1708 = document.getElementById("17082001deli")
rejour2d1708 = document.getElementById("17082002deli")
rejour3d1708 = document.getElementById("17082003deli")
rejour4d1708 = document.getElementById("17082004deli")
rejour5d1708 = document.getElementById("17082005deli")
rejour6d1708 = document.getElementById("17082006deli")
rejour7d1708 = document.getElementById("17082007deli")
rsemaine01deli1708=document.getElementById("delisemaine01total")



rtotal1708=document.getElementById("170820Restltr")



afficheR1ubr1708= 0
afficheR2ubr1708= 0
afficheR3ubr1708= 0
afficheR4ubr1708= 0
afficheR5ubr1708= 0
afficheR6ubr1708= 0
afficheR7ubr1708= 0

afficheR1dev1708= 0
afficheR2dev1708= 0
afficheR3dev1708= 0
afficheR4dev1708= 0
afficheR5dev1708= 0
afficheR6dev1708= 0
afficheR7dev1708= 0



afficheDepences011708 = 0
afficheDepences021708 = 0
afficheDepences031708 = 0
afficheDepences041708 = 0
afficheDepences051708 = 0
afficheDepences061708 = 0
afficheDepences071708 = 0


TotalDepences1708 = afficheDepences011708+afficheDepences021708+afficheDepences031708+afficheDepences041708+afficheDepences051708+afficheDepences061708+afficheDepences071708


reslatTotal1708= ''
resulatatUBR1708=''
resulatdeli1708=''




afficheTotalSemaine1708=reslatTotal1708


djour11708 = document.getElementById("17082001d")
djour21708 = document.getElementById("17082002d")
djour31708 = document.getElementById("17082003d")
djour41708 = document.getElementById("17082004d")
djour51708 = document.getElementById("17082005d")
djour61708 = document.getElementById("17082006d")
djour71708 = document.getElementById("17082007d")
dtotal1708=document.getElementById("170820Restltd")




function calculeSemaine01deli1708 ()
{
    resulatdeli1708=afficheR1dev1708+afficheR2dev1708+afficheR3dev1708+afficheR4dev1708+afficheR5dev1708+afficheR6dev1708+afficheR7dev1708
    
}

function calculeSemaine01UBR1708 ()
{
    reslatUBR1708= afficheR1ubr1708+afficheR2ubr1708+afficheR3ubr1708+afficheR4ubr1708+afficheR5ubr1708+afficheR6ubr1708+afficheR7ubr1708

}



function calculeSemaine011708 () 


{

    
    
    
    reslatTotal1708=reslatUBR1708+resulatdeli1708
    depensesetrevenu170820 = resulatdeli1708 + reslatUBR1708 - TotalDepences1708
    

}




calculeSemaine01UBR1708()
calculeSemaine01deli1708 ()
calculeSemaine011708 ()





function afficheSemaine11708 () 

    {

    rejour11708.innerHTML=afficheR1ubr1708
    rejour21708.innerHTML=afficheR2ubr1708
    rejour31708.innerHTML=afficheR3ubr1708
    rejour41708.innerHTML=afficheR4ubr1708
    rejour51708.innerHTML=afficheR5ubr1708
    rejour61708.innerHTML=afficheR6ubr1708
    rejour71708.innerHTML=afficheR7ubr1708


    rejour1d1708.innerHTML=afficheR1dev1708
    rejour2d1708.innerHTML=afficheR2dev1708
    rejour3d1708.innerHTML=afficheR3dev1708
    rejour4d1708.innerHTML=afficheR4dev1708
    rejour5d1708.innerHTML=afficheR5dev1708
    rejour6d1708.innerHTML=afficheR6dev1708
    rejour7d1708.innerHTML=afficheR7dev1708









    djour11708.innerHTML=afficheDepences011708
    djour21708.innerHTML=afficheDepences021708
    djour31708.innerHTML=afficheDepences031708
    djour41708.innerHTML=afficheDepences041708   
    djour51708.innerHTML=afficheDepences051708
    djour61708.innerHTML=afficheDepences061708
    djour71708.innerHTML=afficheDepences071708
    TotalDepences1708.innerHTML=dtotal1708








        rtotal1708.innerHTML=reslatTotal1708
        resulatdeli1708.innerHTML=rsemaine01deli1708
        reslatUBR1708.innerHTML=rsemaine01ubr1708
    

        document.getElementById("dep170820D").innerHTML=TotalDepences1708
      
        document.getElementById("170820Restltd").innerHTML=depensesetrevenu170820

     }




afficheSemaine11708()



// SEMAINE 24/08





rejour12408 = document.getElementById("24082001r")
rejour22408 = document.getElementById("24082002r")
rejour32408 = document.getElementById("24082003r")
rejour42408 = document.getElementById("24082004r")
rejour52408 = document.getElementById("24082005r")
rejour62408 = document.getElementById("24082006r")
rejour72408 = document.getElementById("24082007r")
rsemaine01ubr2408=document.getElementById("ubrsemaine01total")

rejour1d2408 = document.getElementById("24082001deli")
rejour2d2408 = document.getElementById("24082002deli")
rejour3d2408 = document.getElementById("24082003deli")
rejour4d2408 = document.getElementById("24082004deli")
rejour5d2408 = document.getElementById("24082005deli")
rejour6d2408 = document.getElementById("24082006deli")
rejour7d2408 = document.getElementById("24082007deli")
rsemaine01deli2408=document.getElementById("delisemaine01total")



rtotal2408=document.getElementById("240820Restltr")



afficheR1ubr2408= 0
afficheR2ubr2408= 0
afficheR3ubr2408= 0
afficheR4ubr2408= 0
afficheR5ubr2408= 0
afficheR6ubr2408= 0
afficheR7ubr2408= 0

afficheR1dev2408= 0
afficheR2dev2408= 0
afficheR3dev2408= 0
afficheR4dev2408= 0
afficheR5dev2408= 0
afficheR6dev2408= 0
afficheR7dev2408= 0



afficheDepences012408 = 0
afficheDepences022408 = 0
afficheDepences032408 = 0
afficheDepences042408 = 0
afficheDepences052408 = 0
afficheDepences062408 = 0
afficheDepences072408 = 0


TotalDepences2408 = afficheDepences012408+afficheDepences022408+afficheDepences032408+afficheDepences042408+afficheDepences052408+afficheDepences062408+afficheDepences072408


reslatTotal2408= ''
resulatatUBR2408=''
resulatdeli2408=''




afficheTotalSemaine2408=reslatTotal2408


djour12408 = document.getElementById("24082001d")
djour22408 = document.getElementById("24082002d")
djour32408 = document.getElementById("24082003d")
djour42408 = document.getElementById("24082004d")
djour52408 = document.getElementById("24082005d")
djour62408 = document.getElementById("24082006d")
djour72408 = document.getElementById("24082007d")
dtotal2408=document.getElementById("240820Restltd")




function calculeSemaine01deli2408 ()
{
    resulatdeli2408=afficheR1dev2408+afficheR2dev2408+afficheR3dev2408+afficheR4dev2408+afficheR5dev2408+afficheR6dev2408+afficheR7dev2408
    
}

function calculeSemaine01UBR2408 ()
{
    reslatUBR2408= afficheR1ubr2408+afficheR2ubr2408+afficheR3ubr2408+afficheR4ubr2408+afficheR5ubr2408+afficheR6ubr2408+afficheR7ubr2408

}



function calculeSemaine012408 () 


{

    
    
    
    reslatTotal2408=reslatUBR2408+resulatdeli2408
    depensesetrevenu240820 = resulatdeli2408 + reslatUBR2408 - TotalDepences2408
    

}




calculeSemaine01UBR2408()
calculeSemaine01deli2408 ()
calculeSemaine012408 ()





function afficheSemaine12408 () 

    {

    rejour12408.innerHTML=afficheR1ubr2408
    rejour22408.innerHTML=afficheR2ubr2408
    rejour32408.innerHTML=afficheR3ubr2408
    rejour42408.innerHTML=afficheR4ubr2408
    rejour52408.innerHTML=afficheR5ubr2408
    rejour62408.innerHTML=afficheR6ubr2408
    rejour72408.innerHTML=afficheR7ubr2408


    rejour1d2408.innerHTML=afficheR1dev2408
    rejour2d2408.innerHTML=afficheR2dev2408
    rejour3d2408.innerHTML=afficheR3dev2408
    rejour4d2408.innerHTML=afficheR4dev2408
    rejour5d2408.innerHTML=afficheR5dev2408
    rejour6d2408.innerHTML=afficheR6dev2408
    rejour7d2408.innerHTML=afficheR7dev2408









    djour12408.innerHTML=afficheDepences012408
    djour22408.innerHTML=afficheDepences022408
    djour32408.innerHTML=afficheDepences032408
    djour42408.innerHTML=afficheDepences042408   
    djour52408.innerHTML=afficheDepences052408
    djour62408.innerHTML=afficheDepences062408
    djour72408.innerHTML=afficheDepences072408
    TotalDepences2408.innerHTML=dtotal2408








        rtotal2408.innerHTML=reslatTotal2408
        resulatdeli2408.innerHTML=rsemaine01deli2408
        reslatUBR2408.innerHTML=rsemaine01ubr2408
    

        document.getElementById("dep240820D").innerHTML=TotalDepences2408
      
        document.getElementById("240820Restltd").innerHTML=depensesetrevenu240820

     }




afficheSemaine12408()