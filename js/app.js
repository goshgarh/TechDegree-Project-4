     function myFunction() {
    var input, filter, x, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    x = document.getElementsByClassName('lightboxgallery-gallery-item');
    for (i = 0; i < x.length; i++) {
          a = x[i].getElementsByClassName("span1")[0];
        
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            x[i].style.display = "";
        } else {
            x[i].style.display = "none";

        }
    }
}
      
