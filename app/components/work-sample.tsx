"use client";
import { pdfjs, Document, Page as PDFPage } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface Props {
  path: string;
}

export default function WorkSample({ path }: Props) {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError() {}
  return (
    <Document
      file={path}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={onDocumentLoadError}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <PDFPage
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={800}
          height={400}
          className="mt-3"
        />
      ))}
    </Document>
  );
}
