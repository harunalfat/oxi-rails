var ProfPic = React.createClass({
  getInitialState(){
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    return{
      width: window.innerWidth - 100,
      height: window.innerHeight - 50,
      baseUrl: baseUrl
    }
  },

  render(){
    return(
      <li className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2">
        <a className="trig-pop"
          href={this.state.baseUrl+"members/" +
            this.props.data.facebook_id+"?pw=360&ph="+this.state.height}
            title={this.props.data.name}>
          <img className="pure-img-responsive"
            src={"https://graph.facebook.com/" +
            this.props.data.facebook_id +
            "/picture?type=large"} />
        </a>
      </li>
    );
  }
});
