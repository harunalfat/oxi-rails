var ProfPic = React.createClass({
  componentDidMount(){
    comp = this.state.modal;
    options = {
      content : '<h1>This is some HTML</h1>',
      type : 'html'
    };
    $("a.popup").popup(options);
  },

  getInitialState(){
    return{
      modal: <PlainTab/>
    }
  },

  render(){
    return(
      <li className="pure-u-1-2 pure-u-md-1-4">
        <a className="popup" onClick={this._seeDetail} title={this.props.data.name}>
          <img
            src={"http://graph.facebook.com/" +
            this.props.data.facebook_id +
            "/picture?type=large"} />
        </a>
      </li>
    );
  },
  _seeDetail(){
//    component = <PlainTab/>;
//    this.props.doClick(component);
  }
});
