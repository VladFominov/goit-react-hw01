import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionThead,
  TransactionTbody,
  TransactionTr,
  TransactionTd,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionThead>

      <TransactionTbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTr key={id}>
              <TransactionTd>{type}</TransactionTd>
              <TransactionTd>{amount}</TransactionTd>
              <TransactionTd>{currency}</TransactionTd>
            </TransactionTr>
          );
        })}

        {/* <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr> */}
      </TransactionTbody>
    </TransactionTable>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};