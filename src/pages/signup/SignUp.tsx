import * as React from "react";
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useForm, SubmitHandler } from "react-hook-form";



import './signup-page.scss'
// 
type Inputs = {
    firstName: String,
    lastName: String,
    email: string,
    confirmPassword: string,
    password: string,
};


function SignUpPage() {
    const authServiceURL = "http://localhost:7500/api/v6/signup"
    // const auth = useAuth()
    const { auth } = useAuth()
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        const response = fetch(authServiceURL, {
            method: "POST",
            body: JSON.stringify(data),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(json => Promise.resolve(console.log(json)))
            .catch(e => {
                console.error(e)
            })
    }


    React.useEffect(() => {
        if (auth?.user) {
            console.log("LOGIN")
            history.push("/")
        } else {
            console.log("NO LOGIN")
            // history.push("/")
        }
    }, [])

    // const onClick = (data: any) => {
    // const dataJson = JSON.stringify(data)
    // console.log(data)
    // console.log(data)
    // }

    return (
        <main className="login-wrapper">
            <div className="login-form">
                <Form onSubmit={handleSubmit(onSubmit)}  >

                    <Form.Field>
                        <label>First name</label>
                        <input
                            {...register("firstName")}
                            placeholder='First name'
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Last name</label>
                        <input
                            {...register("lastName")}
                            placeholder='Last name'
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>E-mail Address</label>
                        <input
                            {...register("email")}
                            placeholder='E-mail Address'
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Password</label>
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            placeholder='Confirm password'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm password</label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder='Password'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I accept the Terms of Use & Privacy Policy' />
                    </Form.Field>
                    <Button
                        type='submit'
                    // onClick={onClick}
                    >Sign Up</Button>
                </Form>
            </div>
        </main>
    );
}

export default SignUpPage;