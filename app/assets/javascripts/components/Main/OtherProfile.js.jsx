var OtherProfile = React.createClass({
  getInitialState(){
    return {
      date : ''
    }
  },

  componentWillMount(){
    defaultDate = new Date(this.props.user.dob);
    birthdate = defaultDate.getDate()+"-"+months[defaultDate.getMonth()]+"-"+defaultDate.getFullYear();
    this.setState({
      date: birthdate
    });

  },

  render(){
    return(
      <div id="main">
        <div className="header">
          <h1>Profile</h1>
          <h2>{this.props.user.name}</h2>
        </div>

        <div className="content">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <div className="l-box">
                <img className="pure-img-responsive"
                  src={"https://graph.facebook.com/" +
                  this.props.user.facebook_id +
                  "/picture?width=500"}
                />
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-1-2">
              <h3 className="content-subhead">
                {this.props.user.tagline}
              </h3>
              <span dangerouslySetInnerHTML={this.createMarkup()}/>
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
                  <td>{this.props.user.name}</td>
                </tr>
                <tr>
                  <td>Place of Birth</td>
                  <td>{this.props.user.pob}</td>
                </tr>
                <tr className="pure-table-odd">
                  <td>Date of Birth</td>
                  <td>{this.state.date}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{this.props.user.address}</td>
                </tr>
                <tr className="pure-table-odd">
                  <td>Phone</td>
                  <td>{this.props.user.phone}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.props.user.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="content">
          <p></p>
          <div className="pure-g">
            <div className="pure-u-1">
              <button className="pure-button pure-button-primary pure-right" onClick={this.close}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  },

  close(){
    window.history.back();
  },

  createMarkup(){
    return {
      __html: this.props.user.about
    };
  }
});
