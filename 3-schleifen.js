var a = [1, 2, 4, 8]

/**
 * for-schleife
 */
console.log('### for-schleife ###')

for(var i = 0; i < a.length; i += 1) {
    console.log('index: '+i+' ist '+a[i])
}

/**
 * for-of
 */
console.log('### for-of-schleife ###')

for(var item of a) {
    console.log('item: '+item)
}

/**
 * for-in
 */
console.log('### for-in-schleife ###')

for(var index in a) {
    console.log('index '+index+': '+a[index])
}

/**
 * while-schleife (Bedingung steht schon zu beginn fest)
 * while (übersetzt "solange")
 */
console.log('### while-schleife ###')

var i = 5
while(true) {

    i--  // i wird um eins reduziert

    console.log('i ist '+ i)

    // schleife bricht ab
    if (i === 0) {
        break
    }
}