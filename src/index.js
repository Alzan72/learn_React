import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let name = "Edit";
let nilai = 30 > 21 ? "benar" : "salah";
console.log(`Hai ${name}`);
console.log(nilai);

name === "Edit" && 2 > 1 ? console.log("ini benar") : console.log("ini salah");

name === "Edit" && console.log(name);

function perkalian(a, b) {
  return a * b;
}
let pembagian = (a, b) => {
  return a / b;
};

let tambahan = (a) => {
  return a + a;
};

let pengurangan = (a) => a - a;

console.log(perkalian(2, 3));
console.log(pembagian(10, 5));
console.log(tambahan(4));
console.log(pengurangan(5));

class Laptop {
  constructor(milik, merk) {
    this.milik = milik;
    this.merk = merk;
  }

  on() {
    return ` laptop ${this.merk} dinyalakan ${this.milik}`;
  }
}

let tes = new Laptop("Edit", "Lenovo");
console.log(tes.on());

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
