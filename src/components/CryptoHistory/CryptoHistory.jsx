import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatToPpDate } from 'helpers/formatToDate';

export const CryptoHistory = ({ transactions }) => {
  return (
    <div>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th>PRICE</Th>
            <Th>AMOUNT</Th>
            <Th>DATE</Th>
          </tr>
        </THead>

        <tbody>
          {transactions.map(({ id, price, amount, date }, index) => (
            <Tr key={id}>
              <Td>{index + 1}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{formatToPpDate(date)}</Td>
            </Tr>
          ))}
        </tbody>
      </BaseTable>
    </div>
  );
};
