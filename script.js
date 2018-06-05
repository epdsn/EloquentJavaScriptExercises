 // Chap 1 excercises
 var hash = '#';
 for (var i = 0; i < 7; i++) {
    console.log(hash);
    hash += '#';
}

//
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
var sq = 8
for (var i = 1; i < (sq*2); i++) {
    var hex = "#";
    var oddRow = true;
    if (oddRow) {
        for (var x = 0; x < sq; x++)
            console.log(hex + ' ');
    } else {
        for (var x = 0; x < sq; x++)
            console.log(' ' + hex);
    }

    
    if (i % sq == 0) {
        console.log('\n');
        oddRow = !oddRow;
    }
}