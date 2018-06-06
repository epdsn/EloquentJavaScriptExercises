 // Chap 1 excercises

//Christmas tree
 var hash = '#';
 for (var i = 0; i < 7; i++) {
    console.log(hash);
    hash += '#';
}

// Fizz buzz
for (var i = 1; i <= 100 ; i++) {
    ( i % 3 == 0 || i % 5 == 0) ? console.log('fizzbuzz') : console.log(i);
}

// Chessboard 8x8
/*
# # # # 
 # # # #
# # # #
 # # # #
# # # #
 # # # # 
# # # #
 # # # #
*/
var sq = 8;
for (var i = 1; i <= sq; i++) {
    var hex = '';
    if (i % 2 == 0 ) {
        for (var x = 0; x < sq; x++)
        {
            (x % 2 == 0) ? hex += '#' : hex += ' ';
        }
        console.log(hex);
    } 
    else {
        for (var x = 0; x < sq; x++)
            (x % 2 == 0) ?  hex += ' ' : hex += '#';
        console.log(hex);
    }
}