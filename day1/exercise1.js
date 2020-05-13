var names = new Array();
names = ["sagar", "raj", "pratikmega"];
names.sort(function (a, b) {
    return a.length - b.length;
}).reverse();
console.log('sorted array', names);
