var Profile = React.createClass({
  getInitialState(){
    return {
      user : [],
      date : ''
    }
  },

  componentDidMount(){
    serverRequest = $.get("api/me",function(result){
      defaultDate = new Date(result.dob);
      birthdate = defaultDate.getDate()+"-"+months[defaultDate.getMonth()]+"-"+defaultDate.getFullYear();
      this.setState({
        user: result,
        date: birthdate
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
                  src={"https://graph.facebook.com/" +
                  this.state.user.facebook_id +
                  "/picture?width=500"}
                />
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-1-2">
              <h3 className="content-subhead">
                {this.state.user.tagline}
              </h3>
              <span dangerouslySetInnerHTML={this.createMarkup()}/>
              Tes kontent
            </div>
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
                  <td>{this.state.user.name}</td>
                </tr>
                <tr>
                  <td>Place of Birth</td>
                  <td>{this.state.user.pob}</td>
                </tr>
                <tr className="pure-table-odd">
                  <td>Date of Birth</td>
                  <td>{this.state.date}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{this.state.user.address}</td>
                </tr>
                <tr className="pure-table-odd">
                  <td>Phone</td>
                  <td>{this.state.user.phone}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.user.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="content">
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
  },

  createMarkup(){
    return {
      __html: this.state.user.about
    };
  }
});
var Profile = React.createClass({
  getInitialState(){
    return {
      user : [],
      date : ''
    }
  },

  componentDidMount(){
    serverRequest = $.get("api/me",function(result){
      defaultDate = new Date(result.dob);
      birthdate = defaultDate.getDate()+"-"+months[defaultDate.getMonth()]+"-"+defaultDate.getFullYear();
      this.setState({
        user: result,
        date: birthdate
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
                  src={"https://graph.facebook.com/" +
                  this.state.user.facebook_id +
                  "/picture?width=500"}
                />
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-1-2">
              <h3 className="content-subhead">
                {this.state.user.tagline}
              </h3>
              <p dangerouslySetInnerHTML={this.createMarkup()}></p>
            </div>
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
                  <td>{this.state.user.name}</td>
                </tr>
                <tr>
                  <td>Place of Birth</td>
                  <td>{this.state.user.pob}</td>
                </tr>
                <tr className="pure-table-odd">
                  <td>Date of Birth</td>
                  <td>{this.state.date}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{this.state.user.address}</td>
                </tr>
                <tr className="pure-table-odd">
                  <td>Phone</td>
                  <td>{this.state.user.phone}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.user.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="content">
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
  },

  createMarkup(){
    return {
      __html: this.state.user.about
    };
  }
});
