const DragArea = document.querySelector(".appbody"),
      DragText = DragArea.querySelector("h3"),
      button   = DragArea.querySelector("button"),
      input    = DragArea.querySelector("input");

let Myfile;

// Button click → hidden input trigger
button.addEventListener("click", () => {
    input.click();
});

// Input change → file select
input.addEventListener("change", function(){
    Myfile = this.files[0];
    if (Myfile) {
        DragText.textContent = "File Selected: " + Myfile.name;
        DragArea.classList.add("active");
    }
});

// Drag & Drop support
DragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    DragText.textContent = "Release to Upload File";
});

DragArea.addEventListener("drop", (event) => {
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];
    if (Myfile) {
        DragText.textContent = "File Selected: " + Myfile.name;
        DragArea.classList.add("active");
    }
});