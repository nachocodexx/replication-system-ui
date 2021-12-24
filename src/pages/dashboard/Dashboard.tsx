import * as React from "react";
import ApexChart from 'apexcharts'
import { Button } from 'semantic-ui-react'
// import ReactApexChart from 'apexcharts'
import ReactApexCharts from "react-apexcharts";
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './dashboard-page.scss'


function DashboardPage() {

    const auth = useAuth()
    // console.log(auth.user)
    // const auth = useAuth()
    const history = useHistory();
    const barSeries = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "series-2",
            data: [15, 40, 45, 50, 42, 10, 20, 21]
        }
    ]
    const barOptions = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    }
    const series = [
        {
            name: "sn-0",
            data: [
                {
                    x: "object-0",
                    y: 22
                },
                {
                    x: "object-1",
                    y: 0
                },
            ]

        },
        {
            name: "sn-1",
            data: [
                {
                    x: "object-0",
                    y: 0
                },
                {
                    x: "object-1",
                    y: 11
                },
            ]

        }
    ]
    const options = {
        chart: {
            // type: 'line'
            type: 'heatmap',
            height: 350
        },
    }
    const plotOptions = {
        heatmap: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: -30,
                        to: 5,
                        name: 'low',
                        color: '#00A100'
                    },
                    {
                        from: 6,
                        to: 20,
                        name: 'medium',
                        color: '#128FD9'
                    },
                    {
                        from: 21,
                        to: 45,
                        name: 'high',
                        color: '#FFB200'
                    },
                    {
                        from: 46,
                        to: 55,
                        name: 'extreme',
                        color: '#FF0000'
                    }
                    ]
                }
            }
        }
    }


    // var chart = new ApexCharts(document.querySelector("#chart"), options);

    React.useEffect(() => {
        console.log(auth)
        if (auth?.user) {
            console.log("SUCCESS")
            // history.push("/")
        } else {
            console.log("NO LOGIN")
            // history.push("/login")
        }
        auth.stats().then((data: any) => {
            console.log(data)
        })
    }, [])

    return (
        <main className="dashboard-main">
            <Menu inverted icon='labeled'>
                <Menu.Item
                    name='home'
                // active={activeItem === 'gamepad'}
                // onClick={this.handleItemClick}
                >
                    <Icon name='home' />
                    Home
                </Menu.Item>

                <Menu.Item
                    name='profile'
                // active={activeItem === 'video camera'}
                // onClick={this.handleItemClick}
                >
                    <Icon name='user' />
                    Profile
                </Menu.Item>

                <Menu.Item
                    name='files'
                // active={activeItem === 'video play'}
                // onClick={this.handleItemClick}
                >
                    <Icon name='folder' />
                    Files
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item
                        name='logout'
                    // active={activeItem === 'video play'}
                    // onClick={this.handleItemClick}
                    >
                        <Icon name='external alternate' />
                        Logout
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </main>

    );
}

export default DashboardPage;