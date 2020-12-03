import React,{useState}from "react";
import './App.css';
import Input from "./components/Input";
import axios from "axios";
import Result from "./components/Result";
function App() {
  const [input, setInput] = useState("");

  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findweather= async()=>{
    const apikey = "55b36b957a781536dc90b55b78f748ff";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +input +"&appid=" +apikey +"&units=" +unit;
const response =await axios.get(url);
    
const temp = await response.data.main.temp;
const weatherDescription= await response.data.weather[0].description;
const icon = await response.data.weather[0].icon;
const imageURL = "https://openweathermap.org/img/wn/" +icon+ "@2x.png";
//console.log(temp, weatherDescription, imageURL); checking
setTemp(temp);
setDescription(weatherDescription);
setIcon(imageURL);
  };
  return (
    <div className="App">
      {temp === "" ? (
     <Input input={input} setInput={setInput} findweather={findweather}/> ):(
     <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)}
    </div>
  );
};

export default App;
