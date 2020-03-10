import React, { Component } from 'react'

export default class register extends Component {
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
                <label htmlFor ="email">Email </label>
                <input type="text"
                       id="email"
                       className="form-control roundCornerInput"
                       name="email" 
                       placeholder="Email"
                      
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
                <label htmlFor ="confPass">Conferm password</label>
                <input type="text"
                       id="confPass"
                       className="form-control roundCornerInput"
                       name="confPass" 
                       placeholder="enter password again"
                      
                ></input>
                </div>
                <div className="form-group offset-lg-4 col-lg-4">
                <button className="btn btn-success roundCornerBtn"
                type="submit"
                >Register</button>
                </div>
                </form>
            </div>
        )
    }
}
