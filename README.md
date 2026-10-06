# Teste Vocacional

Site estático (HTML, CSS e JavaScript puros, sem build). Fluxo: `index.html` → `perguntas.html` → `resultado.html` (teste rápido de 20 perguntas ou completo de 70).

## Como executar
```bash
python3 -m http.server 8000   # na raiz do projeto
# abra http://localhost:8000
```
Use um servidor local (não abra o arquivo direto) para o resultado funcionar em todos os navegadores.

## Estrutura
| Arquivo | Função |
|---|---|
| `quiz-data.js` | 14 áreas e 70 perguntas (do Word da Mariana) |
| `quiz-rapido-data.js` | 8 perguntas gerais do teste rápido (**rascunho, precisa de revisão da Mariana**) |
| `quiz.js` | embaralha, pagina, guarda respostas e calcula o resultado |
| `perguntas.html`, `style.css` | telas de perguntas e início |
| `areas-data.js` | **gerado**: conteúdo das áreas e ETECs (da planilha) |
| `resultado.html`, `resultado.css`, `resultado.js` | página de resultado (Figma, seção "Resposta") |
| `dados/Cursos_Etecs_Zona_Leste.xlsx` | fonte dos dados das áreas e ETECs |
| `tools/xlsx_para_areas.py` | gera `areas-data.js` e `img/areas/*.png` |
| `img/areas/` | ícones das 14 áreas (extraídos da planilha) |

## Regras do teste
**Teste rápido (padrão, 20 perguntas, adaptativo)**
1. *Etapa 1:* 8 perguntas gerais (`quiz-rapido-data.js`), cada uma pontuando em 3 a 4 áreas; todas as 14 áreas aparecem em pelo menos 2.
2. *Etapa 2:* as 3 áreas com maior média na etapa 1 (empate: mais respostas 6 ou 7; depois sorteio) recebem 4 perguntas específicas cada, tiradas das 70 do Word. As perguntas são intercaladas A-B-C-A-B-C (mesma área sempre a 3 posições). Voltar e mudar a etapa 1 refaz a etapa 2.
3. *Pontuação:* média das respostas da área × 5, de 5 a 35 (igual ao modo completo). As 3 áreas exploradas na etapa 2 vêm primeiro, ordenadas pela pontuação final.

**Teste completo (70 perguntas, `?modo=completo`)** — regras do Word:
- 14 áreas × 5 perguntas; resposta de 1 (Discordo) a 7 (Concordo); cada área soma de 5 a 35 pontos.
- Perguntas embaralhadas, sem numeração, com pelo menos 3 posições entre perguntas da mesma área.
- O resultado mostra as 3 áreas com mais pontos; a 1ª é a principal.
- **Empate** (o Word deixa a decisão para a equipe): vence quem tiver mais respostas 6 ou 7; persistindo, sorteio.

## Página de resultado
- Lê `sessionStorage.resultado` (gravado por `quiz.js`). Se estiver ausente ou inválido, mostra uma mensagem e o botão "Fazer o teste".
- ETECs: Etec Professor Adhemar Batista Heméritas primeiro quando oferece curso da área, depois por distância em linha reta (critério da planilha). Adhemar e Etec de Vila Formosa são unidades distintas.
- Imagem da área: `img/resultado-<id-da-area>.png` se existir (Educação usa `img/Professora e aluna colorindo juntas.png`); senão, o ícone da planilha.

## Atualizar os dados
Edite `dados/Cursos_Etecs_Zona_Leste.xlsx` (mesmo formato) e rode:
```bash
pip install openpyxl
python3 tools/xlsx_para_areas.py
```
O script valida ids, endereços, distâncias e a ordem das ETECs, e para com erro claro se algo estiver fora do formato.
