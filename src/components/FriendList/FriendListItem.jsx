import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendIsOnline,
  FriendListImg,
  FriendListName,
  FriendIsOffline,
} from '../FriendList/FriendList.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? (
        <FriendIsOnline status={isOnline}>{isOnline}</FriendIsOnline>
      ) : (
        <FriendIsOffline status={isOnline}>{isOnline}</FriendIsOffline>
      )}
      <FriendListImg src={avatar} alt="User avatar" width="48" />
      <FriendListName>{name}</FriendListName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};