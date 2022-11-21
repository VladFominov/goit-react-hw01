// import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListMain } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListMain>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}{' '}
    </FriendListMain>
  );
};

// FriendList.PropTypes = {
//   avatar: PropTypes.string,
// };
