var express = require('express');
var router = new express.Router();
var webservice = require('../../models/webservice');

router.get('*', function(req,res){  //listen for any GET request

    switch (req.query.q){ //seems to be q and d, q is the question topic, d is the description. Need to cycle through all q's manually to respond appropriately. 
      case 'Ping':
        res.send('OK');
        break;
      case 'Phone':
        res.send('732-735-5579');
        break;
      case 'Referrer':
        res.send('Contacted by Jenny - recruiter');
        break;
      case 'Puzzle':
        webservice.solvePuzzle(req.query.d, function(err, result){ // calls webservice found in ../models/webservice.js 
          if(err){
            res.send(req.query.q + ': error solving puzzle');
          }
          else{
            res.send(result);
          }
        })
        break;
      case 'Degree':
        res.send('Rutgers University - BS, Computer Science, 2016');
        break;
      case 'Email Address':
        res.send('siddharthmurali8@gmail.com');
        break;
      case 'Status':
        res.send('yes');
        break;
      case 'Source':
        res.send('https://github.com/siddharthmurali/brealtime.git');
        break;
      case 'Name':
        res.send('Siddharth Murali');
        break;
      case 'Position':
        res.send('Software Engineer - Full Stack'); 
        break;
      case 'Resume':
        res.send('https://drive.google.com/file/d/1bkOuklUVtxu16UI_yFwPqEgwTIEeUftA/view?usp=sharing');
        break;
      case 'Years':
        res.send('2+');
        break;
        
      default:
        res.send(req.query.q + ': no response');
        break;
    }
});


module.exports = router;
