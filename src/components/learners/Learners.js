import React from 'react';
import './learners.css';


function Learners() {
  return (
    <div class="learners">
        <div className="div1 container-sm">
    <h3 className='learnersside' style={{}}>Learners Side</h3>
    <h1 className='youcanlearn'>You Can Learn Anything</h1>
    <p>Start growing your career by building a deep understanding in</p>
    <p className='coursenames'><b>FULLSTACK DEVELOPMENT, CYBER SECURITY, 
        DATA SCIENCE AND ANALYTICS, SOFTWARE TESTING</b></p>
    <button type="button" class="coursebtn btn btn-info">Learner's Start Here</button>
        </div>
        <div className="div2 container">
        <section class="h-100 h-custom" style={{backgroundColor: "#8fc4b7"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form class="px-md-2">

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Name</label>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline datepicker">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleDatepicker1"
                    />
                    <label for="exampleDatepicker1" class="form-label">Select a date</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <select class="select">
                    <option value="1" disabled>Gender</option>
                    <option value="2">Female</option>
                    <option value="3">Male</option>
                    <option value="4">Other</option>
                  </select>

                </div>
              </div>

              <div class="mb-4">

                <select class="select">
                  <option value="1" disabled>Class</option>
                  <option value="2">Class 1</option>
                  <option value="3">Class 2</option>
                  <option value="4">Class 3</option>
                </select>

              </div>

              <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div class="col-md-6">

                  <div class="form-outline">
                    <input type="text" id="form3Example1w" class="form-control" />
                    <label class="form-label" for="form3Example1w">Registration code</label>
                  </div>

                </div>
              </div>

              <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    </div>
  )
}

export default Learners