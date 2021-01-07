const ship = {
    max : 4,
    passengers : [],
    onBoard : function(name){
        if( this.passengers.length === 4 ){
            console.log(`This ship is full. ${name} can not board this ship.`)
        } else {
            this.passengers.push(name);
            console.log(`${name} boarded.`)
        }
    }
};

ship.onBoard('a');
ship.onBoard('b');
ship.onBoard('c');
ship.onBoard('d');
ship.onBoard('e');
ship.onBoard('f');

console.log(ship.passengers);

