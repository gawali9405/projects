const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "India",
];
let container = document.querySelector(".container");
let selectBts = document.querySelector(".select_option");
let dropDownList = document.querySelector(".list_search_container");
let searchInput = document.querySelector(".#search");
let lists = dropDownList.querySelector(".list");

selectBts.addEventListener("click", () => {
  container.classList.toggle("active");
});
