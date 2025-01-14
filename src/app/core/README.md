# Core

O módulo `core` deve conter apenas funcionalidades essenciais que são utilizadas em toda a aplicação e não pertencem a um módulo ou feature específico. Este módulo é carregado uma única vez, geralmente durante a inicialização do aplicativo, e é responsável por fornecer serviços e componentes configurados como singletons. Para garantir coesão e facilitar a manutenção, mantenha o módulo `core` o mais simples possível.

Funcionalidades que serão utilizadas em apenas um único módulo devem ser mantidas próximas a esse módulo, para evitar dependências desnecessárias. Já aquelas que precisam ser compartilhadas entre poucos módulos (como 2 ou 3) devem ser colocadas no módulo `shared`, garantindo que estejam acessíveis sem sobrecarregar o módulo `core`.


- Deve conter o código que é compartilhado por todo o aplicativo
- Tentar manter o módulo do aplicativo o mais limpo possível
