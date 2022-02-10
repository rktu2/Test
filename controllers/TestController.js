const {Test} = require('../models/Test');

exports.test = async () =>{
    
    const string = " virat kohli is one of the best cricketer of india";
    const words = string.split(' ');
    const para = words.sort().toString().replace(/,/g, ' ');
    console.log(para);
    try{
        let tests =  await new Test({
            paragraph:para
        })
        tests.save()
        if(tests){
            console.log(tests);
        }

    }catch(error){
        console.log("Error: > >", error);

    }
  
   }