import _ from "lodash";
import myName from "./myName";
import icon from "./icon.png"
import data from "./data.xml"
import notes from "./data.csv"
import "./style.css";
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ") + " " + myName("Cody");
  element.classList.add("hello");

  const myIcon = new Image(100);
  myIcon.src = icon;

  element.appendChild(myIcon);

  console.log(data);
  console.log(notes);

  return element;
}

document.body.appendChild(component());
