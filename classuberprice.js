class UberPriceCalculator{
    constructor(distance,duration){
        this.distance = distance;
        this.duration = duration;
    }

calculationprice(){
    const baseFare = 2.5;
    const costpermile = 2;
    const costperminute = 1.25;

    let distanceCost = this.distance*costpermile;
    let durationCost = this.duration*costperminute;
    
    const totalprice = baseFare + distanceCost + durationCost;
    return totalprice;

}
}
//let distance = 5;
//let duration = 15;

let calculate = new UberPriceCalculator(5,15);
let price = calculate.calculationprice();
console.log(`The estimated price for uber is ${price} `)
