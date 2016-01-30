var Layout = React.createClass({
  getInitialState(){
    return {
      maintab: <MainTab changeMainTab={this.changeMainTab}/>
    }
  },

  render(){
    return(
      <div id="layout">
        <SideTab changeMainTab={this.changeMainTab}/>
        {this.state.maintab}
      </div>
    );
  },
  changeMainTab(component){
    this.setState({
      maintab: component
    });
  }
});
