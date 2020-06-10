import React from "react";

const UserProfile = () => {
  return (
      <>
          <div className="row">
          <div className="col-md-4">
            <div className="card card-user">
              <div className="image">
                <img src="../assets/img/damir-bosnjak.jpg" alt="..."/>
              </div>
              <div className="card-body">
                <div className="author">
                  <a href="#">
                    <img className="avatar border-gray" src="../assets/img/mike.jpg" alt="..."/>
                    <h5 className="title">Chet Faker</h5>
                  </a>
                  <p className="description">
                    @chetfaker
                  </p>
                </div>
                <p className="description text-center">
                  "I like the way you work it <br/>
                  No diggity <br/>
                  I wanna bag it up"
                </p>
              </div>
              <div className="card-footer">
                <hr/>
                <div className="button-container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-6 ml-auto">
                      <h5>12<br/><small>Files</small></h5>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
                      <h5>2GB<br/><small>Used</small></h5>
                    </div>
                    <div className="col-lg-3 mr-auto">
                      <h5>24,6$<br/><small>Spent</small></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Team Members</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled team-members">
                  <li>
                    <div className="row">
                      <div className="col-md-2 col-2">
                        <div className="avatar">
                          <img src="../assets/img/faces/ayo-ogunseinde-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive"/>
                        </div>
                      </div>
                      <div className="col-md-7 col-7">
                        DJ Khaled
                        <br />
                        <span className="text-muted"><small>Offline</small></span>
                      </div>
                      <div className="col-md-3 col-3 text-right">
                        <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope"></i></btn>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-2 col-2">
                        <div className="avatar">
                          <img src="../assets/img/faces/joe-gardner-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive"/>
                        </div>
                      </div>
                      <div className="col-md-7 col-7">
                        Creative Tim
                        <br />
                        <span className="text-success"><small>Available</small></span>
                      </div>
                      <div className="col-md-3 col-3 text-right">
                        <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope"></i></btn>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-2 col-2">
                        <div className="avatar">
                          <img src="../assets/img/faces/clem-onojeghuo-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive"/>
                        </div>
                      </div>
                      <div className="col-ms-7 col-7">
                        Flume
                        <br />
                        <span className="text-danger"><small>Busy</small></span>
                      </div>
                      <div className="col-md-3 col-3 text-right">
                        <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope"></i></btn>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-user">
              <div className="card-header">
                <h5 className="card-title">Edit Profile</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-5 pr-1">
                      <div className="form-group">
                        <label>Company (disabled)</label>
                        <input type="text" className="form-control" disabled="" placeholder="Company" value="Creative Code Inc."/>
                      </div>
                    </div>
                    <div className="col-md-3 px-1">
                      <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" value="michael23"/>
                      </div>
                    </div>
                    <div className="col-md-4 pl-1">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Email"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Company" value="Chet"/>
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" value="Faker"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Home Address" value="Melbourne, Australia"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 pr-1">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="City" value="Melbourne"/>
                      </div>
                    </div>
                    <div className="col-md-4 px-1">
                      <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" placeholder="Country" value="Australia"/>
                      </div>
                    </div>
                    <div className="col-md-4 pl-1">
                      <div className="form-group">
                        <label>Postal Code</label>
                        <input type="number" className="form-control" placeholder="ZIP Code"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>About Me</label>
                        <textarea className="form-control textarea">Oh so, your weak rhyme You doubt I'll bother, reading into it</textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="update ml-auto mr-auto">
                      <button type="submit" className="btn btn-primary btn-round">Update Profile</button>
                    </div>
                  </div>
                
              </form>
              </div>
            </div>
          </div>
        
      </div>
          </>
  );
};

export default UserProfile;
