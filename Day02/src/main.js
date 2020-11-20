const express = require("express")
const app = express()
const mongoose = require("mongoose")

const authorRoutes = require("./routes/authors")
const bookRoutes = require("./routes/books")

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

mongoose.connect('mongo "mongodb+srv://cluster0.ed5hc.mongodb.net/workshop" --username Guixax', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
})


app.listen(3000);