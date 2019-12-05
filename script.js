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
        $('.pickedlogo').keyup(function() {
            $('#logo').attr("src",  $(this).val() );
        })


        $('#textCheckbox1').on('click',function(){
            if($(this).is(':checked'))        {$('.cta1').addClass('none')}
            else{$('.cta1').removeClass('none')}
        });
        $('#textCheckbox2').on('click',function(){
            if($(this).is(':checked'))        {$('.cta2').addClass('none')}
            else{$('.cta2').removeClass('none')}
        });

});

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight)+"px";
}