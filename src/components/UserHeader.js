import React, { useEffect } from "react";
import { connect, Connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {
  return <div className="header">{props.user?.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
