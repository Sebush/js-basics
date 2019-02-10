var a = 1
var b = 2

/**
 * wenn dann
 */
if (a > b) {
    console.log('a größer b')
} else if (a < b) {
    console.log('a kleiner b')
} else {
    console.log('a gleich b')
}

/**
 * switch case
 */
var y = 'lorem'
switch(y) {
    case 'foo':
        console.log('y ist foo')
        break
    case 'lorem':
        console.log('y ist lorem')
        break
    default:
        console.log('y ist weder "foo" noch "lorem"')
}