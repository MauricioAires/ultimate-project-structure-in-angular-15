# Paginas

A organização das pastas segue uma abordagem modular e hierárquica, que separa as responsabilidades de rotas e componentes. Cada funcionalidade é isolada em sua respectiva pasta, promovendo escalabilidade e manutenibilidade.

## Diretrizes Principais

- Rota Independente (maintenance):
    Cada rota que não pertence a um grupo específico é tratada como um módulo autônomo.
    Os componentes reutilizáveis dessa rota são colocados dentro de uma subpasta components, garantindo que a lógica da rota (e.g., page.tsx) não esteja no mesmo nível dos componentes.

- Grupo de Rotas (auth):
    Agrupa rotas que compartilham um contexto funcional, como autenticação.
    Dentro do grupo, cada rota possui sua própria pasta para armazenar a lógica específica.
    Componentes compartilhados dentro do grupo são organizados na subpasta components, separando-os claramente das rotas.

- Separação Hierárquica de Rotas e Componentes:
  Componentes reutilizáveis nunca ficam no mesmo nível hierárquico das rotas.
  Isso garante uma estrutura limpa, facilita a localização de arquivos e evita misturas de responsabilidades.

- Componentes Compartilhados Entre Módulos ou Páginas:
  Se um componente for usado por dois ou mais módulos (ou páginas independentes), ele deve ser movido para o módulo shared.
  O módulo shared é o local centralizado para armazenar elementos reutilizáveis em toda a aplicação, promovendo consistência e evitando duplicações.

- A organização das pastas deve refletir a estrutura das rotas. Por exemplo, se uma rota pertence a um módulo específico, o nome do módulo deve fazer parte da rota, garantindo uma correspondência clara entre a estrutura de diretórios e a hierarquia das rotas.

  ```sh
  src/
    app/
      modules/
        products/
        product-list/
          product-list.component.ts
          product-list.component.html
        product-detail/
          product-detail.component.ts
          product-detail.component.html
  ```

  ```typescript
  const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent }
  ];
  ```

## Exemplo Visual

```sh
pages/
│
├── maintenance/                    # Rota independente
│   ├── page.ts                     # Página principal da rota
│   └── components/                 # Componentes reutilizáveis da rota
│       └── MaintenanceHeader.ts    # Cabeçalho compartilhado
│
├── auth/                           # Grupo de rotas
│   ├── sign-in/                    # Rota específica dentro do grupo
│   │   └── page.ts                 # Página principal da rota
│   │
│   ├── sign-out/                   # Outra rota dentro do grupo
│   │   └── page.ts                 # Página principal da rota
│   │
│   └── components/                 # Componentes reutilizáveis no grupo
│       ├── AuthForm.ts             # Formulário compartilhado
│       └── AuthHeader.ts           # Cabeçalho compartilhado
│
│
├── shared/                         # Módulo para componentes compartilhados
│   ├── Navbar.ts                   # Navbar reutilizável por várias páginas
│   └── Footer.ts                   # Footer reutilizável por várias páginas
```
