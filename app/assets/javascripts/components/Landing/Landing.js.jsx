var Landing = React.createClass({
  render(){
    return (
      <div className="splash-container">
          <div className="splash">
              <h1 className="splash-head">OXI-DB</h1>
              <p className="splash-subhead">
                  Keep Us Connect to Each Other
              </p>
              <div className="load-container load8">
                <div id="spinner" className="off"/>
              </div>
              <p>
                  <FacebookLoginButton/>
              </p>
          </div>
      </div>
    );
  }
});
