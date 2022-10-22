# DT-Money

### Desenvolvimento
*   React-Typescript
*   phosphor-icon
*   Radix-ui
*   Styled-components
*   [Json-server](https://github.com/typicode/json-server)
--------------

### Anotações

**Radix-ui** Possui integração com o React e componentes primitivos com diversas funcionalidades de acessibilidade e completamente desestilizados.

**Portals** fornece uma forma elegante de renderizar um elemento filho dentro de um nó DOM que existe fora da hierarquia do componente pai.

````javascript

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

````

**css**
inset: 0 => (bottom, top, left, right) = 0
