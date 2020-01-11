import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  min-width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    .notification {
      width: 25px;
      div {
        width: 12px;
        height: 12px;
      }
      p {
        font-size: 5px;
      }
    }
    .user {
      visibility: hidden;
    }
  }
`;

export const Logo = styled.img`
  width: 70px;
`;

export const DivLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DivRight = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const DivCent = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const User = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;

export const Notification = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    background: #c6c6c6;
    color: #fff;
    width: 27px;
    height: 27px;
    text-align: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 3px;
  }

  p {
    font-size: 10px;
    font-weight: 500;
  }
`;
