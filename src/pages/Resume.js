// import React from "react";
// import { Document } from 'react-pdf';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import file from 'Resume-SudhaKumar-72220.pdf'

// import ReactDOM from 'react-dom';
// import Wrapper from "../components/Wrapper";
// import { PDFViewer } from '@react-pdf/renderer';
// import Container from "../components/Container";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// import ReactPDF from '@react-pdf/renderer';
// import PdfDoc from "../components/PdfDoc";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    // console.log("INSIDE RESUME>JS")
    <div>
      <Document
        file="./Resume-SudhaKumar-72220.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default Resume;