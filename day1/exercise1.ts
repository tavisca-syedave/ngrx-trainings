
    let names : Array<string> = new Array<string>();
    names=["sagar","raj","pratikmega"];
  

names.sort((a:string,b:string) =>
{
    return a.length-b.length;    
}).reverse();

console.log('sorted array',names)