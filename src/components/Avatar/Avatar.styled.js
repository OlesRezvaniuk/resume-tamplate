import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: inherit;
  position: relative;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 370px;
  object-fit: cover;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    height: 370px;
  }
`;

export const AvatarPlugBox = styled.div`
  width: 100%;
  height: 370px;
  background: #425168;
  border-radius: 4px;
`;
