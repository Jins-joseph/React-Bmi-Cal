import { useState } from "react";
import "./App.css";
import BmiList from "./components/BmiList";
import BmiScore from "./components/BmiScore";
import Form from "./components/Form";

function App() {
  const [show, setShow] = useState(false);
  const [changeWeight, setChangeWeight] = useState({ wight: "", type: "" });
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not Calculated");
  const [bmiRange,setBmiRange]=useState({
    underweight:{low:""},
    normal:{low:"",high:""},
    overweight:{low:"",high:""},
    obesity1:{low:"",high:""},
    obesity2:{low:"",high:""},
    obesity3:{high:""},
  })

  const onFormSub = (w, h) => {
    let b=calBmi(w,h);
    
    setBmi(b);
    let btype=weigthType(b);
    setBmiType(btype);
    console.log(w, h);
    const range={
      underweight:{low:calWeight(18.5,h)},
      normal:{low:calWeight(18.5,h),high:calWeight(24.9,h)},
      overweight:{low:calWeight(25,h),high:calWeight(29.9,h)},
      obesity1:{low:calWeight(30,h),high:calWeight(34.9,h)},
      obesity2:{low:calWeight(35,h),high:calWeight(39.9,h)},
      obesity3:{high:calWeight(40,h)}
    };
    setBmiRange(range);
    setChangeWeight(weightChange(b, w, range));
    
  setShow(true)
  };

  const calBmi=(w,h)=>{
    return (w/(h*h)).toFixed(2);
  }
  const calWeight=(b,h)=>{
     return (b*h*h).toFixed(2);
  }
  const weigthType=(bmi)=>{
    if(bmi<18.5){
      return "underweight";
    }
    else if(18.5 < bmi && bmi < 24.9){
      return " Normal"
    }else if(24.9 <bmi && bmi < 29.9){
      return "overweight"
    }else if(29.9<bmi &&  bmi < 34.9){
      return "obesity class 1";
    }else if(34.9 <bmi && bmi < 39.9){
      return "obesity class 2"
    }else if(bmi > 39.9){
      return "obesity class3"
    }
  }
  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        wight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        wight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { wight: 0, type: "normal" };
      return changeObj;
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getData={onFormSub} />
        </div>
        { show &&(
           <div className="row justify-content-center mt-5">
           <div className="col-12 col-sm-6 mb-5">
             <BmiScore bmiNo={bmi} BmiName={bmiType} changeWeight={changeWeight} />
           </div>
           <div className="col-12 col-sm-6">
             <BmiList  range={bmiRange} bmi={bmi}/>
           </div>
         </div>

        )}
       
      </div>
    </div>
  );
}

export default App;
