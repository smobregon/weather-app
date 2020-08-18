const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#p1");
const messageTwo = document.querySelector("#p2");

//messageOne.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("http://localhost:8000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          //console.log(data.error);
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
