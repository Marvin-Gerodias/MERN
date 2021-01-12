class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    drinkSake(){
        console.log("You drank Sake! Health +10.");
        this.health += 10;
    }
}

var ninja1 = new Ninja("Gary");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        return super.drinkSake() + console.log("Do or do not. There is no try.");
    }
}

var sensei1 = new Sensei("Yoda");
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();
