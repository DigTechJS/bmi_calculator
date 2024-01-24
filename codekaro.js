const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const height=parseInt(form.querySelector('#height').value)/100
   const weight=parseInt(form.querySelector('#weight').value)
   const results=form.querySelector('#results')
   if(height===''||height<0||isNaN(height)){
     results.innerHTML="Please give a valid height."
   }
    else if(weight===''||weight<0||isNaN(weight)){
     results.innerHTML="Please give a valid weight."
   }
   else{
    let ans=-1;
    const bmi=(weight/(height*height)).toFixed(3);
    if(bmi<18.6)ans=0;
    else if(bmi<24.9)ans=1;
    else ans=2;
    if(ans===0){
        results.innerHTML=`<div>Your BMI is ${bmi}</div><div>You are Underweight😑</div>`
    }
    else if(ans===1){
        results.innerHTML=`<div>Your BMI is ${bmi}</div><div>You are in Normal Range😁</div>`
    }
    else{
        results.innerHTML=`<div>Your BMI is ${bmi}</div><div>You are OverWeight😑</div>`
    }
           
   }

   
})