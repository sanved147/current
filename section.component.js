import React from "react";
const Section = () =>{
    return(
        <>
        <div  id="body">
 
        <div class="services pd">
      <div>
        <h3 class="title">HOME</h3>
        <div class="row text-center">
          <div class="col-md-3">
            <div class="square"><i class="fas fa-code"></i></div>
            <div class="serv">
              <h5>AGRICULTURE & HORICULTURE CORNER </h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="serv">
              <div class="square"><i class="fas fa-cogs"></i></div>
              <h5>ANIMAL HUSBANDARY</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="square"><i class="fas fa-globe"></i></div>
            <div class="serv">
              <h5>MAP VIEW</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="square"><i class="fas fa-user-shield"></i></div>
            <div class="serv">
              <h5>WEATHER</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
        </>
    )
}
export default   Section;