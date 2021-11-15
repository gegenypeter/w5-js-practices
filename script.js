/*
var window = {
    addEventListener: function (eventName, eventFunction) {
        
    }
}
*/


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    console.log(myFirstArray[0]);
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
});



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
