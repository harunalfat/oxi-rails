var EditProfile = React.createClass({
  componentDidMount(){
    var editor = null;
    $.getScript("//cdn.ckeditor.com/4.5.6/basic/ckeditor.js",function(){
        editor = CKEDITOR.replace( 'editor1' );
    });
  },
  render(){
    return(
      <div id="main">
        <div className="header">
          <h1>Edit Profile</h1>
          <h2>{this.props.user.name}</h2>
        </div>
        <div className="content">
          <form id="editForm" className="pure-form pure-form-aligned">
            <fieldset>
              <div className="pure-control-group ">
                <label>Name<span style={{color:"red"}}>*</span></label>
                <input pattern="[A-Za-z\s]{2,}" name="name"
                  title="Alphabet only (max: 50)" maxLength="50"
                  required id="name" type="text"
                  placeholder="Name" defaultValue={this.props.user.name}/>
              </div>
              <div className="pure-control-group ">
                <label>Place of Birth<span style={{color:"red"}}>*</span></label>
                <input pattern="[A-Za-z.\s]{2,}" name="pob"
                  title="Alpahebet and dot only (max:20)" maxLength="20"
                  required id="pob" type="text"
                  placeholder="Place of birth"
                  defaultValue={this.props.user.pob}/>
              </div>
              <div className="pure-control-group ">
                <label>Date of Birth<span style={{color:"red"}}>*</span></label>
                <input
                  required id="dob" type="date" name="dob"
                  placeholder="Date of birth" defaultValue={this.props.user.dob}/>
              </div>
              <div className="pure-control-group ">
                <label>Address<span style={{color:"red"}}>*</span></label>
                <textarea required rows="5"
                  name="address" placeholder="Address" title="Max: 254"
                  maxLength="254" defaultValue={this.props.user.address}/>
              </div>
              <div className="pure-control-group ">
                <label>Email<span style={{color:"red"}}>*</span></label>
                <input required name="email"
                  id="email" type="email"
                  placeholder="Email" defaultValue={this.props.user.email}/>
              </div>
              <div className="pure-control-group ">
                <label>Phone</label>
                <input id="phone" name="phone" title="Phone number only"
                  pattern="[()\d+-\s]{2,}" maxLength="20"
                  type="text" placeholder="Phone"
                  defaultValue={this.props.user.phone}/>
              </div>
              <div className="pure-control-group ">
                <label>Tagline</label>
                <input id="tagline" name="tagline"
                  maxLength="40"
                  type="text" placeholder="Tagline"
                  defaultValue={this.props.user.tagline}/>
              </div>
              <div className="pure-control-group ">
                <label>About You</label>
                <textarea name="about" id="editor1" title="Max: 450"
                  maxLength="450" rows="10" cols="70"
                  defaultValue={this.props.user.about}/>
              </div>
            </fieldset>
          </form>
          <div className="pure-g">
            <div className="pure-u-1">
              <button id="save" className="pure-button pure-button-primary pure-right" onClick={this.save}>
                Save
              </button>
              <button className="pure-button pure-right" onClick={this.cancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  save(){
    editForm = $("#editForm");
    if (editForm[0].checkValidity()){
      formData = editForm.serializeArray();
      formData[7] = {
        name: "about",
        value: CKEDITOR.instances.editor1.getData()
      };
      serverRequest = $.ajax({
        type: "POST",
        url: "api/me/update",
        data: formData,
        dataType: "json",
        success: function(result){
          this.props.changeMainTab(<Profile changeMainTab={this.props.changeMainTab}/>);
          return false;
        }.bind(this),
        error: function(){
          alert("Something goes wrong, cannot submit...");
          return false;
        }
      });
    }
    else{
      alert("Please check your format");
    }

  },

  cancel(){
    this.props.changeMainTab(<Profile changeMainTab={this.props.changeMainTab}/>);
  }
});
