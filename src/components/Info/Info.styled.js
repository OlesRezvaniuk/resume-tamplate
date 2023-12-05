import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 78px;
  margin-bottom: 40px;
  overflow-wrap: break-word;
  width: inherit;
`;

export const InfoEditInput = styled.textarea`
    width: 300px;
    padding: 0px 0px 0px 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 0px 1px lightgrey;
    border-radius: 2px;
    transition: 250ms;
    cursor: pointer;
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 30px;
    resize: none;
}`;

export const InfoText = styled.p`
  width: 710px;
`;
