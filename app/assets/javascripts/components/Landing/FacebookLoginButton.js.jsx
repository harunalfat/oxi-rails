var FacebookLoginButton = React.createClass({
  loginClick(){
    $("#flb").css("visibility","hidden");
    $("#spinner").addClass("loader");
    window.location.href = "/auth/facebook";
  },
  render(){
    return (
      <a id="flb" href="#" className="pure-button-land pure-button-primary-land" onClick={this.loginClick}>
        Facebook Login
      </a>
    );
  }
});
