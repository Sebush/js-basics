/**
 * klassen generieren objecte
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Klassen
 */

 class Mensch {

    constructor (name, alter, geschlecht, groesse) {
        this.name = name
        this.alter = alter
        this.geschlecht = geschlecht
        this.groesse = groesse
    }

    info() {
        console.log('Name: ' + this.name)
        console.log('Alter: ' + this.alter)
        console.log('Geschlecht: ' + this.geschlecht)
        console.log('Größe: ' + this.groesse)
    }

    labern(was) {
        console.log(this.name + ' sagt: "' + was + '"')
    }
 }


/**
 * Klasse Mensch benutzen
 */
var sebush = new Mensch('Sebush', 102, 'm', 200)
var flo = new Mensch('Flo', 13, 'w', 110)

sebush.labern('was geht aaaaab')
flo.info()

console.dir(sebush)
console.dir(flo)