var express = require('express');
var router = new express.Router();

router.get('*', function(req,res){

    switch (req.query.q){
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
        res.send(" ABCD\nA=>>>\nB<=<<\nC<>=<\nD<>>=")
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
    
        
    console.log(req.query);
    //console.log(req.query.q);

    //res.send('OK');
});


module.exports = router;
