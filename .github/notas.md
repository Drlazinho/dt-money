
# Anotações

**Radix-ui** Possui integração com o React e componentes primitivos com diversas funcionalidades de acessibilidade e completamente desestilizados.

**Portals** fornece uma forma elegante de renderizar um elemento filho dentro de um nó DOM que existe fora da hierarquia do componente pai.

~~~~javascript

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          //Um componente como Dialog.Portal
          <NewTransactionModal/>
        
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

~~~~

**css**
inset: 0 => (bottom, top, left, right) = 0

### Somando as transações com reduce

No primeiro parametro damos o nome do objeto que iremos alterar. No segundo é o que vamos receber para alterar.

~~~~javascript
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income') {
      //Soma das entradas
      acc.income += transaction.price;
      acc.total += transaction.price;
    } else {
      //Soma das saídas
      acc.outcome += transaction.price;
      //descontando no total
      acc.total -= transaction.price;
    }
    return acc;
  }, {
    //Atráves do primeiro parametro do reduce, alteramos  este objeto.
    income: 0,
    outcome: 0,
    total: 0
  })
~~~~

### Formatando Valores

Formatando valores como data e moeda para Brasil.

**utils/formatters.ts**

~~~~javascript
export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
~~~~