// das ist ein kommentar (einzeilig)

/*
das ist ein kommentar
mehrzeilig
bla bla
*/

// primitive datentypen
console.log(typeof undefined)  // undefined
console.log(typeof 1)  // number
console.log(typeof 'hallo welt')  // string
console.log(typeof true)  // boolean sind true und false

// kemplexe datentypen
console.log(typeof {}, typeof [], Array.isArray({}), Array.isArray([]))  // object
console.log(typeof function(){})  // function

// variablen
var a = 100
console.log('###', typeof a2)
var b = 11.5
var c = a + b
console.log(c)  // 111.5

// object {}
// schreibweisen
var meinObject = { a: 12, b: 13, c: 14 }
var meinObject2 = {
    a: 3,
    b: 7,
    c: {
        foo: 'hallo'
    }
}
console.log(meinObject2.a)  // 3
console.log(meinObject2['a'])  // 3
console.log(meinObject2.b)  // 7
console.log(meinObject2.c.foo)  // hallo

var flo = {
    groesse: 120,  // eigenschaften
    alter: 85,
    penis: false,
    // functionen
    labern: function(waslaberterdenn) {
        console.log('bla bla bla', waslaberterdenn)
    }
}
flo.labern('pupsipups')

// array []
// schreibweisen
var meinArray = [1, 3.3, 4, 5, 6, 'hallo', {}, [], true]
var meinArray2 = [
    'huhu',
    a,
    b,
    c,
]

// functionen
// definieren
var meineFunktion = function(a) {
    console.log(a)
}

function meineFunktion2() {
    console.log('meineFunktion2 hallo2')
}

// function ausführen
meineFunktion('meineFunktion hallo')
meineFunktion2()

/*
zusammengefasst
() für funktionen
{} für objekte
[] für arrays (liste)
*/