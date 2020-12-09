$(document).ready(function () {
    function zad1(tekst) {
        const result = tekst.length;
        console.info("Liczba liter: " + result + " gdzie " + result + " to liczba liter tekstu.")
    }
    zad1("Dawid");

    var tab = [1,2,3];

    function zad2(tab) {
        var suma2=0;
        for (var i = 0; i < tab.length; i++) {
            suma2 = suma2 + tab[i];
            console.info(tab[i]);
        }
        console.info("Suma tablict to: " + suma2);
    }
    zad2(tab);

    function zad3(tekst) {
        var newtekst
        for (var i = 0; i < tekst.length; i=i+2) {
            tekst = tekst.replace(tekst.charAt(i), tekst.charAt(i).toUpperCase());
        }
        console.info(tekst);
    }
    zad3("Dawid lubi koty");

    function zad4(a, b) {
        var iloczyn;
        if (typeof a == "number" && typeof b == "number") {
            iloczyn = a * b;
            console.info("iloczyn to: " + iloczyn);
        }
        else
            console.info("false");
    }
    zad4(2, "asd")

    function zad5(imie, miesiac) {
        if (miesiac == "Styczen" || miesiac == "styczen" || miesiac == "luty" || miesiac == "Luty" || miesiac == "Grudzien" || miesiac == "grudzien")
            console.info(imie + " jezdzi na sankach");
        else if (miesiac == "Maj" || miesiac == "maj" || miesiac == "marzec" || miesiac == "Marzec" || miesiac == "Kwiecien" || miesiac == "kwiecien")
            console.info(imie + " chodzi po kaluzach");
        else if (miesiac == "Czerwiec" || miesiac == "czerwiec" || miesiac == "lipiec" || miesiac == "Lipiec" || miesiac == "Sierpien" || miesiac == "sierpien")
            console.info(imie + " sie opala");
        else if (miesiac == "Wrzesien" || miesiac == "wrzesien" || miesiac == "Pazdziernik" || miesiac == "pazdziernik" || miesiac == "Listopad" || miesiac == "listopad")
            console.info(imie + " zbiera liscie");
        else
            console.info(imie + " uczy sie JS");
    }
    zad5("Dawid", "styczen");

    function zad6(tekst, znak_rozdzialu) {
        console.info(tekst);
        var tab = tekst.split(znak_rozdzialu);
        var stab = tab.sort();
        var str = stab.join([separator = znak_rozdzialu]);
        console.info(str);
    }
    zad6("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", "|")

    var tabImiona = ["Ania", "Marcin", "Bartek", "Piotr"];

    function zad7_1(tab) {
        var str = tab.join([separator = ","]);
        var strDuze = str.toUpperCase();
        var tabDuzeImiona = strDuze.split(",");
        console.info(tabDuzeImiona);

    }
    function zad7_2(tab) {
        var str = tab.join([separator = ","]);
        for (var i = 3; i < str.length; i = i+3) {
            str = str.replace(str.charAt(i), str.charAt(i).toUpperCase());
        }
        var tabRozneWielkosci = str.split(",");
        console.info(tabRozneWielkosci);
    }
    zad7_1(tabImiona);
    zad7_2(tabImiona);

    function checkFemale(imie) {
        var a = imie.length - 1;
        var b = false;
        if (imie.charAt(a) === "a") {
            console.info("checkFemale(" + imie + ")" + " === true");
            b = true;
        }
        else {
            console.info("checkFemale(" + imie + ")" + " === false");
            b = false;
        }
        return b;
    }
    checkFemale("Dawid")

    const users = [
        "Ania Nowak",
        "Piotr Kowalski",
        "Bartek Kosecki",
        "Natalia Nowak",
        "Weronika Piotrowska",
        "Agata Beatczak",
        "Tomasz Nowak",
        "Mateusz Kowalski",
        "Marcin Kotecki",
        "Betata Lecka",
        "Katarzyna Melecka"
    ]

    function countWomanInTable(tab) {
        var a = 0,b = 0;
        for (var i = 0; i < users.length; i++) {
            a = users[i].indexOf(" ");
            if (checkFemale(users[i].slice(0, a)) == true)
                b++;
        }
        console.info("Ilosc kobiet: "+b);
    }
    countWomanInTable(users);






    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('dblclick', () => {
        console.log('Kliknieto w przycisk dwa razy - addEventListener nr 5!');
    });
    function clickHandler() {
       console.log('Kliknieto raz w przycisk btn4!');
        btn1.removeEventListener('click', clickHandler);
        console.log('Usunieta obsluga klikniecia w btn1!- addEventListener nr 1!');
    }
    btn1.addEventListener('click', clickHandler);

    const p1 = document.getElementById('p1');
    p1.addEventListener('copy', () => {
        console.log('Skopiowano paragraf - addEventListener nr 2!');
    });

    const sele1 = document.getElementById('sele1');
    sele1.addEventListener('change', () => {
        console.log('Zmieniono opcje - addEventListener nr 3!');
    });

    const in1 = document.getElementById('in1');
    in1.addEventListener('input', () => {
        console.log('Wprowadzono tekst - addEventListener nr 4!');
    });
    in1.addEventListener('paste', () => {
        console.log('Wklejono tekst - addEventListener nr 6!');
    });

    const div1 = document.getElementById('div1');
    div1.addEventListener('scroll', () => {
        console.log('Scrolujesz ;) - addEventListener nr 7!');
    });

    const in2 = document.getElementById('in2');
    in2.addEventListener('search', () => {
        console.log('Wykonano wyszukiwanie - addEventListener nr 8!');
    });
    in2.addEventListener('paste', () => {
        console.log('Skopiowano tresc by wyszukac - addEventListener nr 9!');
    });

    const in3 = document.getElementById('in3');
    in3.addEventListener('submit', () => {
        console.log('Formularz zosta³ zatwierdzony - addEventListener nr 10!');
    });

   

});