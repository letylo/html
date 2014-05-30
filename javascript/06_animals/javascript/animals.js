function Animal(){
    this.feet = feet
}

function Vertebrate(){
    
} 
 
function Invertebrate(){;} 

function Reptile(){;}

function Mammal(){;}
Mammal.prototype.calve = function(){
    alert("Ayyy")
}

Human.prototype = new Mammal
function Human(name){
    this.name
}

Human.prototype.greet = function(){
    alert(this.name)
}

var me = new Human("Leticia")
me.calve()
me.greet()

Dolphin.prototype  = new Mammal
function Dolphin(){
    this.habitat
}

Dolphin.prototype.swim =  function(){
    alert(this.habitat)
}

var dolphin = new Mammal("Sea")
dolphin.calve()
dophin.swim()
