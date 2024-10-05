import React, { useState } from 'react'

const Viewall = () => {
  const [employData,changeEmployData]=useState(
    [
      {
        "slNo":1,"name":"Mathew","designation":"MSC","salary":20000,"dateOfJoining":"January 23"
      },
      {
        "slNo":2,"name":"Midhun","designation":"BSC","salary":12000,"dateOfJoining":"January 20"
      },
      {
        "slNo":3,"name":"Mervin","designation":"MSC","salary":34000,"dateOfJoining":"February 4"
      },
      {
        "slNo":4,"name":"Megha","designation":"BSC","salary":14000,"dateOfJoining":"May 23"
      },
      {
        "slNo":5,"name":"Miya","designation":"MSC","salary":46000,"dateOfJoining":"March 28"
      },
      {
        "slNo":6,"name":"Devi","designation":"BSC","salary":19000,"dateOfJoining":"December 3"
      },
      {
        "slNo":7,"name":"Revathi","designation":"MSC","salary":67000,"dateOfJoining":"April 14"
      },
      {
        "slNo":8,"name":"Devika","designation":"BSC","salary":10000,"dateOfJoining":"June 14"
      },
      {
        "slNo":9,"name":"Lekshmi","designation":"MSC","salary":56000,"dateOfJoining":"July 1"
      },
      {
        "slNo":10,"name":"Abijith","designation":"MSC","salary":55000,"dateOfJoining":"July 11"
      },
    ]
  )
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl.NO</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
      <th scope="col">Date of joinig</th>
    </tr>
  </thead>
  <tbody>
    
    {employData.map(
      (value,index)=>{
return <tr>
<th scope="row">{value.slNo}</th>
<td>{value.name}</td>
<td>{value.designation}</td>
<td>{value.salary}</td>
<td>{value.dateOfJoining}</td>
</tr>
      }
    )}
    
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
