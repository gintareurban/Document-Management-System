import React from "react";
import { Link } from "react-router-dom";

const LogInAdminComponent = ({
  handleAdminNameChange,
  handleAdminPasswordChange,
  handleAdminLogIn,
  adminName,
  adminPassword
}) => {
  return (
    <div className="row">
      <div className="d-flex justify-content-center align-items-center mx-auto col-6">
        <div className="shadow-sm p-3 mb-5 bg-light rounded col-6">
          <div className="col-12">
            <ul className="logNav mr-auto mt-2 mt-lg-0 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="col-2" to="/">
                  <button                    
                    type="button"
                    className="btn btn-secondary"
                    id="userLoginSelection"
                  >
                    User
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="col-2" to="/admin">
                  <button                    
                    type="button"
                    className="btn btn-secondary"
                    id="adminLoginSelection"
                  >
                    Admin
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Administrator name:</label>
              <input
                type="text"
                className="form-control"
                id="inputAdminNameLogin"
                aria-describedby="emailHelp"
                onChange={handleAdminNameChange}
                value={adminName}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Administrator Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="inputAdminPasswordLogin"
                onChange={handleAdminPasswordChange}
                value={adminPassword}
              ></input>
            </div>
            <div className="d-flex justify-content-center">
            <Link className="" to="/adminhomepage-users">
                <button
                  onClick={handleAdminLogIn}
                  type="submit"
                  className="btn btn-danger"
                  id="adminLoginButton"
                >
                  Log In As Administrator
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogInAdminComponent;


// Login as administrator mygtukas padarytas su Linku, kad butu patogiau dirbti kuriant admin interface