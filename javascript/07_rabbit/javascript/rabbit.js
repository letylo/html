
function Rabbit(parent){
    this.id = Rabbit.population.length
    this.parent = parent
}

Rabbit.population = [new Rabbit()] 

Rabbit.next_generation = function(){
    for(var i=0; i<this.length; i++)
       Rabbit.population.push((new Rabbit(Rabbit.population[i])))
       Rabbit.parent *= 2;
    }

Rabbit.next_generation()

alert(Rabbit.population)
