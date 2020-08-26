class Food{

    constructor(name,luxuriousName,price){
        this.name = name;
        this.luxuriousName =luxuriousName;
        this.price = price;
    }
}

class VegetableFood extends Food{
    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price);
    }
}

class NonVegetableFood extends Food{
    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price);
    }
}

let newVegetableFood = new NonVegetableFood("Rau muống xào tỏi","Rồng xanh vượt biển",30000);
console.log(newVegetableFood);

let newNonVegetableFood = new NonVegetableFood("Thịt kho trứng","Trư Bát Giới đại náo Kê Cung",69000);
console.log(newNonVegetableFood);