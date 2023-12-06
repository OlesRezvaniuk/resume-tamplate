import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: inherit;
  position: relative;
  height: 370px;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
`;

export const AvatarPlugBox = styled.div`
  width: 100%;
  height: 370px;
  background: #425168;
  border-radius: 4px;
`;
