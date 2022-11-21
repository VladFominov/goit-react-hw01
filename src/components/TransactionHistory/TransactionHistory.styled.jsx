import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 100%;
  margin: auto;
  padding: 0 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const TransactionThead = styled.thead`
  text-align: center;
  padding: 15px;
  background-color: cornflowerblue;
  color: white;
  text-transform: uppercase;
`;

export const TransactionTbody = styled.tbody`
  text-align: center;
  padding: 10px;
`;

export const TransactionTr = styled.tr`
  text-align: center;
  padding: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: coral;
    transition: all 0.3s;
  }
`;

export const TransactionTd = styled.td`
  text-align: center;
  padding: 25px;
  }
`;
