import React from 'react';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Add from '../Add/Add';

function Display(props) {
  console.log(props.data);
  const { empDetails,setdeleteId,seteditDetail } = props.data
  // console.log(empDetails);
  
  return <div>
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4">  
  <Link exact="true" to="/" className='mr-4 p-2 ' id='link' ><h5>EMS</h5></Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <Link className="nav-link"  id='links' to="/employees" >Employees</Link>
      <li className="nav-item">
        <Link className="nav-link" id='links' to="/add_employee">Add Employee</Link>
      </li>
    </ul>
    
  </div>
</nav>
<Route path="/add_employee" component={Add} />
{/* <Route path="/Add Employee" component={Add} /> */}
<Route path="/employees" component={Display} />
    <table className="table table-bordered m-auto col-11 table-dark text-left">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
          <th>Salary</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      
{empDetails.map((emp,inx)=>{
 return <tr key={inx}>
          <th>{emp.name}</th>
          <td>{emp.age}</td>
          <td>{emp.job}</td>
          <td>{emp.salary}</td>
          <td><button className="btn btn-warning" onClick={()=>{seteditDetail({...emp})}}>Edit</button></td>
          <td><button className="btn btn-primary" onClick={()=>{setdeleteId(inx)}}>Delete</button></td>
        </tr>
})}
    </table>
    </BrowserRouter>
  </div>;
}

export default Display;