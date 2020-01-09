import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(83, 107, 130, 0.4), rgba(49, 60, 71, 0.9)),
    url('https://cdn.onthewall.com.br/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/l/u/luzes_da_cidade.jpg')
      no-repeat fixed;
  background-size: cover;

  h2 {
    color: white;
    margin-bottom: 5px;
  }
`;

export const Header = styled.div`
  background: #fff;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border: none;
    padding-left: 10px;
    outline: none;
    width: 280px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background: transparent;
    border-bottom-width: 1px;
    border-bottom: solid #c48f12 1px;
  }

  i {
    margin-top: 2px;
    color: #fff;
  }

  button {
    margin-top: 20px;
    border-radius: 24px;
    border: none;
    width: 270px;
    height: 45px;
    outline: none;
    background: #c48f12;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }

  button:hover {
    background: #c9961e;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  a {
    color: white;
    font-size: 14px;
    margin-top: 10px;
  }

  a:hover {
    cursor: pointer;
  }
`;
