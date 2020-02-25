var btnClickMe = document.getElementById("btnClick");
var myDialog = document.getElementById("myDialog");
var outputText = document.querySelector("output");
var confirmBtn = document.getElementById("confirmBtn");

btnClickMe.addEventListener("click", () => {
  myDialog.showModal();
});

myDialog.addEventListener("close", () => {
  $("output")
    .text(`You just clicked ${myDialog.returnValue}!`)
    .slideUp()
    .slideDown()
    .animate({ opacity: "0" })
    .animate({ opacity: "1" });
  if (myDialog.returnValue === "Yes") {
    outputText.style.color = "green";
  } else {
    outputText.style.color = "red";
  }
});
