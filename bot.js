var speed = 200;
var log = false;
var pause = false;

function selectRightAnswer(){
    if($(document.getElementById("Peqasus")).length == 1){
        $(document.getElementById("Peqasus")).prop("checked", true).trigger("click");
        if(log){
            console.log("Peqasus");
        }
    }
    else if($(document.getElementById("Stade de Suisse (Bern)")).length == 1){
        $(document.getElementById("Stade de Suisse (Bern)")).prop("checked", true).trigger("click");
        if(log){
            console.log("Stade de Suisse (Bern)");
        }
    }
    else if($(document.getElementById("1000 Tonnen")).length == 1){
        $(document.getElementById("1000 Tonnen")).prop("checked", true).trigger("click");
        if(log){
            console.log("1000 Tonnen");
        }
    }
    else if($(document.getElementById("BSC Young Boys")).length == 1){
        $(document.getElementById("BSC Young Boys")).prop("checked", true).trigger("click");
        if(log){
            console.log("BSC Young Boys");
        }
    }
    else if($(document.getElementById("Seine grosse Nase")).length == 1){
        $(document.getElementById("Seine grosse Nase")).prop("checked", true).trigger("click");
        if(log){
            console.log("Seine grosse Nase");
        }
    }
    else if($(document.getElementById("8. September 2018")).length == 1){
        $(document.getElementById("8. September 2018")).prop("checked", true).trigger("click");
        if(log){
            console.log("8. September 2018");
        }
    }
    else if($(document.getElementById("2014")).length == 1){
        $(document.getElementById("2014")).prop("checked", true).trigger("click");
        if(log){
            console.log("2014");
        }
    }
    else if($(document.getElementById("Kodaline")).length == 1){
        $(document.getElementById("Kodaline")).prop("checked", true).trigger("click");
        if(log){
            console.log("Kodaline");
        }
    }
    else if($(document.getElementById("6. September 2018")).length == 1){
        $(document.getElementById("6. September 2018")).prop("checked", true).trigger("click");
        if(log){
            console.log("6. September 2018");
        }
    }
    else if($(document.getElementById("40’000")).length == 1){
        $(document.getElementById("40’000")).prop("checked", true).trigger("click");
        if(log){
            console.log("40’000");
        }
    }
    else if($(document.getElementById("Texte schreiben und rappen")).length == 1){
        $(document.getElementById("Texte schreiben und rappen")).prop("checked", true).trigger("click");
        if(log){
            console.log("Texte schreiben und rappen");
        }
    }
    else if($(document.getElementById("Luna Wedler")).length == 1){
        $(document.getElementById("Luna Wedler")).prop("checked", true).trigger("click");
        if(log){
            console.log("Luna Wedler");
        }
    }
    else if($(document.getElementById("Bastian Baker")).length == 1){
        $(document.getElementById("Bastian Baker")).prop("checked", true).trigger("click");
        if(log){
            console.log("Bastian Baker");
        }
    }
    else if($(document.getElementById("Die fünfte")).length == 1){
        $(document.getElementById("Die fünfte")).prop("checked", true).trigger("click");
        if(log){
            console.log("Die fünfte");
        }
    }
    else if($(document.getElementById("Aloe Blacc")).length == 1){
        $(document.getElementById("Aloe Blacc")).prop("checked", true).trigger("click");
        if(log){
            console.log("Aloe Blacc");
        }
    }
    else if($(document.getElementById("Shootingstar Berlinale 2018")).length == 1){
        $(document.getElementById("Shootingstar Berlinale 2018")).prop("checked", true).trigger("click");
        if(log){
            console.log("Shootingstar Berlinale 2018");
        }
    }
    else if($(document.getElementById("Cyril")).length == 1){
        $(document.getElementById("Cyril")).prop("checked", true).trigger("click");
        if(log){
            console.log("Cyril");
        }
    }
    else if($(document.getElementById("gewinnen")).length == 1){
        $(document.getElementById("gewinnen")).prop("checked", true).trigger("click");
        if(log){
            console.log("gewinnen");
        }
    }
    else if($(document.getElementById("15")).length == 1){
        $(document.getElementById("15")).prop("checked", true).trigger("click");
        if(log){
            console.log("15");
        }
    }
    else if($(document.getElementById("Tuk Tuk")).length == 1){
        $(document.getElementById("Tuk Tuk")).prop("checked", true).trigger("click");
        if(log){
            console.log("Tuk Tuk");
        }
    }
    else if($(document.getElementById("XTRA-Circle")).length == 1){
        $(document.getElementById("XTRA-Circle")).prop("checked", true).trigger("click");
        if(log){
            console.log("XTRA-Circle");
        }
    }
    else if($(document.getElementById("im Radio, auf der Website und über Social Media")).length == 1){
        $(document.getElementById("im Radio, auf der Website und über Social Media")).prop("checked", true).trigger("click");
        if(log){
            console.log("im Radio, auf der Website und über Social Media");
        }
    }
    else{
        $("input:radio").prop("checked", true).trigger("click");
        if(log){
            console.log("keine Antwort vorhanden - Zufall wird gebraucht");
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function play(){
    while(!pause){
        while($("#next-question").length > 0){
            selectRightAnswer();
            await sleep(speed);
            $("#next-question").trigger("click");
            await sleep(speed);
        }
        $(".game-button-slot").trigger("click").length;
        $(".pulse").trigger("click");
        if($(".game-button").length == 1){
            $(".game-button").trigger("click");
        }
        await sleep(speed);
    }
}
