"use client";

import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import Link from "next/link";

const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface CreateProductModalProps {
    open: boolean;
    handleClose: () => void;
}


export default function CreateProductModal({ 
    open, 
    handleClose
}: CreateProductModalProps) {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={styles}>
                <form action="w-full max-w-xs">
                <Stack spacing={2}>
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                    />
                    <TextField
                        name="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                    />
                    <Button type="submit" variant="contained">
                        Signup
                    </Button>
                </Stack>
                </form>
            </Box>
        </Modal>
    )
}