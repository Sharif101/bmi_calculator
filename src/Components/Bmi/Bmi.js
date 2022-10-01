import React, { useState } from 'react';
import './Bmi.css';

const Bmi = () => {

    let [height, setHeight] = useState('');
    let [weight, setWeight] = useState('');
    let [height_inch, setHeight_inch] = useState('');

    let [bmi, setBmi] = useState(0);
    let [status, setStatus] = useState('');

    // advice
    let [advice, setAdvice ] = useState('');

    // div 
    let [show, setShow] = useState(false);


    let handleheightfeet = (e) =>{
        setHeight(e.target.value);

    }
    let handleheightinch = (e) =>{
        setHeight_inch (e.target.value);
    }
    let handleweight = (e) =>{
        setWeight (e.target.value);
    }


    let calcutation = (wei, hei_f, hei_i) =>{

        let height_meter = (hei_f*0.3048) + (hei_i*0.0254);
        let bmi = (wei/ (height_meter * height_meter)).toFixed(2);
        // console.log(bmi);

        // for bmi rslt display 
        setBmi(bmi);

        // for show bmi rslt 
        let bmiResult = getBmi(bmi);
        setStatus(bmiResult);

        // for addvice 
        let advice = getadvice(bmi);
        setAdvice(advice);

        // for hide and show div 
        setShow(true);

    }

    let getBmi = (bmi) =>{
        if(bmi < 18.5){
            return "Underweight";
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            return "Normal Weight";
        }
        else if (bmi >= 25 && bmi < 29.9){
            return "Overweight";
        }
        else
        {
            return "Obesity";
        }
    }



    let getadvice = (bmi) =>{

        if(bmi < 18.5){
            return "you may need to put on some weight.";
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            return "you are at a healthy weight for your height.";
        }
        else if (bmi >= 25 && bmi < 29.9){
            return "advised to lose some weight.";
        }
        else
        {
            return "Your health at risk lose your weight";
        }
    }

   

    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h2>Body Mass Index(BMI) calculator</h2>
                        <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your weight</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"  onChange={handleweight} placeholder="weight kg"/>

                                <label for="exampleFormControlInput1" class="form-label">Your height (feet)</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleheightfeet} placeholder="height feet"/>

                                <label for="exampleFormControlInput1" class="form-label">Your height (inch)</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleheightinch} placeholder="height inch"/>

                                <button className='btn' onClick={()=> calcutation(weight, height, height_inch)}>CALCULATE</button>

                               {show && (
                                    <div className='text'>
                                        <h3>Your BMI is : <span> {bmi}</span></h3>
                                        <h3>You are currently: <span> {status}</span></h3>
                                        <h3>Advice: <span> {advice}</span></h3>
                                    </div>
                               )}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Bmi;