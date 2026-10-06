// Cursos técnicos e unidades Etec. Gere este arquivo com: python3 tools/csv_para_etecs.py etecs.csv
// Formato de cada item:
//   { nome: "Técnico em Informática", areas: ["tecnologia-e-informatica"],
//     unidades: [{ nome: "Etec Exemplo", cidade: "São Paulo", url: "https://..." }] }
// "areas" usa os ids de quiz-data.js (um curso pode pertencer a mais de uma área).
const CURSOS = [];
