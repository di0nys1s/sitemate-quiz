var btnClickMe = document.getElementById("btnClick");
var myDialog = document.getElementById("myDialog");
var outputText = document.querySelector("output");
var confirmBtn = document.getElementById("confirmBtn");

btnClickMe.addEventListener("click", () => {
  myDialog.showModal();
});

myDialog.addEventListener("close", () => {
  outputText.value = "You just clicked " + myDialog.returnValue + "!";
});
