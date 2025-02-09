const express = require("express")
const app = express()
const port = require("../express/env.js")
app.use(express.json())
const validations = (req, res, next) => {
    console.log("all done okk");
    console.log(req.body);
    const getData = req.body
    console.log(getData.ID);
    const { ID, Name, Rating, Description, Genre, Cast } = getData
  
    if(ID===undefined || Name===undefined || Rating===undefined || Description===undefined || Genre===undefined || Cast===undefined){
        return  res.status(400).send("error : the field not exist ")
    }
    const parseID = Number(ID)
    const parseRating = Number(Rating)
    if(isNaN(parseID) || !Number.isInteger(parseID)){
        return res.status(400).send("error : ID type is not a number !")
    }
    if(isNaN(parseRating) || parseRating<0 || parseRating>10){
        res.status(400).send("error : the rating is not correct ")
    }
    if( typeof Name!=="string" || Name.trim()===""){
        console.log(Name,typeof Name);
        
        res.status(400).send("Error: the name is not correct type")
    }
    if(typeof Description!=="string" || Description.trim()===""){
        res.status(400).send("Error: the Description is not correct type")
    }
    if(typeof Genre!=="string" || Genre.trim()===""){
        res.status(400).send("Error: the Genre is not correct type")
    }
    if (!Array.isArray(Cast) || Cast.length===0) {
      return  res.status(400).send("Error : the cast not contain an Array")
    }
    if (!Cast.every((actor) => typeof actor === "string" && actor.trim() !="")) {
      return  res.status(400).send("Error : cart array not contain string type value ")
    }

    next()
}
// app.use(validations)
app.get("/", (req, res) => {
    res.send("the welcome home page for middle ware learning ")
})
app.post('/movies',validations, (req, res) => {
    const getdata = req.body
    console.log("this is post method");

    res.send("successfully Add data on the server ")
})
app.listen(port, () => {
    console.log(`the successfuly run the server port number ${port}`);
})