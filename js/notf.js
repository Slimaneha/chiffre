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


