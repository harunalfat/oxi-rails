var SideTab = React.createClass({
  componentDidMount(){
    $.getScript('js/ui.js');
  },

  logoutClick(){
    window.location = "/logout";
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
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Members</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">My Profile</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Services</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link" onClick={this.logoutClick}>Logout</a></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
});
