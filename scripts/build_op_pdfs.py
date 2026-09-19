#!/usr/bin/env python3
"""Build AIWEBTOOLS.APP-branded operational instruction PDFs (and matching DOCX)
from plain-text sources. Text is reproduced verbatim — only branding is added."""
import os, sys, json, zipfile, html
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer

SRC = sys.argv[1] if len(sys.argv) > 1 else "/tmp/opgen"
OUT = sys.argv[2] if len(sys.argv) > 2 else "public/instructions"
MAP = json.load(open(sys.argv[3])) if len(sys.argv) > 3 else {}

GREEN = colors.HexColor("#1f7a3d")
DARK = colors.HexColor("#111111")
GREY = colors.HexColor("#666666")

body = ParagraphStyle("body", fontName="Helvetica", fontSize=10.5, leading=15,
                      textColor=DARK, spaceAfter=9)
head = ParagraphStyle("head", fontName="Helvetica-Bold", fontSize=11.5, leading=16,
                      textColor=GREEN, spaceBefore=8, spaceAfter=6)
title = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=19, leading=23,
                       textColor=DARK, spaceAfter=6)
deck = ParagraphStyle("deck", fontName="Helvetica-Oblique", fontSize=9.5, leading=13,
                      textColor=GREY, spaceAfter=14)


def make_pdf(path, name, text):
    doc = BaseDocTemplate(path, pagesize=letter,
                          leftMargin=0.85 * inch, rightMargin=0.85 * inch,
                          topMargin=1.15 * inch, bottomMargin=0.9 * inch,
                          title=f"{name} - Operational Instructions",
                          author="AIWEBTOOLS.APP", subject="Operational Instructions")
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="f")

    def deco(canvas, d):
        canvas.saveState()
        w, h = letter
        canvas.setFillColor(GREEN)
        canvas.roundRect(0.85 * inch, h - 0.82 * inch, 0.26 * inch, 0.26 * inch, 3, fill=1, stroke=0)
        canvas.setFillColor(colors.white)
        canvas.setFont("Helvetica-Bold", 12)
        canvas.drawCentredString(0.98 * inch, h - 0.74 * inch, "A")
        canvas.setFillColor(DARK)
        canvas.setFont("Helvetica-Bold", 10.5)
        canvas.drawString(1.22 * inch, h - 0.72 * inch, "AIWEBTOOLS.APP")
        canvas.setFont("Helvetica", 7.6)
        canvas.setFillColor(GREY)
        canvas.drawString(1.22 * inch, h - 0.86 * inch, "AI Web Tools - Operational Instructions Library")
        canvas.setFont("Helvetica-Bold", 8.6)
        canvas.setFillColor(GREEN)
        canvas.drawRightString(w - 0.85 * inch, h - 0.72 * inch, name.upper()[:58])
        canvas.setStrokeColor(GREEN)
        canvas.setLineWidth(0.8)
        canvas.line(0.85 * inch, h - 0.95 * inch, w - 0.85 * inch, h - 0.95 * inch)
        canvas.setLineWidth(0.4)
        canvas.setStrokeColor(colors.HexColor("#cccccc"))
        canvas.line(0.85 * inch, 0.72 * inch, w - 0.85 * inch, 0.72 * inch)
        canvas.setFont("Helvetica", 7.6)
        canvas.setFillColor(GREY)
        canvas.drawString(0.85 * inch, 0.56 * inch, "https://aiwebtools.app - free AI tools directory & custom AI bots")
        canvas.drawRightString(w - 0.85 * inch, 0.56 * inch, "Page %d" % canvas.getPageNumber())
        canvas.restoreState()

    doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=deco)])
    flow = [Paragraph(html.escape(name.upper()), title),
            Paragraph("Full operational instructions - provided by AIWEBTOOLS.APP for use with your own AI models.", deck)]
    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            flow.append(Spacer(1, 4))
            continue
        line = line.lstrip("#").strip()
        esc = html.escape(line)
        is_head = len(line) < 90 and (line.isupper() or line.endswith(":") and len(line) < 70)
        flow.append(Paragraph(esc, head if is_head else body))
    doc.build(flow)


def make_docx(path, name, text):
    paras = []
    for raw in text.split("\n"):
        t = html.escape(raw.strip().lstrip("#").strip())
        paras.append(
            '<w:p><w:r><w:t xml:space="preserve">%s</w:t></w:r></w:p>' % t)
    document = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                '<w:body>%s</w:body></w:document>' % "".join(paras))
    ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
          '<Default Extension="xml" ContentType="application/xml"/>'
          '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
          '</Types>')
    rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>'
            '</Relationships>')
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", ct)
        z.writestr("_rels/.rels", rels)
        z.writestr("word/document.xml", document)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    n = 0
    for f in sorted(os.listdir(SRC)):
        if not f.endswith(".txt"):
            continue
        slug = f[:-4]
        name = MAP.get(slug, slug.replace("-", " ").title())
        text = open(os.path.join(SRC, f), encoding="utf8").read()
        make_pdf(os.path.join(OUT, slug + ".pdf"), name, text)
        make_docx(os.path.join(OUT, slug + ".docx"), name, text)
        n += 1
    print("built", n)
