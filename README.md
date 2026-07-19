# Validador e Formatador de Lista de Convidados

Este projeto foi desenvolvido para praticar a manipulação de Strings e Arrays em JavaScript, focando no encadeamento de métodos para limpar e padronizar dados de entrada.

## 🛠️ O que cada método faz?

Para conseguir transformar o texto bruto na lista final, utilizei o encadeamento de funções. Aqui está o papel de cada uma:

*   **`prompt()`**: Abre uma caixa de diálogo no navegador para capturar os nomes digitados pelo usuário.
*   **`.trim()`**: Remove os espaços em branco inúteis no início e no final do texto bruto, evitando que espaços vazios virem "nomes".
*   **`.split(", ")`**: Quebra a string gigante em vários pedaços menores, usando a vírgula e o espaço como separadores. Isso transforma o texto em uma **Array (lista)**.
*   **`.map()`**: Percorre a lista gerada e transforma cada item (nome) individualmente, um por um.
    *   **`item.charAt(0)`**: Pega apenas a primeira letra do nome.
    *   **`.toUpperCase()`**: Transforma essa primeira letra em maiúscula.
    *   **`item.slice(1)`**: Pega o restante do nome (da segunda letra em diante).
    *   *Nota:* Somando o `charAt(0).toUpperCase()` com o `slice(1)`, garantimos que todo nome comece com letra maiúscula.
*   **`.length`**: Conta quantos elementos existem dentro da Array (neste caso, a quantidade exata de convidados cadastrados).
*   **`.join()`**: Junta os elementos da Array de volta em uma String para exibição no console.

## 🧠 Aprendizados e Insights

1. **Encadeamento de Métodos**: Aprendi que posso conectar várias funções (`.trim().split().map()`) em uma única constante, desde que a ordem faça sentido lógico (o método seguinte precisa aceitar o tipo de dado que o método anterior retornou).
2. **Cuidado com a Sintaxe no Mobile**: Erros como `Unexpected token` ou `ReferenceError` geralmente acontecem por quebras de linha automáticas do editor que quebram o escopo do código ou por pontos e vírgulas (`;`) colocados antes do final do encadeamento.
3. **Diferença do `.length`**: Entendi que o `.length` em Strings conta letras, mas em Arrays conta a quantidade de itens.
4. 
