import React from 'react';
import TableRow from "TableRow";
import FileInput from "FileInput";
import Footer from "./footer";


class Add extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(223, 206, 180)" }}>
        <div>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "30px",
              fontFamily: "serif"
            }}
          >
            Add a new recipe here!
          </h2>
        </div>

        <div style={{ marginTop: "50px" }}>
          <TableRow />
        </div>
        <FileInput />
        <Footer />
      </div>
    );
  }
}

export default Add;