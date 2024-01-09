<script>
    
function createuser () {
    
    var email =form.email.value;
    var password = form.pswrd.value;
    var firstname = form.first_name.value;
    var lastname = form.last_name.value;

   document.getElementById('welcome').innerHTML = "Welcome ";
   
   const login = 'http://localhost:1337/users/register'
   
   fetch(login, {

   method: "POST",
   headers: {
         Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
         },
   body:  JSON.stringify({email:email,password:password,password2:password,first_name:firstname,last_name:lastname,}),
})


                    }


</script>
