var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://kadupitigesilva73:2jTegM4vD47wqcVi@cluster0.zekke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {mongoose};
