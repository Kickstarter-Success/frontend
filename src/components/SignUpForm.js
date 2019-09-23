import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import {withFormik, Form, Field} from 'formik'
import {Link} from 'react-router-dom'

const NewUserForm = ({valules, errors, touched, status}) => {
    // const [user, setUser] = 
    return(
        <div>
            <Form>
                <Field type='text' name='username' placeholder='username'/>
                <Field type='password' name='password' placeholder='password'/>
                <button type='submit'>Sign Up</button>
                <p>Already Have an Account?</p>
                <Link>Sign In!</Link>
            </Form>
        </div>
    )
}

const FormikNewUserForm = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || '',
            password: password || ''
        };
    },
    validateOnChange: Yup.object().shape({
        username:Yup.string().required(),
        username:Yup.string().required()
    }),
    handleSubmit(values, {setStatus}){
        continue
    }
})