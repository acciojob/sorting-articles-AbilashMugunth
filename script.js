let band = document.querySelector("#band");

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

let map = new Map();

bands.forEach((el) => {
  if (el.startsWith("The ") || el.startsWith("A ") || el.startsWith("An ")) {
    map.set(
      el.slice(el.indexOf(" ")).trim(),
      el.slice(0, el.indexOf(" ")).trim()
    );
  } else {
    map.set(el, "");
  }
});

let stringArr = [];
for (let [key, value] of map) {
  stringArr.push(key);
}

let sortedStringArr = stringArr.sort((a, b) => a.localeCompare(b));

let finalArr = [];

for (const el of sortedStringArr) {
  if (map.get(el) !== "") {
    finalArr.push(`${map.get(el)} ${el}`);
  } else {
    finalArr.push(el);
  }
}

for (const el of finalArr) {
  let li = document.createElement("li");
  li.innerText = el;
  band.appendChild(li);
}
