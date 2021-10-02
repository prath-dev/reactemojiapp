import "./styles.css";
import React,{useState} from "react" ; 


let emojidectionary = {
  "🦁 ": "lion",
  "🐯 ": "Tiger face",
  "🐆": " Leopard",
  "🦄": "Unicorn",
  "🦌 ": "Deer",
  "🐮 ": "cow-face",
  "🐖 ":"pig",
  "🦍 ":"Gorilla",
  "🐵":"monkey",
  "🐱‍":"astro-cat",
  "🐶":"dog",
  "🦊 ":"fox"
};

export default function App() {
  let [meaning, setMeaning] = useState("");
  let emoticonsarray = Object.keys(emojidectionary);
  function inputvalue(event) {
    let meaning = event.target.value;

    meaning = emojidectionary[meaning];
    if (meaning === undefined)
      meaning = "sorry! it does not exist in our database";
    setMeaning(meaning);
  }
  function inputvaluefromclick(item) {
    setMeaning(emojidectionary[item]);
  } 
  return (
    <div className=" App">
      <h1>Welcome ! To Animal Pedia</h1>
      <input
        placeholder=" Hey !Enter your animal emoji"
        id="Emoji-input"
        onChange={inputvalue}
      />   <h4 id="output"> {meaning}</h4>
      <br />
      <br />
      {emoticonsarray.map((item) => {
        return (
          <span id="list" onClick={() => inputvaluefromclick(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
 
 
