class Vehicle{
    constructor(type,model,parts,fuel,drive){
        this.type = type;
        this.model = model;
        this.parts = {
            engine,
            power,
            quality: engine * power
        };
        this.fuel = fuel;
    }
    drive(fuel){
        return fuel - fuel
    }
}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
vehicle[parts] = parts.engine = 6;
vehicle[parts] = parts.power = 100;
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);