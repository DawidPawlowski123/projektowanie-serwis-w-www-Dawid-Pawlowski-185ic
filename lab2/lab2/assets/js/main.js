$(document).ready(function () {
    "use strict";
    $("#btn1").click(function () {
        $("#sp1").attr("class", "badge badge-pill badge-secondary");
        $("#sp2").attr("class", "badge badge-pill badge-success");
        $("#sp3").attr("class", "badge badge-pill badge-danger");
        $("#sp4").attr("class", "badge badge-pill badge-warning");
        $("#sp5").attr("class", "badge badge-pill badge-info");
        $("#sp6").attr("class", "badge badge-pill badge-light");
        $("#sp7").attr("class", "badge badge-pill badge-dark");
        $("#sp8").attr("class", "badge badge-pill badge-primary");
    });
    $("#btn2").click(function () {
        $("#sp1").attr("class", "badge badge-pill badge-primary");
        $("#sp2").attr("class", "badge badge-pill badge-secondary");
        $("#sp3").attr("class", "badge badge-pill badge-success");
        $("#sp4").attr("class", "badge badge-pill badge-danger");
        $("#sp5").attr("class", "badge badge-pill badge-warning");
        $("#sp6").attr("class", "badge badge-pill badge-info");
        $("#sp7").attr("class", "badge badge-pill badge-light");
        $("#sp8").attr("class", "badge badge-pill badge-dark");
    });
    $("#btn3").click(function () {
        $("#div1").text("Gratulacje odkryles ukryta wiadomosc!");
    });
    $("#btn4").click(function () {
        $("#div2").text("Gratulacje zmieniles kolor!");
        $("#div2").attr("class", "p-3 mb-2 bg-dark text-white");
    });
    $("#a1").click(function () {
        $("#div4").append("Kontakt: Nr telefonu 123123123 email nieznany@gmail.com </br>")
    });
    $("#a2").click(function () {
        $("#div4").append("Narazie brak dodatkowych informacji pracujemy nad tym :) </br>")
    });
    $("#a3").click(function () {
        $("#div4").append("Nic dodac nic ujac </br>")
    });
    $("#btn6").click(function () {
        $("#divm").remove();
    });
    $("#btn7").click(function () {
        $("#div4").empty();
    });
    $("#btn5").click(function () {
        alert("Value: " + $("#p1").val());
    });
    $("#btn8").click(function () {
        $("#p2").show();
    });
    $("#btn9").click(function () {
        $("#p2").hide();
    });
    $("#btn10").click(function () {
        $("#btn11").fadeIn();
        $("#div6").attr("class", "p-3 mb-2 bg-info text-white");
       
    });
    $("#btn11").click(function () {
        $("#div6").fadeIn();
        $("#div6").append(" | Oto kontener! | ")
        $("#btn12").fadeIn("slow");
    });
    $("#btn12").click(function () {
        $("#div6").attr("class", "p-3 mb-2 bg-dark text-white");
        $("#div6").append(" | Zmieniles jego kolor | ")
        $("#btn13").fadeIn("slow");
    });
    $("#btn13").click(function () {
        $("#div6").slideUp(200);
        $("#div6").append(" | Zwinoles | ")
        $("#btn14").fadeIn("fast");
    });
    $("#btn14").click(function () {
        $("#div6").slideDown(200);
        $("#div6").append(" |Rozwinoles| ")
        $("#btn15").fadeIn("slow");
    });
    $("#btn15").click(function () {
        $("#div6").empty();
        $("#btn16").fadeIn("slow");
    });
    $("#btn16").click(function () {
        $("#div6").remove();
    });
});