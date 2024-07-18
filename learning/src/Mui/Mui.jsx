import { Button, Fab, IconButton } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { LoadingButton } from '@mui/lab';

export const Mui = () => {

    const [isloading, setisloading] = useState(true)
    setTimeout(() => {
        setisloading(false)
    }, 4000);

    return (
        <div>
            <h1>Mui Icon</h1>

            <div>
                <Button variant='outlined'> My Button </Button>
                <Button variant="text">My Button</Button>
                <Button variant="contained">My Button</Button>
            </div>
            <div>
                <br></br><Button variant='outlined' color="secondary"> My Button </Button>
                <Button variant="text" color="error">My Button</Button>
                <Button variant="contained" color="success">My Button</Button>
            </div>

            <div>
                <br></br><Button variant='outlined' color="secondary" size="small"> My Button </Button>
                <Button variant="text" color="error" size="medium">My Button</Button>
                <Button variant="contained" color="success" size="large">My Button</Button>
            </div>
            <div>
                <br></br><Button variant="outlined" startIcon={ <DeleteIcon /> }>
                    Delete
                </Button>
                <Button variant="contained" endIcon={ <SendIcon /> }>
                    Send
                </Button><br></br>
                <Button
                    variant="contained"
                    sx={ {
                        color: "pink",
                        height: "70px",
                        width: "30px",
                        backgroundColor: "grey",
                    } }
                >
                    my button
                </Button>
            </div>

            <IconButton onClick={ () => { alert("ok") } }>
                <FingerprintIcon></FingerprintIcon>
            </IconButton>
            <div>
                <Fab color="primary">
                    <SendIcon></SendIcon>
                </Fab>
            </div>
            <div>
                <LoadingButton variant='contained' loading={ isloading }> Loading </LoadingButton>
            </div>

            



        </div>
    )
}
