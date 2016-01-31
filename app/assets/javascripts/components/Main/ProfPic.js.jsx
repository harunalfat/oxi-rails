var ProfPic = React.createClass({
  componentDidMount(){
    comp = this.state.modal;
    options = {
      content : '<h1>This is some HTML</h1>',
      type : 'html'
    };
    $("#trig-pop"+this.props.data.facebook_id).popup();
  },

  getInitialState(){
    return{
      width: window.innerWidth - 100,
      height: window.innerHeight - 50
    }
  },

  render(){
    return(
      <li className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
        <a id={"trig-pop"+this.props.data.facebook_id}
          href={"http://192.168.43.21:3000/members/" +
            this.props.data.facebook_id+"?pw=360&ph="+this.state.height}
            title={this.props.data.name}>
          <img className="pure-img-responsive"
            src={"http://graph.facebook.com/" +
            this.props.data.facebook_id +
            "/picture?type=large"} />
        </a>
      </li>
    );
  }
});
