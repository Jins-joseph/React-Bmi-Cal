import { useState } from "react";


function Form({getData}) {
  
    const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [alert,setAlert]=useState(false)
  const onsubmit=(e)=>{
      e.preventDefault();
      if(isNaN(Weight)||isNaN(Height)){
          console.log("not a valid input")
          setAlert(true);
      }else{
          setAlert(false)
          getData(Weight,Height)
         setWeight("");
         setHeight("");
      }


  };
  let alertMessage;
  if(alert)
  {
    alertMessage= <div className="alert alert-danger" role="alert">Plz enter valid data</div>
  }
  else{
    alertMessage="";
  }

  return (

      <div className="col-sm-6 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
        <form onSubmit={onsubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg):</label>
                <input type="text"  value={Weight}
                onChange={(e) => setWeight(e.target.value)} className="form-control"  required/>
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Height(m):</label>
                <input type="text"  value={Height}
                onChange={(e) => setHeight(e.target.value)}  className="form-control"  required/>
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="GET BMI"
          ></input>
        </form>
       {alertMessage}
      </div>
   
  );
}

export default Form;
