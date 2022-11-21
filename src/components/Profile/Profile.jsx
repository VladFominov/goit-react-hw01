import PropTypes from 'prop-types'; 
import {
  ProfileCard,
  ProfileName,
  ProfileDescription,
  ProfileStats,
  ProfileStatsData,
  ProfileSocial,
  ProfileLocation,
} from '../Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <ProfileCard>
        <ProfileDescription>
          <img src={avatar} alt="User avatar" className="avatar" />
          <ProfileName>{username}</ProfileName>
          <ProfileSocial>@{tag}</ProfileSocial>
          <ProfileLocation>{location}</ProfileLocation>
        </ProfileDescription>

        <ProfileStats>
          {Object.entries(stats).map(([stat, quantity]) => {
            // console.log(stat);
            return (
              <ProfileStatsData key={stat}>
                <span>{stat}</span>
                <span>{quantity}</span>
              </ProfileStatsData>
            );
          })}
        </ProfileStats>
      </ProfileCard>
    );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};