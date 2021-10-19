import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import './login.css'

const initialValues ={
    email:'',
    password:''
}

const validationSchema =Yup.object({
    email:Yup.string().email('invalid format').required('Required'),
    password:Yup.string().min(6, 'password is too short - should be 6 characters atleast').required('Required')
})

const LoginForm =()=>{
    let history = useHistory()

const onSubmit =values=>{
    history.push('/questions')
    console.log('form data ', values)
}

const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema
})

    // console.log('form values ,' , formik.values)
    // console.log('form errors ', formik.errors)
    // console.log('visited fields ', formik.touched)

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>

                <input className={formik.errors.email && formik.touched.email && "error"} type="email" id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                { formik.touched.email && formik.errors.email ? <div className="input-feedback">{formik.errors.email}</div> : null }

                <label htmlFor="password">Password</label>
                
                <input className={formik.errors.password && formik.touched.password && "error"} type="password" id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                { formik.touched.password && formik.errors.password ? <div className="input-feedback">{formik.errors.password}</div> : null }

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm