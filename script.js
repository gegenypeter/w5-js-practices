/*
var window = {
    addEventListener: function (eventName, eventFunction) {
        
    }
}
*/


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    /*   console.log(myFirstArray[0]);
       console.log(myFirstObject.title);
       console.log(myFirstObject["title"]);
       console.log(a);
       console.log(c);
       add(1, 2);
       add(17948, 679);
       pelda(10, 5);
       ifElseCheck("Hello");
       compare("1984", 1984);
       compare("nyitva", "tartás");
       compare(myFirstArray[0], mySecondArray[0]);
       mySecVar;
       */



});


var myFirstGlobalVar = 0;
//console.log(mySecondGlobalVar);
let mySecondGlobalVar = 1;

//console.log(myThirdGlobalVar);
const myThirdGlobalVar = 2;

(function () {
    (function () {
        (function () {
            var a = 3;
            console.log(a);
        }())
    }())
}())

console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);

var a = 6;

function f1() {
    console.log(a);
    var a = 4;
    console.log(a);
    // console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
}
f1();

function f2() {
    console.log(a);
    var a = 5;
    console.log(a);
    // console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);

}
f2();
console.log(a);


function f3() {
    // console.log(b);
    let b;
    console.log(b);
    b = 7;
    console.log(b);
}
f3();

function f4() {
    //  console.log(b);
    var b;
    console.log(b);
    b = 7;
    console.log(b);
}
f4();

function f5() {
    // console.log(b);
    const b = 7;
    //console.log(b);
    //b = 8;
    //console.log(b);
}
f5();

function f6() {
    let c = "";
    console.log(c);
    console.log(typeof c);
    console.log("valami" + c);

    if (true) {
        let d = 9;
        const e = 10;
        console.log(d, e);
    }
}
f6();

function f7() {
    //console.log(i);
    let ls = [
        "a", "b", "c", "d", "e", "f", true
    ]
    //console.log(ls[0]);
    //console.log(ls[4]);

    for (let i = 0; i < ls.length; i++) {
        const item = ls[i];
        console.log(item);
    }
    //console.log(i);
    for (const item of ls) {
        console.log(item);

    }
    for (const key in ls) {
        console.log(key);
        const item = ls[key];
        console.log(item);

    }
    console.log(f8(ls));
}
f7();

const f8 = (arrayFromParam) => {
    let abc = "";
    for (const item of arrayFromParam) {
        if (item !== true) {
            abc += item;

        }
    }
    return abc
}

const f9 = text => `<div>${text}</div>`;
































/*
var myFirstString = "Hello";
var mySecondString = 'Hello';
var míThridString = `Hello`;

var myFirstNumber = 0;
var mySecondNumber = 15;
var myThirdNumber = 6518000;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = [
    "1984",
    "Száz év magány",
    "Mester és Margarita",
    "39 kulcs",
    "Homo Sapiens"
];

var mySecondArray = [
    1984,
    "Száz év magány",
    "Mester és Margarita",
    "39 kulcs",
    "Homo Sapiens"
];

var myFirstObject = {
    title: "Mester és Margarita",
    year: 1966,
    author: "Mikhail Bulgakov",
    traslations: [
        "hu", "en", "de", "fr"
    ]
};

var a = 1;
var b = 2;
var c = a + b;

function add(firstNumber, secondNumber) {
    if (firstNumber > 0) {
        console.log("Az első szám nagyobb mint nulla")
    } else {
        console.log("Az első szám kisebb, vagy egyenlő mint nulla")
    }
    console.log(firstNumber + secondNumber);
};

function pelda(a, b) {
    if (a > b) {
        console.log(a - b);
    } else if (b > a) {
        console.log(b - a);
    }
    else {
        console.log("Egyformák");
    }
}

function ifElseCheck(text) {
    if (text === "Hello") {
        console.log("a text az volt hogy hello");
    }

    else if (text === "Hello") {
        console.log("második ág")
    }

    if (text === "Hello") {
        console.log("ez egy másik if vizsg");
    }

}

function compare(a, b) {
    console.log(" == ", a == b);
    console.log(" === ", a === b);
    var c = b + a;
    console.log(typeof c);
    console.log(c);
};

(function (text) {
    console.log("Ezt a függvényt egyből meghívtuk");
    console.log(text)
}("Hello"));

var mySecVar = function () {
    console.log("ez vajon mikor fut le")
};

var theLastFunction = function (text) {
    console.log (text);
};
theLastFunction(function(){
    return "i'm calling the last function"
});
 */