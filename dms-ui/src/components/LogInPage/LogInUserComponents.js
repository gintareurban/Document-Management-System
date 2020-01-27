import React from "react";
import { Link } from "react-router-dom";


const LogInUserComponent = ({
  handleUserNameChange,
  handleUserPasswordChange,
  handleUserLogin,
  userName,
  userPassword
})=>{
    return(
      <div className="row">
        <div className="d-flex justify-content-center align-items-center mx-auto col-6">
          <div className="shadow-sm p-3 mb-5 bg-light rounded col-6">
            <div className="col-12">
              <ul className="logNav mr-auto mt-2 mt-lg-0 d-flex justify-content-center align-items-center">
                <li className="nav-item">
                  <Link className="col-2" to="/">
                    <button 
                      type="button" 
                      className="btn btn-secondary">
                        User
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="col-2" to="/admin">
                    <button 
                      type="button" 
                      className="btn btn-secondary">
                        Admin
                    </button>
                  </Link>
                </li>
              </ul>
            </div>                    
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">User name:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  onChange={handleUserNameChange}
                  value={userName}>
                </input>                               
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="exampleInputPassword1"
                  onChange={handleUserPasswordChange}
                  value={userPassword}>                      
                </input>
              </div> 
              <div className="d-flex justify-content-center">                           
                <button 
                  onClick={handleUserLogin} 
                  type="submit" 
                  class="btn btn-secondary">
                    Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};
export default LogInUserComponent;