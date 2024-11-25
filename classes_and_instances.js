
// OOP => Obejct Orient Programming
// intro to classes, instances, methods, and properties

// encapsulates variables and functions
class Rectanagle{ //defines a new data type called Rectangle
    //factory that makes the instance
    constructor(height, width){
        // me, myself, and I
        // the instance is called by the keyword "THIS"
        // properties: variables inside a class 
        this.height = height;
        this.width = width;
    }
    
    // method - a function inside a class
    getArea(){
        return this.height * this.width;
    }
}

// create a new instance and assign it to the r variable
let r = new Rectanagle(12,13);
// call/invoke r's inherited getArea() method
console.log(r.getArea());

let s = new String();
console.log(s.length);

let t = ""; // new String("")
console.log(t.length);

let n = new Number();
console.log(n);

let m = 0;
console.log(m, m.toFixed(3));