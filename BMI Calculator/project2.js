const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit' , function(e){
    e.preventDefault();
    

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    
    const bmi = (weight / ((height * height) / 10000)).toFixed(3);
    if(bmi < 20 ){
        results.innerHTML= `<span>Your BMI Weight is ${bmi} and you are Under Weight</span>`
    }
    else if(bmi > 20 && bmi < 25 ){
        results.innerHTML= `<span>Your BMI Weight is ${bmi} and you are Normal Weight/span>`
    }
    else if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid ${weight}`;
    }
    else{
        results.innerHTML= `<span>Your BMI Weight is ${bmi} and you are Over Weight</span>`
    }
    form.reset();
    
});