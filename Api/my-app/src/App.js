import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [res, setRes] = useState({});
  var my_header = new Headers();
  my_header.append("apikey", "Ubbtdbs5bAWL5WFls1rzZilw1O2Coo66");  
  var req_options = {
    method: "GET",
    redirect: "follow",
    headers: my_header,
  };
function Call_api(number){
  fetch(
    `https://api.apilayer.com/number_verification/validate?number=${number}`,
    req_options
  )
    .then((response) => response.text())
    .then((output) => setRes(JSON.parse(output)))
    .catch((err) => console.log("err", err));
}
  return (
    <div className="main_div">
      <input
        type="number"
        placeholder="enter number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>Call_api(number)}>Submit</button>
      <div>
       
        <p>valid:{res.valid ? "Valid" : ""}</p>
        <p>line_type:{res.line_type || ""} </p>
        <p> carrier:{res.carrier || ""} </p>
        <p>number:{res.number || ""} </p>
        <p> international_format:{res.international_format || ""} </p>
        <p>country_prefix: {res.country_prefix || ""}</p>
        <p>location: {res.location || ""}</p>
        <p> country_code: {res.country_code || ""}</p>
        <p>country_name:{res.country_name || ""} </p>
      </div>
    </div>
  );
}

export default App;
