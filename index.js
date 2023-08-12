const express = require("express")
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;

app.use(cors());
const hotels=require('./Data/hotel.json');
app.get("/", (req, res) => {
  res.send("Welcome To Travelly Server");
});

app.get('/hotels',(req,res)=>{
    res.send(hotels)
})
app.get('/hotels/:id',(req,res)=>{
    const id=req.params.id;
    const hotel=hotels.find(ht=>ht.id===id);
    res.send(hotel);
})

app.listen(port, () => {
  console.log(`Server is running on port, ${port}`);
});
