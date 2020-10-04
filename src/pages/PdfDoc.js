import React from "react";
import Container from "../components/Container";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// import { Document, Page } from 'react-pdf';

import resumePDF from "./Resume-SudhaKumar-72220.pdf";

// export default function Resume() {
//   return (
//     <div className="container-fluid">

//       <Document file={resumePDF}>
//       <Page pageNumber={1} />
//         </Document>

//       </div>
//   );
// }



// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Resume =() => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.section}>
        <Text>We're inside a PDF!</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;