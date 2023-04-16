const Sentiment = require('sentiment');
const sentiment = new Sentiment();

async function analyse(req,res)
{
    const reviews=req.body;
    

try {
  const results = reviews.map(review => sentiment.analyze(review));
  
const scores=[];
results.forEach(score => {
      scores.push(score.score);
});

const totalScore=scores.reduce((prev,curr)=>prev+curr ,0);

const averageScore=totalScore/scores.length;

if(averageScore<0)
{
  res.json({msg:"Product is not good in quality.😢"});
}
else if(averageScore===0)
{
  res.json({msg:"Product quality is average not so good"});
}


else if(averageScore>0 && averageScore<3)
{
  res.json({msg:"You can but not stricty recommended."});
}

else if(averageScore>=3)
{
  res.json({msg:"Very good quality product. you can but it.😍"});
}

   
} catch (error) {
   res.json({msg:"unexpected error 😞 sorry for the inconvnience"})
}

  }
  

  
  
//}

module.exports=analyse;