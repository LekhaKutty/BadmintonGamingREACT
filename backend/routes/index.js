const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
            console.log(req.session.userId);
        /*if(req.session.userId){
            return res.status(200).send({'sessionId':req.session.userId,'email':req.session.email});
        }
        else{*/
            return res.status(200);
        //}
    
});