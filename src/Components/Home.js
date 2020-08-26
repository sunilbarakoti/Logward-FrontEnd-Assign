/* 
  This is a main componet which has two helper components to i.e. TableData and InputForm. 
  This component maintains the state of the table. The intital state of the component changes mainly by two actions
  and they are : by clicking on the filter( In Progress, Unrelased and Released) or typing in the search input box.
  functions like handleRemove, startEditing, stopEditing, handleChange are callback functions passed as a prop
  to the TableData component and are invoked from the child component based on the actions.
  
 */

import React, { Component } from "react";

import { TextField, Paper } from "@material-ui/core";

import TableData from "./TableData";
import InputForm from "./InputForm";
import { header, data, status } from "../Utility";

import './Home.css';

import RefreshIcon from "@material-ui/icons/Refresh";

class Home extends Component {
  state = {
    data: data,
    editIdx: -1,
    query: "",
    statusClicked: false,
    currentStatusDisp: {},
  };

  handleRemove = (i) => {
    document
      .getElementById(`myOptions${i}`)
      .classList.toggle("show");

    this.setState((state) => ({
      data: state.data.filter((row, j) => j !== i),
    }));
  };

  startEditing = (i) => {
    document
      .getElementById(`myOptions${i}`)
      .classList.toggle("show");

    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState((state) => ({
      data: state.data.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      ),
    }));
  };

  currentStatusToDisplay = (e, statusData) => {
    e.target.textContent === statusData.name &&
      JSON.stringify(this.state.currentStatusDisp) !== JSON.stringify(statusData)
      ? this.setState({ currentStatusDisp: statusData, statusClicked: true })
      : this.setState({ currentStatusDisp: {}, statusClicked: false });
  };

  resetClick = () => {
    this.setState({ currentStatusDisp: {}, statusClicked: false });
  };

  render() {
    return (
      <div className="maintable">
        <div className="maintable__filterSection">
          <div className="maintable__releases">
            <h5 className="maintable__releaseHeading">Releases</h5>
            <div className="maintable__releaseFilter">
              {status.map((statusData, k) => (
                <div
                  key={k}
                  className="maintable__releaseFilter-filterButton"
                  onClick={(e) => this.currentStatusToDisplay(e, statusData)}
                >
                  {statusData.name}
                </div>
              ))}
              {this.state.statusClicked && (
                <RefreshIcon
                  className="maintable__releaseFilter-refreshIcon"
                  onClick={() => this.resetClick()}
                />
              )}
            </div>
          </div>
          <TextField
            name="Search"
            value={this.state.query.toLowerCase()}
            onChange={(e) => this.setState({ query: e.target.value })}
            label="Search"
            margin="dense"
            className="maintable__search"
            variant="outlined"
          />
        </div>
        <div className="maintable__hrline"></div>
        <TableData
          handleRemove={this.handleRemove}
          startEditing={this.startEditing}
          editIdx={this.state.editIdx}
          handleChange={this.handleChange}
          stopEditing={this.stopEditing}
          header={header}
          data={
            this.state.query
              ? Object.keys(this.state.currentStatusDisp).length > 0
                ? this.state.data
                  .filter(
                    (x) =>
                      x["Version"]
                        .toLowerCase()
                        .includes(this.state.query) ||
                      x["Description"]
                        .toLowerCase()
                        .includes(this.state.query)
                  )
                  .filter(
                    (x) => x["Status"] === this.state.currentStatusDisp.name
                  )
                : this.state.data.filter(
                  (x) =>
                    x["Version"].toLowerCase().includes(this.state.query) ||
                    x["Description"]
                      .toLowerCase()
                      .includes(this.state.query)
                )
              : Object.keys(this.state.currentStatusDisp).length > 0
                ? this.state.data.filter(
                  (x) => x["Status"] === this.state.currentStatusDisp.name
                )
                : this.state.data
          }
        ></TableData>
        <Paper>
          <InputForm
            style={{ marginBottom: "2%" }}
            onSubmit={(submission) =>
              this.setState({ data: [submission, ...this.state.data] })
            }
          />
        </Paper>
      </div>
    );
  }
}

export default Home;
