const express=require('express');
const app=express();

const PORT=8010;
const usernameRegex=/^[a-zA-Z0-9-_]$/;
const emailRegex=/^[a-zA-z0-9]@[a-z].[a-z]$/;
const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%&]){8,}$/

app.use(express.json());

app.get('/',(res,req)=>{
    console.log('Hello World');
})

app.post('/signup',(res,req)=>{
    // const {username,email,password,dateOfBirth}=req.body;
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    const dob=req.body.dateOfBirth;
    if (!usernameRegex.test(username)){
        return res
            .status(400)
            .json({message:`Invalid username format`})
    }
    if (!emailRegex.test(email)){
        return res
            .status(400)
            .json({message:`Invalid email format`})
    }
    if (!passwordRegex.test(password)){
        return res
            .status(400)
            .json({message:`Invalid password format`})
    }

    if (dob>18){
        res.status(400)
            .json({message:`User must be 18 or older.`})
    }
    
    return(
        res.status(200)
            .json({message:`Signup successful`})
    );


})

app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})

