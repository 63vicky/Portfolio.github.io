const searchFun = () => {
  let input = document.getElementById("search_bar").value.toUpperCase();

  let tr = document.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let textValue = td.textContent || td.innerHTMl;

      if (textValue.toUpperCase().indexOf(input) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
