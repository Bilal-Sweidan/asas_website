import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
// material ui
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

// react icons
import { FiHome } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";

// sass file
import './AdminSideBar.scss'
export default function AdminSideBar({ sideBarStatus, setSideBarStatus }) {
    const navigate = useNavigate()


    const [open, setOpen] = useState(false);
    const [controlOpen, setControlOpen] = useState(false)

    useEffect(() => {
        if(!sideBarStatus){
            setOpen(false)
            setControlOpen(false)
        }
    },[sideBarStatus])

    return (
        <main className='sidebar vh-100 text-light' style={{ minWidth: "100%", backgroundColor: "#1d1d42", borderRight: "1px solid #666" }}
            onMouseOver={() => {
                if (!sideBarStatus) {
                    setSideBarStatus(!sideBarStatus)
                }
            }}
            onMouseOut={() => {
                if (!sideBarStatus) {
                    setSideBarStatus(!sideBarStatus)
                }
            }}
        >
            <div className='center' style={{ height: "63px", borderBottom: "1px solid #666" }}>
                <h3 className='text-light text-capitalize overflow-hidden text-nowrap m-0' style={{ fontFamily: "Sevillana-Regular" }}>
                    <span style={{ fontFamily: "Sevillana-Regular" }} className='h1'>A </span> {sideBarStatus ? "raaik store" : ""}
                </h3>
            </div>
            <div className='p-3 overflow-hidden'>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: '' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader" className='text-uppercase' style={{ background: "none", color: "white" }}>
                            <p className='fs-12 fw-bold' style={{color : "#666"}}>
                                {
                                    sideBarStatus ? "main" : <FaDotCircle/>
                                }
                            </p>
                        </ListSubheader>
                    }
                >
                    <ListItemButton onClick={() => setOpen(!open)} className='list-header-button-padding'>
                        <ListItemIcon className=''>
                            <FiHome size={"22px"} color='white' />
                        </ListItemIcon>
                        <ListItemText primary="Dashboards"/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary="Sales" onClick={() => navigate('dashboard/sales')}/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary="Customers" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>

                {/* control side */}
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: '' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader" className='text-uppercase' style={{ background: "none", color: "white" }}>
                            <p className='fs-12 fw-bold'>
                                {
                                    sideBarStatus ? "control" : "o"
                                }
                            </p>
                        </ListSubheader>
                    }
                >
                    <ListItemButton onClick={() => setControlOpen(!controlOpen)} className='list-header-button-padding'>
                        <ListItemIcon>
                            <AiOutlineProduct size={"22px"} color='white' />
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                        {controlOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={controlOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary="all product" className='text-capitalize' />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('products/create-product')}>
                                <ListItemIcon>
                                    <BsCartPlus size={"22px"} color='white' />
                                </ListItemIcon>
                                <ListItemText primary="create product" className='text-capitalize'/>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </div>
        </main>
    )
}
