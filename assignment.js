// start feet to mile 

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(10560);
console.log(result);



// start wood calculator 

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;

}
var woodResult = woodCalculator(8, 10, 12);
console.log(woodResult);



// start tiny friend

function tinyFriend(names){
    var tinyName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }

    }
    return tinyName;

}
var smallestName = tinyFriend(["Babu", "Laiju", "Mou", "Tahsin", "ishtiak",]);
console.log(smallestName);


//start brick calculator

function brickCalculator(floor){
    var feet = 1000;
    var step1;
    var step2;
    var step3;
        if(floor <= 10){
            var step1 = feet * 15 * floor;
            return step1;
        }
        else if (floor >= 11 && floor <= 20){
            var step2 = feet * 12 * floor;
            return step1 + step2;
        }
        else if (floor >= 21){
            var step3 = feet * 10 * floor;
            return step1 + step2 + step3;
        }
}
var result = brickCalculator(30);
console.log(result);
