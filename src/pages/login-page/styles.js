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

  img {
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
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
