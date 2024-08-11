import express from "express"
import { getCards, deleteCard, createCard, editCard } from './db/db.js';

import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
})

app.get("/cards", async (req,res)=>{
    const cards = await getCards();
    res.send(cards);
})

//updating the contents of the existing card
app.put("/edit", async (req,res)=>{
    const {id, front, back} = req.body;
    await editCard(id, front, back);
    const cards = await getCards();
    res.send(cards);
    // res.redirect("/");
})

//deleting the existing card
app.delete("/delete", async (req,res) => {
    const {id} = req.body;
    await deleteCard(id);
    res.redirect("/");
})


//creating a new card
app.post("/cards", async (req, res)=>{
    const {front, back} = req.body;
    await createCard(front, back);
    const cards = await getCards();
    res.send(cards);
    // res.redirect("/");
})