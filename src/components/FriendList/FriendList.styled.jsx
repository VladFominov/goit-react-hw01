import styled from '@emotion/styled';

export const FriendListMain = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
`;

export const FriendCardContainer = styled.div`
  padding: 50px;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin: 0 auto;

  background-color: #fff;
  box-shadow: 5px 5px 5px 20px lightblue;
  padding: 20px;
`;

export const FriendIsOnline = styled.span`
    background-color: green;
  padding: 10px;
  border-radius: 50%;
`;

export const FriendIsOffline = styled.span`
  background-color: red;
  padding: 10px;
  border-radius: 50%;
`;

export const FriendListImg = styled.img``;

export const FriendListName = styled.p``;
