document.getElementById("counter").addEventListener("click", function() {
    let count = parseInt(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = count=0;
});
document.getElementById("increment").addEventListener("click", function() {
    let count = parseInt(document.getElementById("counter").innerText);
    count += parseInt(document.getElementById("step").value);
    document.getElementById("counter").innerText = count;
});
document.getElementById("decrement").addEventListener("click", function() {
    let count=parseInt( document.getElementById("counter").innerText);
    count -= parseInt(document.getElementById("step").value);
    document.getElementById("counter").innerText= count;
});
document.getElementById("reset").addEventListener("click", function() {
    let count = parseInt(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = count=0;
});

