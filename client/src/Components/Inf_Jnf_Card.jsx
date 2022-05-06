import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { FilledForm } from "../constants/FilledForm";
import FormModal from "./FormModal";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaWindows } from 'react-icons/fa';
import {Link} from 'react-router-dom';


function Inf_Jnf_Card(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpdate=()=>{
        
    };
    const url="/JNF_form/"+ props.data._id
    return (
        <>
            <Card sx={{ minWidth: 275 }} className="mx-3 my-3">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.type}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.profile}
                    </Typography>
                    <Typography variant="body2" style={{ maxWidth: 240 }}>
                        {props.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleShow}>View More</Button>
                </CardActions>
            </Card>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {FilledForm.type === "INF" ? (
                            <div>Internship Notification Form</div>
                        ) : (
                            <div>Job Notification Form</div>
                        )}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormModal  data={props.data}/>
                    {console.log(props.data)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Link to={url}>
                    <Button  variant="primary" onClick={()=>{handleClose(); handleUpdate();}}>
                        Update
                    </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Inf_Jnf_Card