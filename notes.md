renamed store.js all function to get_all



Claude answer:

Resumo das alterações (não commitadas)

lib/store.js
- Renomeou all() para get_all(), tanto na definição quanto no module.exports.
- Em add(), return note; virou return note;a.

notes.js
- store.all() virou store.get_all() no comando list.
- A mensagem do add passou de Added note #1: ... para Added note -> #1: ....
- Adicionou uma função test() vazia, com a chave em linha separada, antes de main();.

notes.md (novo)
- Contém só: "renamed store.js all function to get_all".

O que parece não intencional

1. return note;a em lib/store.js é quase certamente um erro de digitação. O a solto é um identificador sem uso, então o JS aceita a sintaxe. Mas isso causa ReferenceError: a is not defined em tempo de execução, e notes add vai quebrar. Corrija antes de commitar.
2. function test() {} vazia em notes.js parece um resto de teste. O estilo (chave em outra linha) também é diferente do resto do arquivo. Remova, a menos que seja de propósito.
3. A mensagem Added note -> #... muda a saída do CLI. Pode ser intencional, mas não tem relação com o rename e pode quebrar quem faz parse dessa saída. Confirme se é isso mesmo que você quer.
4. O get_all usa snake_case, enquanto o resto do código usa camelCase (nextId). Se for padronizar, getAll seria mais consistente.

Busquei outros usos de store.all() no projeto e não achei nenhum. O rename está completo, só falta corrigir o a.

Posso corrigir os itens 1 e 2 se quiser.