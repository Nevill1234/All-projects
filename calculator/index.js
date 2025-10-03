const x = document.getElementById("display-number")

const formButton = document.getElementById("form-button")

let display = "";

formButton.addEventListener("click", (e) =>
{
    if (e.target.value !== undefined){
        if(e.target.value === "="){
            let result = eval(display.replaceAll("x", "*"));
            display = `${result}`;
        }else if (e.target.value === "C"){
            display = ""
        }
        else {
            display += e.target.value;
        }
    }
      if (display === "") {
        x.innerText = "0"
      }
      else {
        x.innerText = display;
      }
});