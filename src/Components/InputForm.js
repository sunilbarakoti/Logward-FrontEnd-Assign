/*
    This is a child to the "Home" component and serves as a form to input the release information.
    Formik has been used as a form helper.
    Formik : https://formik.org/docs/overview

*/

import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import { Formik, Form } from "formik";

import './InputForm.css';

class InputForm extends Component {
    state = {
        buttonDisState: true,
    };

    render() {
        return (
            <Formik
                initialValues={{
                    Version: "",
                    Status: "IN PROGRESS",
                    Progress: "",
                    startDate: "",
                    releaseDate: "",
                    Description: "",
                    Actions: "...",
                }}
                onSubmit={(values) => this.props.onSubmit(values)}
            >
                {({ values, handleChange, handleBlur }) => (
                    <Form className="formikForm">
                        <TextField
                            required
                            name="Version"
                            values={values.Version}
                            onInput={() => this.setState({ buttonDisState: false })}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Version"
                            margin="dense"
                            className="formikForm__version"
                        />
                        <TextField
                            required
                            name="startDate"
                            values={values.startDate}
                            onInput={() => this.setState({ buttonDisState: false })}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Start Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="date"
                            margin="dense"
                            className="formikForm__startDate"
                        />
                        <TextField
                            name="releaseDate"
                            values={values.releaseDate}
                            onInput={() => this.setState({ buttonDisState: false })}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Release Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="date"
                            margin="dense"
                            className="formikForm__releaseDate"
                        />
                        <TextField
                            name="Description"
                            values={values.Description}
                            onInput={() => this.setState({ buttonDisState: false })}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Description"
                            margin="dense"
                            className="formikForm__description"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="formikForm__formbutton"
                            disabled={this.state.buttonDisState}
                        >
                            Add
            </Button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default InputForm;
