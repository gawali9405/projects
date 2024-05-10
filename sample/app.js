// function add() {
//   let str = document.getElementById("ipt").value;
//   let show = document.getElementById('tasks');
//   if (str == "") {
//     alert("Please enter a task");
//   } else {
//     show.innerHTML += `<div class="task">
//                 <span class="taskname"> ${str} </span>

//                 <button class="delete">
//                     <i class="fa-solid fa-trash"></i>
//                 </button>

//             </div> `;

//     var current_tasks = document.querySelectorAll(".delete");
//     for (var i = 0; i < current_tasks.length; i++) {
//       current_tasks[i].onclick = function () {
//         this.parentNode.remove();
//       };
//     }
//     document.querySelector("#newtask input").value = "";
//   }
// }
 