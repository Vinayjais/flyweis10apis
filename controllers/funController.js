 const { json } = require('body-parser');
const users = require('../Modals/user');
 const user = {
      
     name:'vinay',
     email: 'vinay@gmail.com',
     phone:'7266056060'
 }

 exports.creatuser =( req,res) =>{
    
       users.create({
          name: user.name,
          phone: user.phone,
          email: user.email

       })
       .then((result) => {
             console.log('user inserted') 
             res.json({success: true , msg:'user Created'})
       }).catch((err) => {
         console.log(err)
       });
 }

exports.userProfile =( req,res) =>{
  
    const  userId = req.params.userId;

    // 4

    try {
         
         users.findOne({where: { id : userId}})
         .then((result)=>{
            res.json({success: true, profile: result})
         })
         .catch((err)=>{
        
            res.status(404).json({success: false, msg :' user Not Found'})
         })

    } catch (error) {
        console.log(error)
    }

    

}

exports.sendNotification= ( req,res)=>{
       //5
     // implementation requires hear for all users
     res.json({success: true, msg: "Notification sent successfully"})
     
}

exports.matches =( req,res) =>{

     const userId = req.params.userId;
    try {
          //6
     // implementation requires hear for particular user
     // by usind database
        
        res.json({success: true, matches: ['array of matches']})
    } catch (error) {
        console.log(error)
    }
}

exports.myTransactions =( req,res) =>{
 
    const userId = req.params.userId;

     try {
        //7
         // get transaction detailes for userId

          res.json({success: true,  transactions: ['array of transactions']});
     } catch (error) {
         console.log(error)
     }
     


}

exports.wallet =( req,res) =>{
          
    const userId  = req.params.userId;

    try {
         //8
         // get wallet detailes for userId

         res.json({success:true , wallet: {}});
        
    } catch (error) {
         console.log(error)
    }
}

exports.balance =( req,res)=>{
   
     const userId = req.params.userId;

     try {
        // 9
         //get balance for userId 
         
          res.json({success: true, balance: 0});

     } catch (error) {
         console.log(error)
     }
}

exports.addCash =( req,res) =>{
      const { userId , amoutn} = req.body;

      try {
        // 10 api
           // we will implement hear balance for userId

           res.json({success: true, msg :`${amoutn} Cash added Successfully`});
      } catch (error) {
        
        console.log(error)
      }
}