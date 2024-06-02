import React, { useEffect, useState } from 'react'
import { CustomeLoader } from '../Components/CustomeLoader'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify'

export const ApiDemo = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState()
    const [isLoading, setisLoading] = useState(false)
    const [show, setshow] = useState(false);
    const [user, setuser] = useState({});

    const getUsers = async () => {
        //apicall start
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("axis res", res)
        console.log("api actual res", res.data)
        console.log("api actual res", res.data.message)
        console.log("api actual res", res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data) //set data array to users
        //api call end
        setisLoading(false)

    }

    const handleClose = () => {
        setshow(false)
    }
    const handelShow = async (id) => {

        const user = await axios.get("https://node5.onrender.com/user/user/" + id);
        console.log("user", user);
        setuser(user.data.data);

        setshow(true);
    }
    const deletUser = async (id) => {
        const res = await axios.delete("https://node5.onrender.com/user/user/" + id)
        console.log("Delete res", res);
        if (res.status === 204) {
            toast.error("User Deleted");
            getUsers();
        }
    }
    useEffect(() => {
        getUsers()

    }, [])
    return (
        <div>
            <h1>API DEMO 1</h1>
            {
                isLoading && <CustomeLoader />
            }
            <h1>{ message }</h1>
            {/* <ul>
                {
                    users?.map((user)=>{
                        return <li>{user.name}</li>
                    })
                }
            </ul> */}
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                        <th>STATUS</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user) => {
                            return (
                                <tr>
                                    <td>{ user._id }</td>
                                    <td>{ user.name }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.age }</td>
                                    <td>{ user.isActive == "true" ? "Active" : "Not Active" }</td>
                                    <td>
                                        <button onClick={()=>{deletUser(user._id);}} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={ () => {handelShow(user._id); } } className="btn btn-info">
                                            info
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Modal>
            <Modal.Header>
                <Modal.Title>USER DETAIL</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ user.name }</Modal.Body>
            <Modal.Body>{ user.email }</Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
        </div>
      )
}
