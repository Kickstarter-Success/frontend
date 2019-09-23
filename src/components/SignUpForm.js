import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import {withFormik, Form, Field} from 'formik'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
justify-center: center;
align-content: center;
align-items: center;
margin: 10% auto;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
padding: 4% 0;
width: 25%
background-color: white;
`

const NewUserForm = ({values, errors, touched, status}) => {
    // const [user, setUser] = 
    const [user, setUser]= useState([])
    useEffect(() => {
        if (status) {
          setUser([...user, status]);
        }
      }, [status]);

    return(
        <div>
            <Form>
                <Card>
                    <h2>Sign Up</h2>
                    <Field type='text' name='username' placeholder='username'/>
                    {touched.username && errors.username && (<p className='error'>{errors.username}</p>)}
                    <Field type='password' name='password' placeholder='password'/>
                    {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                    <button type='submit'>Sign Up</button>
                    <p>Already Have an Account?</p>
                    <Link to={'/sign_in'}>Sign In!</Link>
                </Card>
            </Form>
        </div>
    )
}

const FormikNewUserForm = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username:Yup.string().required(),
        password:Yup.string().required()
    }),
    handleSubmit(values, {setStatus}){
        console.log('hello')
        axios
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            console.log("https://reqres.in/api/users/", values)
            setStatus(res.data);
          })
          .catch(err => console.log(err.res));
    }
})(NewUserForm)

export {FormikNewUserForm}