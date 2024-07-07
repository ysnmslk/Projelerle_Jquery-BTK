/*

 $(function () { 

         })
*/
  $(document).ready(function () { 
$("#btn_giris").click(function () { 
    $("#myUye").modal();
    /* $(selector).action()  */
 });
     });


//üye ol
$(function () { 
    $("#kayit_ol").click(function () { 
        $("#myUyeOl").modal();
     })
 })


//şifremi unuttum
    $(function () { 
        $("#sifremi_unuttum").click(function () { 
            $("#mySifreHatirlat").modal();
         })
     })
    

//Sepet
 $(function(){
     $("#sepet-id").click(function () { 
         $("#sepet-id-modal").modal();
      })
 })
    
//Button Back Top-
        $(function () { 
            $(window).scroll(function () { 
                 //console.log($(this).scrollTop());
                if($(window).scrollTop()>70){
                    $("#backTopButton").fadeIn();
                }else{
                    $("#backTopButton").fadeOut();   
                }
             });
           $("#backTopButton").on("click",function () { 
               $("body,html").animate({scrollTop:0},1500);
            });
            $("#backTopButtonOff").click(function () { 
               $("#backTopButton").off("click");
            });
         })
/*
delagate    -->  live    -->  bind     -->  on(güncel)
undelegate  -->  die     -->  unbind   -->  off(güncel)
*/
    



         /* form validation Jquery */
         $(function () { 
$("#btnSubmit").click(function () {  
    var email,phone,password,rePassword; //Camel Case
    email=$("#user_email").val();
    email=jQuery.trim(email);

    phone=$("#user_phone").val();
    phone=$.trim(phone);

    password=$("#user_password").val();
    password=password.trim(password);

    rePassword=$("#re_user_password").val();
    rePassword=rePassword.trim(rePassword);

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

if(rePassword==""){
    $("#re_validation_password").html("Şifre tekrarı boş geçilemez")
}else if(password!=rePassword){
    $("#re_validation_password").html("Şifreler birbirine uymuyor")
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

$(":text").focusin(function () {
    $(this).css("background-color","gold").css("color","white")
 })
 $(":text").blur(function () {
    $(this).css("background-color","#fff").css("color","black")
 })
 /*
 $(":text").setTimeout(() => {
     
 }, 5000);
 */
      });
//form end

      //autoComplete
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
    