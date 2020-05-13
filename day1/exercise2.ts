let news="In the virtual conference with Prime Minister Narendra Modi, west Bengal chief minister Mamata Banerjee alleged that the Centre is discriminating against the state even amid a pandemic. we are faced with several hardships being a border state. even then we are making our best efforts and will continue to do so."

function getOccurances(input:string)
{
    let indexes=[]
     news.split('').forEach((element,index) =>
    {   
        if(input.toLocaleLowerCase()==element.toLocaleLowerCase())
        {
            indexes.push(index)
        }
    });
    console.log(`occurances of '${input}' character are : ${indexes.length} and indexes :${indexes}`)
}

getOccurances("a");

function SplitStatements(input:string)
{
    let splitStatements=news.split('.');
    console.log(`number of statements with ending with '${input}' are : ${splitStatements.length-1}`);
    let upperCaseStatements=[];
    for(let statement of splitStatements)
    {
        if(statement!='')
        {
            let upperCaseStatement=statement.charAt(0).toUpperCase()+statement.slice(1);
        upperCaseStatements.push(upperCaseStatement);
        console.log(`uppercase statement ${upperCaseStatements.length} : ${upperCaseStatement}`);
        }

    }
}
SplitStatements(".");