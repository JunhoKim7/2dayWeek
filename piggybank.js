// PIGGY BANK
// - content
// - insert(denom)
// - remove() //all

class PiggyBank{
    constructor(){
        this.content = 0;
    }
    insert(denom){
        this.content += denom;
    }
    remove(){
        const all = this.content;
        this.content = 0;
        return all;
    }
}

let p = new PiggyBank();
p.insert(.25);
p.insert(.25);
p.insert(.25);
console.log(p.remove());
console.log(p.content === 0);