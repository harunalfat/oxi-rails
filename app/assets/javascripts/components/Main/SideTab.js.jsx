var SideTab = React.createClass({
  logoutClick(){
    $("#spinner").addClass("loader");
    window.location.href = "/logout";
  },
  componentDidMount(){
    $.getScript("js/ui.js");
  },
  render(){
    return (
      <div>
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>
        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">
                  OXI-DB
                </a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><a href="#" onClick={this._goToMembers} className="pure-menu-link">Members</a></li>
                    <li className="pure-menu-item"><a href="#" onClick={this._goToProfile} className="pure-menu-link">My Profile</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link" onClick={this.logoutClick}>Logout</a></li>
                </ul>
                <div className="load-container load8">
                  <div id="spinner" className="off"/>
                </div>
            </div>
        </div>
      </div>
    );
  },

  _goToProfile(){
    this.props.changeMainTab(<Profile changeMainTab={this.props.changeMainTab}/>);
  },
  _goToMembers(){
    this.props.changeMainTab(<MainTab changeMainTab={this.props.changeMainTab}/>);
  }

});
