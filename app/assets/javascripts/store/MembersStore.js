var MembersStore = {

  members: [],

  getAll(){
    return this.members;
  },

  insertAll(items){
    this.members = items;
  }

}
