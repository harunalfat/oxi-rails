var overflowVisible = {
  overflow: 'visible'
};
var MainTab = React.createClass({
  getInitialState(){
    return {
      members: []
    }
  },
  componentDidMount(){
    this.serverRequest = $.get("api/members",function(result){
      this.setState({
        members: result
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render(){
    changeMainTab = this.props.changeMainTab;
    return (
      <div id="main">
          <div className="header">
              <h1>OXIGEN</h1>
          </div>
          <div className="content">
            <p/>
            <SearchTab doSearch={this.doSearch}/>
            <ul className="polaroids pure-g">
              {
                this.state.members.map(function(member){
                  return <ProfPic doClick={changeMainTab} key={member.facebook_id} data={member}/>;
                })
              }
            </ul>
          </div>

      </div>
    );
  },

  doSearch(query){
    this.serverRequest = $.get("api/members?search="+query,function(result){
      this.setState({
        members: result
      });
    }.bind(this));
  }
});
