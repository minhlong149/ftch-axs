import axios from "axios";

function fetchOne(i = 0) {
  console.time(`fetch ${i}`);
  fetch("https://www.googleapis.com/discovery/v1/apis")
    .then((response) => response.json())
    .then(() => console.timeEnd(`fetch ${i}`));
}

function axiosOne(i = 0) {
  console.time(`axios ${i}`);
  axios
    .get("https://www.googleapis.com/discovery/v1/apis")
    .then(() => console.timeEnd(`axios ${i}`));
}

async function countFetch(num = 5) {
  for (let i = 0; i < num; i++) {
    console.time(`fetch ${i}`);

    const response = await fetch(
      "https://www.googleapis.com/discovery/v1/apis"
    );

    console.timeLog(`fetch ${i}`);


    const data = await response.json();

    console.timeEnd(`fetch ${i}`);
  }
}

async function countAxios(num = 5) {
  for (let i = 0; i < num; i++) {
    console.time(`axios ${i}`);

    await axios.get("https://www.googleapis.com/discovery/v1/apis");

    console.timeEnd(`axios ${i}`);
  }
}

countAxios();
countFetch();

// axiosOne();
// fetchOne();
