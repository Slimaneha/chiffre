























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

jour12007 = document.getElementById("Jour1S2007")
jour22007 = document.getElementById("Jour2S2007")
jour32007 = document.getElementById("Jour3S2007")
jour42007 = document.getElementById("Jour4S2007")
jour52007 = document.getElementById("Jour5S2007")
jour62007 = document.getElementById("Jour6S2007")
jour72007 = document.getElementById("Jour7S2007")



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


jour12007.innerHTML=afficheR1dev2007+afficheR1ubr2007
jour22007.innerHTML=afficheR2dev2007+afficheR2ubr2007
jour32007.innerHTML=afficheR3dev2007+afficheR3ubr2007
jour42007.innerHTML=afficheR4dev2007+afficheR4ubr2007
jour52007.innerHTML=afficheR5dev2007+afficheR5ubr2007
jour62007.innerHTML=afficheR6dev2007+afficheR6ubr2007
jour72007.innerHTML=afficheR7dev2007+afficheR7ubr2007




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