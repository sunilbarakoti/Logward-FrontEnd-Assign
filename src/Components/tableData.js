/*

  This is a functional component which creates the table using material-ui.
  The data used for the table are obtained from the home component.
  The functions like numberValidator are actionClick are the helper functions. 
  The prior makes sure that the number in the progress column shouldn't be less than 0
  and greater than 100. Whereas the later is for handling the behaviours of action button.

*/
import React from "react";

import Moment from "react-moment";
import { Badge, ProgressBar } from "react-bootstrap";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@material-ui/core";

import {
  DeleteSharp as DeleteIcon,
  Edit as EditIcon,
  Check as CheckIcon,
} from "@material-ui/icons";

import { header, status } from "../Utility";
import "./TableData.css";

const row = (
  x,
  index,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing
) => {
  const currentlyEditing = editIdx === index;

  function numberValidator(e) {
    if (e.target.value < 0) e.target.value = 0;
    if (e.target.value > 100) e.target.value = 100;
  }

  function actionClick(e, index) {
    let showCheck = false;
    let [...dropdowns] = document.getElementsByClassName("actionbtn__content");
    if (
      document.getElementById(`myOptions${index}`).classList.contains("show")
    ) {
      showCheck = true;
    }

    dropdowns.forEach((drop) => {
      if (drop.classList.contains("show")) {
        drop.classList.remove("show");
      }
    });

    showCheck
      ? document.getElementById(`myOptions${index}`).classList.remove("show")
      : document.getElementById(`myOptions${index}`).classList.toggle("show");
  }

  return (
    <TableRow className="tablerow" key={`tr-${index}`}>
      {header
        .filter((data1) => data1.prop !== "Actions")
        .map(({ prop }, k) => {
          if (prop === "Status") {
            return (
              <TableCell key={`tc-${k}`}>
                <Badge
                  variant={
                    status.filter((val) => val.name === x[prop])[0].variant
                  }
                  className="tablerow__statusbar"
                >
                  {x[prop]}
                </Badge>
              </TableCell>
            );
          } else if (prop === "Progress") {
            return (
              <TableCell key={`tc-${k}`}>
                {currentlyEditing ? (
                  <TextField
                    type="number"
                    name={prop}
                    onInput={(e) => numberValidator(e)}
                    onChange={(e) => handleChange(e, prop, index)}
                    value={x[prop]}
                  />
                ) : (
                    <ProgressBar
                      variant="success"
                      className="tablerow__progressbar"
                      now={x[prop]}
                    />
                  )}
              </TableCell>
            );
          } else if (prop === "startDate" || prop === "releaseDate") {
            if (x[prop] === "") {
              return (
                <TableCell key={`tc-${k}`}>
                  {currentlyEditing ? (
                    <TextField
                      type="date"
                      style={{ width: "145px" }}
                      name={prop}
                      onChange={(e) => handleChange(e, prop, index)}
                      value={x[prop]}
                    />
                  ) : (
                      "--"
                    )}
                </TableCell>
              );
            } else {
              return (
                <TableCell key={`tc-${k}`}>
                  {currentlyEditing ? (
                    <TextField
                      name={prop}
                      onChange={(e) => handleChange(e, prop, index)}
                      value={x[prop]}
                    />
                  ) : (
                      <Moment format="MM/DD/YYYY">{x[prop]}</Moment>
                    )}
                </TableCell>
              );
            }
          } else {
            return (
              <TableCell className="tablerow__remCell" key={`tc-${k}`}>
                {currentlyEditing ? (
                  <TextField
                    name={prop}
                    onChange={(e) => handleChange(e, prop, index)}
                    value={x[prop]}
                  />
                ) : (
                    x[prop]
                  )}
              </TableCell>
            );
          }
        })}
      <TableCell key={`tcd-${index}`} className="actionbtn">
        {currentlyEditing ? (
          <CheckIcon
            className="actionbtn__iconEdit"
            onClick={() => stopEditing()}
          />
        ) : (
            <span
              className="actionbtn__iconDefault"
              onClick={(e) => actionClick(e, index)}
            >
              ...
            </span>
          )}
        <div
          key={index}
          id={`myOptions${index}`}
          className="actionbtn__content myOptions"
        >
          <span>
            <EditIcon
              className="actionbtn__editIcon"
              onClick={() =>
                startEditing(index)
              }
            />
          </span>
          <span>
            <DeleteIcon
              className="actionbtn__deleteIcon"
              onClick={() =>
                handleRemove(index)
              }
            />
          </span>
        </div>
      </TableCell>
    </TableRow>
  );
};

const TableData = ({
  header,
  data,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing,
}) => {
  return (
    <div>
      <Paper className="tableCont">
        <Table>
          <TableHead>
            <TableRow>
              {header.map((x, i) => (
                <TableCell key={`thr-${i}`} className="tableColName">{x.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((x, index) =>
              row(
                x,
                index,
                handleRemove,
                startEditing,
                editIdx,
                handleChange,
                stopEditing
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default TableData;
