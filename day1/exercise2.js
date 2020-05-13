var news = "In the virtual conference with Prime Minister Narendra Modi, west Bengal chief minister Mamata Banerjee alleged that the Centre is discriminating against the state even amid a pandemic. we are faced with several hardships being a border state. even then we are making our best efforts and will continue to do so.";
function getOccurances(input) {
    var indexes = [];
    news.split('').forEach(function (element, index) {
        if (input.toLocaleLowerCase() == element.toLocaleLowerCase()) {
            indexes.push(index);
        }
    });
    console.log("occurances of '" + input + "' character are : " + indexes.length + " and indexes :" + indexes);
}
getOccurances("a");
function SplitStatements(input) {
    var splitStatements = news.split('.');
    console.log("number of statements with ending with '" + input + "' are : " + splitStatements.length);
    var upperCaseStatements = [];
    for (var _i = 0, splitStatements_1 = splitStatements; _i < splitStatements_1.length; _i++) {
        var statement = splitStatements_1[_i];
        if (statement != '') {
            var upperCaseStatement = statement.charAt(0).toUpperCase() + statement.slice(1);
            upperCaseStatements.push(upperCaseStatement);
            console.log("uppercase statement " + upperCaseStatements.length + " : " + upperCaseStatement);
        }
    }
}
SplitStatements(".");
