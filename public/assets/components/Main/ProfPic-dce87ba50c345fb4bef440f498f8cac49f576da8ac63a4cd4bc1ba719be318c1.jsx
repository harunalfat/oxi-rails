var ProfPic = React.createClass({
  render(){
    return(
      <li className="pure-u-1-4">
        <a href="http://www.flickr.com/photos/zurbinc/3971679981/" title={this.props.user.name}>
          <img alt={this.props.user.name} src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg"/>
        </a>
      </li>
    );
  }
});
