const Sentiment = require('sentiment');
const sentiment = new Sentiment();



function analyzeProduct(productData) {
    const results = productData.reviews.map(review => sentiment.analyze(review));
  
const scores=[];
results.forEach(score => {
      scores.push(score.score);
});

const totalScore=scores.reduce((prev,curr)=>prev+curr ,0);

const averageScore=totalScore/scores.length;
  return {
    productName:productData.productName,
    productPrice:productData.productPrice,
    score:averageScore
  }
}

async function analyse(req,res)
{
    const productData=req.body;
   
    try {
    const result=productData.map((data)=>{
      return analyzeProduct(data)
    })

    //console.log(result);
     result.sort((a,b)=>{return b.score-a.score})
      
     res.json({result:result})

  }

   
catch (error) {
   res.json({msg:"unexpected error 😞 sorry for the inconvnience"})
}

  }
  

  
  
//}

module.exports=analyse;