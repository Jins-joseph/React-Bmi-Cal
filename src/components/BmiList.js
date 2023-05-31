import React from "react";

function BmiList({range,bmi}) {
  //console.log(range)
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">Bmi</div>
            <div className="col-4 fw-bold">Weight</div>
          </div>
        </li>
        <li className={bmi<18.5? "border border-danger boder-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4 fw-bold">Underweight</div>
            <div className="col-4 fw-bold"> &lt;18.5</div>
            <div className="col-4 fw-bold">&lt;{range.underweight.low} kg</div>
          </div>
        </li>
        <li className={bmi<18.5 && bmi<24.9? "border border-danger boder-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4 fw-bold">Normal</div>
            <div className="col-4 fw-bold">18.5-24.9</div>
            <div className="col-4 fw-bold"> {range.normal.low + " kg -" + range.normal.high + " kg"}{" "}</div>
          </div>
        </li>
        <li className={bmi<24.9 && bmi<29.9 ? "border border-danger boder-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4 fw-bold">Overweight</div>
            <div className="col-4 fw-bold">25-29.9</div> 
            <div className="col-4 fw-bold ">
            {range.overweight.low + " kg -" + range.overweight.high + " kg"}
            </div>
            
          </div>
        </li>
        <li className={bmi<29.9 && bmi<34.9 ? "border border-danger boder-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4 fw-bold">Obesity Class 1</div>
            <div className="col-4 fw-bold">30-34.9</div>
            <div className="col-4 fw-bold"> {range.obesity1.low + " kg -" + range.obesity2.high + " kg"}</div>
          </div>
        </li>
        <li className={bmi<34.9 && bmi<39.9?"border border-danger boder-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4 fw-bold">Obesity class 2</div>
            <div className="col-4 fw-bold">35-39.9</div>
            <div className="col-4 fw-bold">{range.obesity2.low + " kg -" + range.obesity2.high + " kg"}</div>
          </div>
        </li>
        <li className={bmi>39.9?"border border-danger boder-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className="col-4 fw-bold">Obesity class 3</div>
            <div className="col-4 fw-bold"> &gt;40</div>
            <div className="col-4 fw-bold">&gt; {range.obesity3.high + " kg"}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BmiList;
