function filterCurrency() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-filter");
    filter = input.value.toUpperCase();
    ul = document.getElementById("filterable-list");
    li = ul.getElementsByTagName("li");
    for(i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// Change Add Favorite Icon 

let icon = document.getElementById("add-favorite");
let changeIcon = document.getElementsByClassName("fa-regular");



icon.addEventListener("click", () => {
   let x = document.getElementById("add-favorite");
});


