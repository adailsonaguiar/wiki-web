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
