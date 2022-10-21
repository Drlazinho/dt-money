import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable
} from './styles'

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>21/10/2022</td>
            </tr>
            <tr>
              <td width="50%">Sanduiche</td>
              <td>
                <PriceHighLight variant="outcome">R$ -12,00</PriceHighLight>
              </td>
              <td>Compra</td>
              <td>21/10/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
