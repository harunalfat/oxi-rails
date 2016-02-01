var SearchTab = React.createClass({
  render(){
    return(
      <form className="pure-form pure-g">
          <input type="text" onChange={this.doChange} placeholder="Search members..." className="pure-input-rounded pure-u-1"/>
      </form>
    );
  },

  doChange(){
    $('form').on('keyup keypress', function(e) {
      var code = e.keyCode || e.which;
      if (code == 13) {
        e.preventDefault();
        return false;
      }
    });
    var wto;
    search = this.props.doSearch;
    $("input").keyup(
      function(){
        search($("input").val())
      }
    );
  }
});
