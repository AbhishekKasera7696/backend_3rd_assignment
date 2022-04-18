const express = require('express');
const app = express();

app.use(middleWareFunction)

app.get("/books", (req,res) => {
    const data = {
        "books" : [
            "Five Point Someone",
            "One Indian Girl",
            "Three Mistakes Of My Life",
            "One Arranged Murder"
        ]
    }
    console.log(data);
})

function middleWareFunction(res,req,next){
    console.log("Fetching all books");
    next()
}

app.listen(8001, () => {
    console.log('I am on Port 8001. ')
})