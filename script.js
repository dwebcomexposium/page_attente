$( document ).ready(function() {

        $(".changeimagefix").click(function() {  //use a class, since your ID gets mangled
          $(".jumbotron").toggleClass("imagefix").removeClass("imagegif");     //add the class to the clicked element
        });
        $(".changeimagegif").click(function() {  //use a class, since your ID gets mangled
            $(".jumbotron").toggleClass("imagegif").removeClass("imagefix");      //add the class to the clicked element
          });
          $(".setting").click(function() {  //use a class, since your ID gets mangled
            $(".containeroptions").toggleClass("settingopen");      //add the class to the clicked element
          });

          $('.pickedColor').keyup(function() {
            $('body').get(0).style.setProperty("--main-color", $(this).val());
        })
        $('.pickedColorcolorheader').keyup(function() {
            $('body').get(0).style.setProperty("--color-hero", $(this).val());
        })
        $('.imagePicker').keyup(function() {
            $('body').get(0).style.setProperty("--main-image", "url('" + $(this).val() + "')");
        }) 

});