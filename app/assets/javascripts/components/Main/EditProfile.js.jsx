var EditProfile = React.createClass({
  render(){
    return(
      <div id="main">
        <div className="header">
          <h1>Edit Profile</h1>
          <h2>{this.props.user.name}</h2>
        </div>
        <div className="content">
          <form className="pure-form pure-form-aligned pure-g">
            <fieldset>
              <div className="pure-control-group pure-u-1">
                <label>Name</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group pure-u-1">
                <label>Place of Birth</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group pure-u-1">
                <label>Date of Birth</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group pure-u-1">
                <label>Address</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group pure-u-1">
                <label>Email</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group pure-u-1">
                <label>Phone</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group pure-u-1">
                <label>Tagline</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group pure-u-1">
                <label>About You</label>
                <input id="name" type="text" placeholder="Username" defaultValue={this.props.user.name}/>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
});
