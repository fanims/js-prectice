let star = "*";

for (let i = 0; i < 10; i++) {
    console.log(star);
    document.getElementById("stars").innerHTML += star + "<br>";
    star += "*";
}   

const age = 28;

const result = age > 18 ? "Adult" : "Minor";

document.getElementById("result").textContent = result;
