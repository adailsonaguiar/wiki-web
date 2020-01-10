import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(rgba(83, 107, 130, 0.4), rgba(49, 60, 71, 0.9)),
    url('https://cdn.onthewall.com.br/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/l/u/luzes_da_cidade.jpg')
      no-repeat fixed;
  background-size: cover;
  padding-top: 60px;

  h2 {
    color: white;
    margin-bottom: 5px;
  }
`;

export const Form = styled.div`
  background: #fff;
  width: 70%;
  border-radius: 5px;
  box-shadow: 6px 7px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 20px;

  select {
    background: #fff;
    border-radius: 4px;
    font-weight: bold;
    margin-right: 10px;
  }

  input {
    border: none;
    padding-left: 10px;
    outline: none;
    width: 280px;
    height: 40px;
    font-size: 16px;
    color: #000;
    background: transparent;
    border-bottom-width: 1px;
    border-bottom: solid #c48f12 1px;
  }

  textarea {
    width: 100%;
    height: 60px;
    padding: 10px;
    border: solid #c48f12 1px;
    border-radius: 4px;
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
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .center {
    justify-content: center;
  }
`;

export const TitleForm = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
