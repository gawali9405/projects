function add() {
  let str = document.querySelector("#ipt").value;
  let show = document.getElementById("tasks");
  if (str == "") {
    alert("Enter the tasks");
  } else {
    show.innerHTML += `<div class="task"> 
                     <span>${str}</span>

                     <button class= "delete">
                    <i class="fa-solid fa-trash"></i>
                     </button>

                     </div>`;

    let res = document.querySelectorAll(".delete");
    for (let i = 0; i < res.length; i++) {
      res[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    document.getElementById("ipt").value = "";
  }
}
