<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="form">
        <h1>Forms concept</h1>
        <h3> Name : <input id="name" /></h3>
        <h3> Email : <input id="email" /></h3>
        <h3> Password : <input id="pass" /></h3>
        <h3> Confirm Password : <input id="cpass" /></h3>
        <button id="sub"> Click </button>
    </form>
    <script>
        const object = {
            name: "",
            email:"",
            password:""
        };
        const form = document.getElementById("form");
           const nameInput = document.getElementById(object.name);
              const emailInput = document.getElementById(object.email);
                const passwordInput = document.getElementById(object.password);
                   const cpasswordInput = document.getElementById("cpass");

        // One handleChange function for all inputs
        // form.addEventListener("input", (event) => {
        // const { id, value } = event.target;
        // formData[id] = value;   // update object dynamically
        // console.log(formData);  // see live updates
        // });


        form.addEventListener("submit", (event)=>{
            event.preventDefault();

            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;
            const cpassword = cpasswordInput.value;

            //const { name, email, password, cpass } = formData;

            if(name === ""){
                alert(" Name is Required");
                return;
            }
            if(!email.includes("@")){
                alert("Email should contain @");
                return;
            }
            if(password < 8){
               alert("Password should contain atleast 9 characters");
               return;
            }
            if(password !== cpassword){
                alert("Passwords Should Match");
                return;
            }
            alert("Success");

        })
    </script>
</body>
</html>