import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectUser} from "../actions/index";

class UserList extends Component{

  createListItems(){
    return this.props.users.map((user) => {
      return(
        // any time you make a list item, each of this item has to have a
        // unique key
        <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
      );
    });
  }

  render(){
    return(
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

//it takes a piece of my application store, that is a state and passes it
//to a component as a property
function mapStateToProps(state){
      // there may be many reducer in the state
      console.log(state);
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

// export default UserList;
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
