const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());
const port = 3100;
const user=require('./Api/Routes/user_api')
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/user', user); 

app.use(express.static('public'));

app.use((req, res, next) => { 
  res.status(404).json({
    error: 'Bad Request'  
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
