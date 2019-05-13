import React ,{Component} from 'react';
import TableData from './tableData';
import InputForm from './InputForm';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {header,data} from './Utility';

class Home extends Component {

  state ={
    data:data ,
    editIdx : -1,
    query : '',
  }
  
 

  handleRemove = (i)=> {
    this.setState(state =>({
      data : state.data.filter((row,j)=>j !== i)
    }));
  }

  startEditing = (i)=>{
    this.setState({editIdx:i})
  }

  stopEditing = ()=>{
    this.setState({editIdx:-1})
  }

  handleChange = (e,name,i) =>{
    const  {value} = e.target;
    this.setState(state =>({
      data : state.data.map((row,j) => (
        j===i ? 
        {...row , [name] : value} 
        :row))
        
    }))

  }
  render(){
  return(
    <div>
      <div style = {{marginTop:'1.5%',marginLeft:'5%',width:'90%'}}>
      <div>
        <div>
            <div className = "releaseHeading">Releases</div>
            <div>
              <Paper className ="paperClass">IN PROGRESS</Paper>
              <Paper className ="paperClass">UNRELEASED</Paper>
              <Paper className ="paperClass">RELEASED</Paper>
            </div>
        </div>
        <TextField
          name="Search"
          value ={this.state.query.toLocaleLowerCase()}
          onChange={e=>this.setState({query:e.target.value})}
          label="Search"
          margin="dense"
          className = "searchInputBox"
          variant="outlined"
        />
        </div>
        <div className = "hr-line"></div>
        <TableData 
          handleRemove = {this.handleRemove}
          startEditing = {this.startEditing}
          editIdx = {this.state.editIdx}
          handleChange = {this.handleChange}
          stopEditing = {this.stopEditing}
          header = {header}  
          data = {this.state.query?this.state.data.filter(x=>(x["Version"].toLowerCase().includes(this.state.query) || x["Description"].toLowerCase().includes(this.state.query))):this.state.data}>

        </TableData>
        <Paper > 
         <InputForm style = {{marginBottom:'2%'}} onSubmit ={submission =>this.setState({data:[submission,...this.state.data]})} /> 
        </Paper>
      </div>
    </div>
  );
};
}

export default Home;
