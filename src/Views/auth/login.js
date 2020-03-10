import React, { Component } from 'react'
import '../../loginStyle.css'

export default class login extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <div className="form-group offset-lg-4 col-lg-4">
                <label htmlFor ="userName">User Name</label>
                <input type="text"
                       id="userName"
                       className="form-control roundCornerInput"
                       name="userName" 
                       placeholder="user name"
                      
                ></input>
                </div>
                <div className="form-group offset-lg-4 col-lg-4">
                <label htmlFor ="password">Password</label>
                <input type="text"
                       id="password"
                       className="form-control roundCornerInput"
                       name="password" 
                       placeholder="password"
                ></input>
                </div>
                <div className="form-group offset-lg-4 col-lg-4">
                <button className="btn btn-success roundCornerBtn"
                type="submit"
                >Login</button>
                </div>
                </form>
            </div>
        )
    }
}
