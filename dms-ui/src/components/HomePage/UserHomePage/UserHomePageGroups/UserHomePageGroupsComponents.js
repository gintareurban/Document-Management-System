import React from "react";

import UserHomePageGroupsNavContainer from './UserHomePageGroupsNavContainer';
import UserHomePageGroupContainer from './UserHomePageGroupContainer';

const UserHomePageGroupsComponents = (
  {username}
  ) => {
    return (
        <div className="container">
            <div className="row col-12 shadow-sm p-3 mb-5 bg-light rounded justify-content-center"><h1>You logged in as: {username}</h1></div>
            <div className="row">
                <div className="col-lg-2 shadow-sm p-3 mb-5 bg-light rounded mr-4">
                  <UserHomePageGroupsNavContainer/>                    
                </div>
                <div className="row col-lg-9 shadow-sm p-3 mb-5 bg-light rounded">                  
                    <div className="col-12">
                      <UserHomePageGroupContainer/>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHomePageGroupsComponents;