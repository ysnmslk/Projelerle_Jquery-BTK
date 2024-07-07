$(function (){
    var autoComplete=[
        "ActionScript",
        "AppleScript",
        "Asp",
        "Ajax",
        "BASIC",
        "Bootstrap",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Css3",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Html5",
        "Java",
        "JavaScript",
        "Jquery",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source:autoComplete
    });
    });



    $(function () { 
        $("#btn_giris").click(function () { 
            $("#myUye").modal();
         });
     })
    /*  user_email  user_phone user_password*/
     /* form validation Jquery */
     $(function () { 
$("#btnSubmit").click(function () {  
    var email,phone,password;
    email=$("#user_email").val();
    email=jQuery.trim(email);

    phone=$("#user_phone").val();
    phone=$.trim(phone);

    password=$("#user_password").val();
    password=password.trim(password);
/*validation_email  validation_phone validation_password */
if(email==""){
        $("#validation_email").html("Email boş geçilemez")
  }else if(validateEmail(email)==false){
    $("#validation_email").html("Email'i uygun formatte giriniz");
  }
if(phone==""){
    $("#validation_phone").html("Telefon boş geçilemez")
}else if($.isNumeric(phone)==false){
    $("#validation_phone").html("Sayı girmelisiniz")
    }else if(validatePhone(phone)==false){
        $("#validation_phone").html("Telefon numarasını uygun formatta girmelisiniz")
    }
    
if(password==""){
    $("#validation_password").html("Şifre boş geçilemez")
}

/*validation Email regex */
function validateEmail(email){
    var regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

/*validation Phone number regex */
function validatePhone(telephoneNumber){
    var phone= /^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/;
    return phone.test(telephoneNumber);}

   
});

      });
/* **********************************************   */
$(function () { 
    $("#picture_1").tooltip();
    $("#btn_tooltip").tooltip();
 })