import React , {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Formik,Form} from 'formik';

class InputForm extends Component {

    state = {
        buttonDisState:true
    }

    render(){
    return (
        <Formik initialValues ={{Version:'',Progress:'',startDate:'',releaseDate:'',Description:'',Actions:'...'}} onSubmit={(values)=>
            this.props.onSubmit(values)}>
            {({values,handleChange,handleBlur})=>(
                <Form>
                    <TextField
                        name = "Version"
                        values = {values.Version}
                        onInput = {()=>this.setState({buttonDisState:false})}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        label="Version Name"
                        margin="dense"
                        style={{ marginRight: '1%' ,marginLeft: '1%',width:'45%'}}
                        
                    />
                    <TextField
                        name = "startDate"
                        values = {values.startDate}
                        onInput = {()=>this.setState({buttonDisState:false})}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        label="Start Date"
                        InputLabelProps={{
                            shrink: true
                        }}
                        type="date"
                        margin="dense"
                        style={{ marginRight: '1%', width: '13.5%' }}

                    />
                    <TextField
                        name = "releaseDate"
                        values = {values.releaseDate}
                        onInput = {()=>this.setState({buttonDisState:false})}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        label="Release Date"
                        InputLabelProps={{
                            shrink: true
                        }}
                        type="date"
                        margin="dense" 
                        style={{ marginRight: '1%', width: '13.5%' }}

                    />
                    <TextField
                        name = "Description"
                        values = {values.Description}
                        onInput = {()=>this.setState({buttonDisState:false})}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        label="Descriptions"
                        margin="dense"
                        style={{ marginRight: '1%', width: '14%' }}

                    />
                    <Button
                        style={{ marginLeft: '1%', marginTop: '1.3%', width:'1%' }}
                        variant="contained"
                        color="primary"
                        type="submit" disabled = {this.state.buttonDisState}>
                        Add
                    </Button>
                    {/* <pre>
                        {JSON.stringify(values)}
                     </pre> */}
                </Form>
            
            )}
        </Formik>
    )
}
}

export default InputForm;