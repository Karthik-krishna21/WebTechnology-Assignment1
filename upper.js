const express = require('express');
const router = express.Router();
router.post('/', function(req, res){
    //Check if all fields are provided and are valid:
    if(!req.body.json){ 
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
       var names = req.body.json.names;
       var address = req.body.json.address;
       var namesUpper = [];
       var addressUpper = [];
       var response = {};
       names.forEach((value)=>{
         namesUpper.push(value.toUpperCase());
       });
       address.forEach((value)=>{
          addressUpper.push(value.toUpperCase());
       });
       response = {
          names: namesUpper,
          address: addressUpper
       };
       console.log(response)
       res.json(response);
    }
 });
 module.exports = router;