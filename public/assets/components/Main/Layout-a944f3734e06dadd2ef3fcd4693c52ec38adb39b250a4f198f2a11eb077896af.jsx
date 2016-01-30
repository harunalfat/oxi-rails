var Layout = React.createClass({
  render(){
    return(
      <div id="layout">
        <link rel="stylesheet" href="stylesheets/side-menu.css"/>
        <link rel="stylesheet" href="stylesheets/polaroid.css"/>
        <SideTab/>
        <MainTab user={this.props.user}/>
      </div>
    );
  }
});
