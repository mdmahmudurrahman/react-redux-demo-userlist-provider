import React, {Component} from "react";
import {connect} from "react-redux";

class UserDetail extends Component{
  render(){
    if(!this.props.user){
      return (<h3>Select a user</h3>);
    }
      return(
        <div>
          <img src="{this.props.user.thumbnail}" />
          <h4>{this.props.user.first}{this.props.user.last}</h4>
            <h5>{this.props.user.age}</h5>
            <h5>{this.props.user.description}</h5>
        </div>
      );
  }

}

function mapStateToProps(state){
  return{
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
