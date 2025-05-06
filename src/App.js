import React, { Component } from 'react';


class App extends Component {

  state = {

    data: {
      fullName: "",
      Address: "",
      contactNumber: "",
      Email: "",

    },

    sumbittedData: []
  }

  handleChange(e) {
    let { name, value } = e.target;
    let { data } = this.state;
    data[name] = value
    console.log("@__data", data)

    this.setState({
      data
    })


    /* if(name === "fullName"){
      this.setState({
        fullName: value
      })
    } 
    if(name === "Address"){
      this.setState({
        Address: value
      })

    }
 */
  }

  handleSubmit() {
    let { sumbittedData, data } = this.state;
    let { fullName, Address, contactNumber, Email } = data;
    let formArry;

    if ((fullName !== "") && (Address !== "")) {
      sumbittedData.push({
        id: sumbittedData.length + 1,
        enterName: fullName,
        permanentAddress: Address,
        enterNumber: contactNumber,
        enterEmail: Email
      })

      this.setState({
        sumbittedData
      })
    }
  }

  render() {
    let {sumbittedData}=this.state;

    return (

      <div className='form-container mx-5 mt-5'>

        <div>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text"
              name="fullName"
              value={this.state.fullName}
              className="form-control"
              onChange={(e) => this.handleChange(e)}
            required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text"
              name="Address" value={this.state.Address}
              className="form-control"
              onChange={(e) => this.handleChange(e)}
            required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text"
              name="Email" value={this.state.Email}
              className="form-control"
              onChange={(e) => this.handleChange(e)}
             required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input type="number"
              name='contactNumber' value={this.state.contactNumber}
              className="form-control"
              onChange={(e) => this.handleChange(e)}
             required/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button>
        </div>

        {sumbittedData.length>0 &&
        <div className='pt-5'>
          <table className="table" border="1">
            <thead border="1">
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Address</th>
                <th>Email Address</th>
                <th>Contact Number</th>                
              </tr>
            </thead>
            <tbody border="1">
              {sumbittedData.map((items)=>{
                let{id, enterName, permanentAddress, enterNumber, enterEmail}=items
                return <tr border="1">
                  <td>{id}</td>
                  <td>{enterName}</td>
                  <td>{permanentAddress}</td>
                  <td>{enterNumber}</td>
                  <td>{enterEmail}</td>
                </tr>
              })}

            </tbody>
          </table>
        </div>
        }
      </div>

    )
  }
}



export default App;