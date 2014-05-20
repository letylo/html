function Animal(){
    this.feet = feet
    this.skin = skin
    this.habitat = habitat
}

Vertebrate.prototype = new Animal //Extiende el prototipo
Vertebrate.prototype.constructor = Vertebrate //Arreglar el constructor

function Vertebrate(){
    Animal.call(this, 2, hair, jungle) //Llamar al constructor de la superclase
    this.bones = bones
}

var tiger = new Vertebrate()
var lion = new Vertebrate()

Invertebrate.prototype = new Animal 
Invertebrate.prototype.constructor = Invertebrate

function Invertebrate(){
    Animal.call(this, none, none, sea)
    this.type = type
}

var jellyfish = new Invertebrate()
var starfish = new Invertebrate()
