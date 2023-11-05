const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`please give a valid height ${height}`;
       }
    
    else if(weight ==='' || height<0 || isNaN(weight)){
        results.innerHTML=`please give a valid weight ${weight}`;
       }
    else{
      const bmi =  (weight / ((height*height)/10000)).toFixed(2);
      //show the results//
      results.innerHTML=`<span>${bmi}</span>`;


      if(weight<=18.6){
        results.innerHTML=`<span>${bmi} under weight </span>`;
      }
        
      if(weight===18.6 & weight===24.9){
        results.innerHTML=`<span>${bmi} normal range </span>`;
        
      }

      if(weight>24.9){
        results.innerHTML=`<span>${bmi} overwight</span>`;
        
      }



    };
       


});