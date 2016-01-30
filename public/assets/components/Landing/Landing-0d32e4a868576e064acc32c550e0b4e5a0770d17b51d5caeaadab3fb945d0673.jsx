var Landing = React.createClass({
  render(){
    return (
      <div className="splash-container">
          <link rel="stylesheet" href="stylesheets/marketing.css"/>
          <div className="splash">
              <h1 className="splash-head">OXI-DB</h1>
              <p className="splash-subhead">
                  Keep Us Connect to Each Other
              </p>
              <p>
                  <FacebookLoginButton/>
              </p>
          </div>
      </div>
    );
  }
});
