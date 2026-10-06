#!/usr/bin/env python3
"""Converte um CSV em etecs-data.js.

Colunas (com cabeçalho): curso, areas, unidade, cidade, url
- areas: ids das áreas separados por ';' (ex.: tecnologia-e-informatica;artes-design-e-comunicacao)
- url é opcional. Uma linha por combinação curso + unidade.

Uso: python3 tools/csv_para_etecs.py etecs.csv [saida.js]
"""
import csv, json, sys

entrada = sys.argv[1]
saida = sys.argv[2] if len(sys.argv) > 2 else "etecs-data.js"
ids_validos = set()
import re
for m in re.finditer(r'"id":\s*"([^"]+)"', open("quiz-data.js", encoding="utf-8").read()):
    ids_validos.add(m.group(1))

cursos = {}
with open(entrada, newline="", encoding="utf-8-sig") as f:
    for n, row in enumerate(csv.DictReader(f), start=2):
        nome = row["curso"].strip()
        areas = [a.strip() for a in row["areas"].split(";") if a.strip()]
        for a in areas:
            if a not in ids_validos:
                sys.exit(f"Linha {n}: área desconhecida '{a}'")
        c = cursos.setdefault(nome, {"nome": nome, "areas": areas, "unidades": []})
        c["unidades"].append({"nome": row["unidade"].strip(), "cidade": row["cidade"].strip(), "url": (row.get("url") or "").strip()})

lista = sorted(cursos.values(), key=lambda c: c["nome"])
for c in lista:
    c["unidades"].sort(key=lambda u: (u["cidade"], u["nome"]))
with open(saida, "w", encoding="utf-8") as f:
    f.write("// Gerado por tools/csv_para_etecs.py. Não edite à mão.\nconst CURSOS = " + json.dumps(lista, ensure_ascii=False, indent=2) + ";\n")
print(f"{len(lista)} cursos, {sum(len(c['unidades']) for c in lista)} ofertas -> {saida}")
