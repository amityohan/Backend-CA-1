const express=require('express');

const userSchema={
    username:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
        unique: true,
    },
    password:{
        type:string,
        required:true,
    }
}

module.exports=userSchema;