const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cats');

//const Cat = mongoose.model('Cat', { name: String });

const kittySchema = new mongoose.Schema({
    name: String,
    color: String,
    race: String,
    lifes: Number
})

kittySchema.method.speak = function(){
    let greeting = this.name ? `Meow name is ${this.name}`: "I don't have name";
    console.log(greeting);
}

kittySchema.method.patearGato = () => {
    this.lifes--;
}

const Gato = mongoose.model('Gato', kittySchema);

const kitty = new Gato({
    name: "Luismi",
    color: "Negro",
    raza: "Persiana",
    lifes: 2
})

kitty.save().then(() => console.log('KLK MANIN'));

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));
