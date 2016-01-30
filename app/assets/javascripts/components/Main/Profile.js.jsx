var Profile = React.createClass({
  getInitialState(){
    return {
      user : []
    }
  },

  componentWillMount(){
    serverRequest = $.get("api/me",function(result){
      this.setState({
        user: result
      });
    }.bind(this));
  },

  render(){
    return(
      <div id="main">
        <div className="header">
          <h1>Profile</h1>
          <h2>{this.state.user.name}</h2>
        </div>

        <div className="content">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <div className="l-box">
                <img className="pure-img-responsive"
                  src={"http://graph.facebook.com/" +
                  this.state.user.id +
                  "/picture?width=500"}
                />
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-1-2">
              <h3 className="content-subhead">Alfat Saputra Harun, Software Engineer di Veritrans Indonesia</h3>
              <p align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <h3 className="pure-center">Personal Info</h3>
          <p/>
          <div className="pure-g">
            <div className="pure-u-1">
              <table className="pure-table pure-table-horizontal pure-center">
                <tbody>
                  <tr className="pure-table-odd">
                    <td>Name</td>
                    <td></td>
                    <td>{this.state.user.name}</td>
                  </tr>
                  <tr>
                    <td>Place of Birth</td>
                    <td> </td>
                    <td>Date of Birth</td>
                  </tr>
                  <tr className="pure-table-odd">
                    <td>Date of Birth</td>
                    <td> </td>
                    <td>Date of Birth</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td> </td>
                    <td>Date of Birth</td>
                  </tr>
                  <tr className="pure-table-odd">
                    <td>Phone</td>
                    <td> </td>
                    <td>Date of Birth</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td> </td>
                    <td>Date of Birth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p></p>
          <div className="pure-g">
            <div className="pure-u-1">
              <button className="pure-button pure-button-primary pure-right" onClick={this.edit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  },

  edit(){
    this.props.changeMainTab(<EditProfile user={this.state.user} changeMainTab={this.props.changeMainTab}/>);
  }
});
