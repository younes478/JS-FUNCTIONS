class car {
    constructor (year,color){
        this.year = year
        this.color = color
        
    }
    intro() {
        console.log(`hi this, is the details of my car ${this.year}`)
        
    }
}


const car1 = new car(2009,'blue')
car1.intro()


