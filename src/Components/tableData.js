import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {Badge,ProgressBar} from 'react-bootstrap';
import Moment from 'react-moment';
import DeleteIcon from '@material-ui/icons/DeleteSharp';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';




const rowData = ["Version","Status","Progress","startDate","releaseDate","Description"];

const row = (x, index,handleRemove,startEditing,editIdx,handleChange,stopEditing) => {

  const currentlyEditing = editIdx === index; 

  function numberValidator(e){
    if(e.target.value<0) e.target.value = 0;
    if(e.target.value>100) e.target.value = 100;
  }
  
  function actionClick(e,index){
      let showCheck = false; 
      let dropdowns = document.getElementsByClassName("dropdown-content");
      if(document.getElementById(`myOptions${index}`).classList.contains("show")){
        showCheck = true;
      }
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
      showCheck?document.getElementById(`myOptions${index}`).classList.remove("show"):document.getElementById(`myOptions${index}`).classList.toggle("show")

  }

  return (
    
    <TableRow key={`tr-${index}`}>
      {
        rowData.map((row1, k) => {
          if(row1 === "Status"){
            if(x[row1] === "IN PROGRESS"){
              return(<TableCell key={`tc-${k}`}><Badge variant="primary" className ="badgeClass">{x[row1]}</Badge></TableCell>)
            }else if(x[row1] === "UNRELEASED"){
              return(<TableCell key={`tc-${k}`} ><Badge variant="warning" className ="badgeClass">{x[row1]}</Badge></TableCell>)
            }else if(x[row1] === "RELEASED"){
              return(<TableCell key={`tc-${k}`} ><Badge variant="success" className ="badgeClass">{x[row1]}</Badge></TableCell>)
            }else{
              return(<TableCell key={`tc-${k}`}><Badge variant="primary" className ="badgeClass">IN PROGRESS</Badge></TableCell>)
            }
          }else if(row1 === "Progress"){
            return(<TableCell key={`tc-${k}`} >{currentlyEditing ? (
              <TextField type="number" name={row1} onInput = {(e)=>numberValidator(e)} onChange={(e) => handleChange(e,row1,index)} value = {x[row1]} />
            ) :(<ProgressBar variant="success" className ="progressBarClass"  now={x[row1]}/>)}
            </TableCell>)
          }else if(row1 === "startDate" ||row1 === "releaseDate" ){
            if(x[row1] === ""){
              return(<TableCell key={`tc-${k}`} >{currentlyEditing ? (
              <TextField type = "date" style = {{width:'145px'}} name={row1} onChange={(e) => handleChange(e,row1,index)} value = {x[row1]} />
            ) : ("--")
              }
              </TableCell>)               
            }else{
              return(<TableCell key={`tc-${k}`} >{currentlyEditing ? (
              <TextField name={row1} onChange={(e) => handleChange(e,row1,index)} value = {x[row1]} />
            ) : (<Moment format="MM/DD/YYYY">{x[row1]}</Moment>)
              }
              </TableCell>)
            }
          }else{return(
          <TableCell className = "textTableCell" key={`tc-${k}`} >
            {currentlyEditing ? (
              <TextField name={row1} onChange={(e) => handleChange(e,row1,index)} value = {x[row1]} />
            ) : (x[row1]
              )}
          </TableCell>
        )}})
      }
      <TableCell key={`tcd-${index}`}
        style={{ fontWeight: 'bold', textIndent: '30%',position: 'relative' }}
        className ="dropbtn" 
      >{currentlyEditing ? (<CheckIcon
                          style={{ color: 'grey', marginRight: '5px',cursor: 'pointer'}}
                          onClick= {() => (stopEditing())} />)
                         : (<span style={{cursor: 'pointer' ,fontSize:'18px'}} onClick={(e) => actionClick(e,index)}>...</span>)}
                <div key={index} id={`myOptions${index}`} className="dropdown-content myOptions">
          <span>
            <EditIcon
            style={{ color: 'grey', fontSize:'28', marginRight: '5px', marginLeft: '5px' }}
            onClick={() => (startEditing(index),document.getElementById(`myOptions${index}`).classList.toggle("show"))}
            />
          </span>
          <span>
            <DeleteIcon
              style={{ color: 'red', fontSize:'28' }}
              onClick={() => (handleRemove(index),document.getElementById(`myOptions${index}`).classList.toggle("show"))}
            />
          </span>
        </div>
      </TableCell>
    </TableRow>

  )
}
  
const tableData = ({header,data,handleRemove,startEditing,editIdx,handleChange,stopEditing}) =>{
  return (
    <div>
    <Paper style={{ maxHeight: 441, overflowY:'auto', width: '100%'}}>
      <Table>
        <TableHead style ={{position:'ab'}}>
          <TableRow>
            {header.map((x,i)=><TableCell key ={`thr-${i}`}>{x.name}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x,index)=>row(x,index,handleRemove,startEditing,editIdx,handleChange,stopEditing))}
        </TableBody>
      </Table>
    </Paper>
    
    </div>
  );
}

export default tableData;