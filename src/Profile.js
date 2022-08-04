import React from 'react'

function Profile(props) {
  // Declare the props for the user
  const user = props.user;
    
  // Display the profile of the user based on the user props received
  let displayProfile= 
    <div>
      <p>Welcome {user.name} {user.surname}</p>
      <img src = {user.profileImg} alt = {user.name + " " + user.surname} className ="profilePhoto"/>
      <table className="table-bordered">
        <tbody>
          <tr>
            <td>Date of birth:</td>
            <td>{user.date_of_birth}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{user.address}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>E-Mail:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Contact Number:</td>
            <td>{user.telephone}</td>
          </tr>
          <tr>
            <td>Employer:</td>
            <td>{user.company}</td>
          </tr>
        </tbody>
      </table>
    </div>;

// 
  return (displayProfile)
}

export default Profile