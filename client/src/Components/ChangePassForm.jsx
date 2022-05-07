import React, { useState } from "react";
import Base from "../base";
import {
    TextField,
    Grid,
    Button,
    Typography,
    Divider,
    Box,
} from "@mui/material";
import axios from "axios";


export default function Form(props) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({
            password: document.getElementById("newPassword").value
        });
        const params = {
            user_id: localStorage.getItem('user_id'),
            password: document.getElementById("newPassword").value
        }
        const headers = {
            Authorization: localStorage.getItem('token'),
        }
        const response = await axios.post(`${Base()}/user/change_password`, params, { headers });
        console.log(response);
        props.setState(() => false);
        //toastify
        // .click();

    };

    return (
        <div className="p-4" style={{ height: "430px" }, { borderRadius: "4px" }}>

            <Grid
                container
                component="main"
                className="shadow-lg"
                style={({ height: "40vh" }, { borderRadius: 20 })}
            >

                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={false}
                />
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    elevation={6}
                    sx={{
                        borderTopRightRadius: "12px",
                        borderBottomRightRadius: "12px"
                    }}
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h4" mb={0} align="center">
                            <span className="display-6">Change Password</span>
                        </Typography>

                        <hr />
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="newPassword"
                                label="New Password"
                                type="password"
                                id="newPassword"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={handleSubmit}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </div>
    );
}

