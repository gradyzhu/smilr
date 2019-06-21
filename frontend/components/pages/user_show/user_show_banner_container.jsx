import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/session_actions';

const UserShowBanner = props => {
  const { user, userId, fetchUser } = props;

  useEffect(() => {
    fetchUser(userId);
  }, [ userId ]);

  if (!user) return null;

  return (
    <div className="user-banner-container index-flex-center-col">
      <div className="user-banner flex-col-bottom">
        <div className="user-details-columns flex-row-left">
          <div className="user-avatar flex-col-center">
            <div className="user-avatar-image-well">
            </div>
          </div>
          <div className="user-details-wrap flex-col-center">
            <div className="user-details flex-col-left-text">
              <div className="username">
                <h1 className="username-text">{user.username}</h1>
              </div>
              <div className="followers flex-row-left">
                <div className="border flex-col-center">
                  <h1 className="followers-text">{user.email}</h1>
                </div>
                <div className="border flex-col-center">
                  {/* <h1 className="followers-text">17 Followers</h1> */}
                </div>
                <div className="border flex-col-center">
                  {/* <h1 className="followers-text">32 Followers</h1> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mstp = ({entities: {users}}, ownProps) => {
  let userId = ownProps.userId;

  return ({
    user: users[userId],
    userId: ownProps.userId
  });
};

const mdtp = (dispatch) => {
  return ({
    fetchUser: (id) => dispatch(fetchUser(id)),
  });
};

export default connect(mstp, mdtp)(UserShowBanner);
