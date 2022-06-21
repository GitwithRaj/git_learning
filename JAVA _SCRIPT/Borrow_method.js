console.log("connected to external js file");

let animal={
    name:'Dog',
    eat(a,b){
        console.log(this.name +" is eating "+a+" "+b);
    }
};

let human={
    name:'Ravi',
};

animal.eat(5,"bones");
animal.eat.call(human,10,"chips");
animal.eat.apply(human,[10,"chips"]);

let human_eat=animal.eat.bind(human);

human_eat(20,"banana");