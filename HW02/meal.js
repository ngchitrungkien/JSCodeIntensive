class Meal{

    constructor(name,foods,dataModifined){
        this.name = name;
        this.foods = [];
        this.dataModified = new Date();
    }

    addFood(food){
        this.foods.push(food);
    }

    calulatePrice(){
        var priceFood = this.foods.reduce((a,b) => {
            return a.price + b.price;
        })
        return priceFood;
    }

    showFood(){
        console.log(`
        Xin chào bạn, sau đây chúng ta sẽ đến với chuyên mục 
        ${this.name} :))
        Thực đơn của chúng tôi ngày hôm nay
        ${this.dataModified} 
        gồm các món sơn hào hải vị sau:
        ${this.foods}
        `)
    }
}

class VegetableMeal extends Meal {
    constructor(name,foods,dataModified){
        super(name,foods,dataModified)
    }

    addFood(VegetableFood){
        this.foods.push(VegetableFood);
    }

    calulatePrice(){
        var priceFood = this.foods.reduce((a,b) => {
            return (a.price + b.price) * 0.85;
        })
        return priceFood;
    }
}

class  NonVegetableMeal extends Meal {
    constructor(name,foods,dataModified){
        super(name,foods,dataModified)
    }

    addFood(NonVegetableFood){
        console.log(NonVegetableFood);
        this.foods.push(NonVegetableFood);
    }

    calulatePrice(){
        var priceFood = this.foods.reduce((a,b) => {
            return (a.price + b.price) * 0.95;
        })
        return priceFood;
    }
}

let newVegetableMeal = new VegetableMeal("ĂN GÌ ... THÌ ĂN","Rồng xanh vượt biển",30000);

newVegetableMeal.showFood();