var FacebookLoginButton = React.createClass({
  loginClick(){
    window.location = "/auth/facebook";
  },
  render(){
    return (
      <a href="#" className="pure-button pure-button-primary" onClick={this.loginClick}>
        Login with Facebook
      </a>
    );
  }
});
