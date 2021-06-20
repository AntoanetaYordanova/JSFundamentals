function cats(inputArr) {
    let catArr = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayMeow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }

    for(let currentArr of inputArr) {
        let [name, age] = currentArr.split(' ');
        age = Number(age);

        let cat = new Cat(name, age);
        catArr.push(cat);

    }

    for(let obj of catArr) {
        obj.sayMeow();
    }
   
}

cats(['Mellow 2', 'Tom 5']);