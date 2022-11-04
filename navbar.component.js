import React from "react";
const Navbar = () =>{
    return(
        <>
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid" id="nav">
        <a class="navbar-brand" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZOe4WM1aSOWGDOI75r9pOrV6Pc9ZRIzfnA&usqp=CAU.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
            AGRO-22 
          </a> <p></p>
          <div></div>
          <a class="navbar-brand" href="#">HOME</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item navbar-expand-lg navbar-light">
            <a class="nav-link active" aria-current="page" href="#" >About us</a>
            </li>

            <li class="navbar-expand-lg navbar-light">
            <a class="nav-link active" href="#">Login</a>
            </li>

            <li class="navbar-expand-lg navbar-light ">
            <a class="nav-link active" href="#">Feedback</a>
            </li>
          </ul>
        </div>
  </div>
</nav>
        </>
    )
}
export default  Navbar;