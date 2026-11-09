# TripleFit

MVP do gerador de treinos de academia, sem Supabase.

## Executar
```bash
npm install
npm run dev
```

Para publicar: `npm run build` e hospedar a pasta `dist` em um serviço estático compatível.

## Incluído
- React + Vite, layout responsivo
- Catálogo inicial com 36 exercícios e IDs estáveis
- Gerador de sugestões de divisão de treino por regras (2 a 6 dias)
- Filtros por grupo e equipamento
- Registro de cargas e repetições em localStorage
- Exportação de backup JSON e impressão do treino em PDF pelo navegador

## Pendente
- Produzir, revisar e integrar as ilustrações individuais 4:5 de cada exercício
- Expandir o catálogo até 200 exercícios
- Revisar cientificamente o algoritmo para evitar rotinas incompletas, duplicações excessivas e desequilíbrios
- Implementar progressão real e histórico longitudinal
- Adicionar autenticação e verificação de assinatura de R$ 17/mês em backend externo seguro, **sem Supabase**
- Testes automatizados, QA em dispositivos e deploy

## Atenção
O gerador é um protótipo educativo. Não prescreve exercícios para pessoas com dor/lesão/condição relevante. A ficha deve ser individualizada por profissional habilitado. Os dados ficam apenas no dispositivo e podem ser apagados pelo navegador. Não há controle de acesso pago na versão atual.
