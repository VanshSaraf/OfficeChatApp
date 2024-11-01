const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(()=>{
    console.log("Connection successful..");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allChats =[
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for exam",
        created_at : new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me js callbacks",
        created_at : new Date(),
    },
    {
        from: "vansh",
        to: "vashu",
        msg: "Love u yar",
        created_at : new Date(),
    },
    {
        from: "akash",
        to: "prateek",
        msg: "send me notes for cp and dsa and web dev",
        created_at : new Date(),
    },

];


Chat.insertMany(allChats);