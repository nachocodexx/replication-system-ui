import * as React from "react";
import { useHistory } from 'react-router-dom'
import ApexChart from 'apexcharts'
import ReactApexCharts from "react-apexcharts";
import { useAuth } from '../../hooks/useAuth'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useForm, SubmitHandler } from "react-hook-form";



import './login-page.scss'
// 
type Inputs = {
    email: string,
    password: string,
};


function LoginPage() {
    const auth = useAuth()
    // const auth0 = useAuth()
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        console.log(`AUTH :${auth}`)
        auth
            .signin(data.email, data.password)
            .then((user: any) => {
                history.push("/")
                // console.log(`USER ${user}`)
                // Promise.resolve()
            }
            )

    }


    React.useEffect(() => {
        if (auth?.user) {
            console.log("LOGIN")
            history.push("/")
        } else {
            console.log("NO LOGIN")
            history.push("/login")
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
                        <label>E-mail Address</label>
                        <input
                            {...register("email")}
                            placeholder='E-mail Address'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder='Password'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='Remember me' />
                    </Form.Field>
                    <Button
                        type='submit'
                    // onClick={onClick}
                    >Sign In</Button>
                </Form>
            </div>
        </main>
    );
}

export default LoginPage;