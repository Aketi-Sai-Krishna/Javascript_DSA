// There  are five menthods to change the content of DOM. 

// 1.getElementsById();
// 2.getElementsByClassName();
// 3.getElementsByTagName();
// 4.querySelector();
// 5.querySelectorAll();



// 1.

<h1 id="title">Hello</h1>

const title = document.getElementById('title');
 title.textContent = "Welcome";

 //2.

 <p class="msg">One</p>
 <p class="msg">Two</p>

 const tag = document.getElementsByClassName("msg");
 console.log(tag);

 //3.

 <h2 id="name">Sai</h2>
 const name = document.getElementById("name");
 name.textContent = "Sai Krishna";

 //4.

 <div id="container"></div>

 const cont = document.getElementById("container");
 cont.innerHTML= "<h1> Hello World </h1>";

 //5.

 <p id="count">0</p>

 const count = document.getElementById("count");

count.innerHTML = 100;








