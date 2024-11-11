class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

const bfast = new Breakfast("eggs", "juice");

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

const newlunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea" )

class Dinner {
    #dessert;

    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }

    getDessert() {
        return this.#dessert;
    }
    
    setDessert(newDessert) {
        this.#dessert = newDessert;
    }
}

