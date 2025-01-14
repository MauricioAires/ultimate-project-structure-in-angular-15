# Shared

O módulo `shared` deve conter apenas funcionalidades que são compartilhadas por dois ou mais módulos, ou que são utilizadas internamente dentro do próprio módulo `shared`. Nenhuma funcionalidade dentro do módulo `core` deve depender ou importar recursos do módulo `shared`, garantindo que o `core` permaneça independente e leve.

## Qual a diferença entre a pasta core e a pasta shared?

- Shared deve conter as coisas que são compartilhadas entre os módulos

- Não deve importar todos os componentes no arquivo de .module da pasta shared
