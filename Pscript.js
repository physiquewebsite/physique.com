
function sub1()
        {
             var inputPswrd = document.getElementById("psw").value;
            var fixPswrd = "5030@cs";
            if(inputPswrd==fixPswrd) {
                alert("Login Successful!");
            }
            else {
                alert("Wrong password! Login Failed.");
            }
        }



(function(){
        var imgLen = document.getElementById('imgGallary');
        var images = imgLen.getElementsByTagName('img');
        var counter = 1;

        if(counter <= images.length){
            setInterval(function(){
                images[0].src = images[counter].src;

                counter++;

                if(counter === images.length){
                    counter = 1;
                }
            },4000);
        }
})();



