import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@mui/material/Rating';
import "../style/Chatbox.css";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { Close as CloseIcon, Phone as PhoneIcon, Chat as ChatIcon } from '@material-ui/icons';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from 'mdb-react-ui-kit';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 8,
    backgroundColor: '#93e2bb',
    position: 'relative',
    maxWidth: '500px',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
        maxWidth: '380px',
    },
    height: '210',
  },
  modalBody: {
    maxHeight: 400,
    overflowY: 'scroll',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(2),
    border: '3px solid #000',
  },
  followButton: {
    marginRight: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    color: '#1B7B2C',
    position: 'relative',
  },
  chatButton: {
    marginTop: theme.spacing(1),
  },
  hireButton: {
    borderRadius: 8,
    marginTop:10,
  },
  name: {
    fontFamily: 'Lorem' ,
    fontWeight: 'bold',
    fontSize:20,
  },
}));

export default function Bidprofile({ data }) {
  const classes = useStyles();
  const [isCardVisible, setCardVisible] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

  const handleCloseCard = () => {
    setCardVisible(false);
  };

  const handleCall = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {isCardVisible && (
        <Card className={classes.card}>
          <CardHeader title={data.title} titleTypographyProps={{ variant: 'h6' }} />
          <CardContent>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
              <Grid item  sm={3}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Avatar className={classes.avatar} src={data.profileImage} alt="User Avatar" />
                </Box>
              </Grid>
              <Grid item  sm={6}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Typography variant="body1"  className={classes.name} component="h1">
                    {data.username}
                  </Typography>
                </Box>
                  <Box className={classes.rating}>
                    <Rating name="read-only" value={data.rating} precision={0.1} readOnly />
                  </Box>
                </Box>
              </Grid>
              <grid container direction="column" justifyContent="center" alignItems="flex-start"item  sm={9}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Rs {data.price}
                  </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                  <IconButton color="primary" size="small" className={classes.chatButton} onClick={toggleShow}>
                    <ChatIcon />
                    <MDBModal tabIndex='-1' show={gridModal} setShow={setGridModal}>
                      <MDBModalDialog>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Chat</MDBModalTitle>
                            <MDBBtn
                              type='button'
                              className='btn-close'
                              color='none'
                              onClick={toggleShow}
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody className={classes.modalBody} style={{height:400}}>
                          <div className="d-flex flex-row justify-content-start">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                            <div>
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}
                              >
                                Hi
                              </p>
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}
                              >
                                How are you ...???
                              </p>
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}
                              >
                                What are you doing tomorrow? Can we come up a bar?
                              </p>
                              <p className="small ms-3 mb-3 rounded-3 text-muted">
                                23:58
                              </p>
                            </div>
                          </div>

                          <div className="divider d-flex align-items-center mb-4">
                            <p
                              className="text-center mx-3 mb-0"
                              style={{ color: "#a2aab7" }}
                            >
                              Today
                            </p>
                          </div>

                          <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                            <div>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                Hiii, I'm good.
                              </p>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                How are you doing?
                              </p>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                Long time no see! Tomorrow office. will be free on sunday.
                              </p>
                              <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                00:06
                              </p>
                            </div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                          </div>

                          <div className="d-flex flex-row justify-content-start mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                            <div>
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}
                              >
                                Okay
                              </p>
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}
                              >
                                We will go on Sunday?
                              </p>
                              <p className="small ms-3 mb-3 rounded-3 text-muted">
                                00:07
                              </p>
                            </div>
                          </div>

                          <div className="d-flex flex-row justify-content-end mb-4">
                            <div>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                That's awesome!
                              </p>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                I will meet you Sandon Square sharp at 10 AM
                              </p>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                Is that okay?
                              </p>
                              <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                00:09
                              </p>
                            </div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                          </div>

                          <div className="d-flex flex-row justify-content-start mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                            <div>
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}
                              >
                                Okay i will meet you on Sandon Square
                              </p>
                              <p className="small ms-3 mb-3 rounded-3 text-muted">
                                00:11
                              </p>
                            </div>
                          </div>

                          <div className="d-flex flex-row justify-content-end mb-4">
                            <div>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                Do you have pictures of Matley Marriage?
                              </p>
                              <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                00:11
                              </p>
                            </div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                          </div>

                          <div className="d-flex flex-row justify-content-start mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                            <div>
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ backgroundColor: "#f5f6f7" }}
                              >
                                Sorry I don't have. i changed my phone.
                              </p>
                              <p className="small ms-3 mb-3 rounded-3 text-muted">
                                00:13
                              </p>
                            </div>
                          </div>

                          <div className="d-flex flex-row justify-content-end">
                            <div>
                              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                Okay then see you on sunday!!
                              </p>
                              <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                00:15
                              </p>
                            </div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                          </div>
                          </MDBModalBody>
                          <MDBModalFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                            alt="avatar 3"
                            style={{ width: "45px", height: "100%" }}
                          />
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            placeholder="Type message"
                          ></input>
                          <a className="ms-1 text-muted" href="#!">
                            <MDBIcon fas icon="paperclip" />
                          </a>
                          <a className="ms-3 text-muted" href="#!">
                            <MDBIcon fas icon="smile" />
                          </a>
                          <a className="ms-3" href="#!">
                            <MDBIcon fas icon="paper-plane" />
                          </a>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                  </IconButton>
                  <IconButton color="primary" size="small" onClick={handleCall}>
                    <PhoneIcon />
                  </IconButton>
                </Box>
              </grid>
            </Grid>
            <Button  className={classes.hireButton} variant="contained" color="primary" fullWidth size="large">
              Hire!
            </Button>
          </CardContent>
          <IconButton className={classes.closeButton} onClick={handleCloseCard} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Card>
      )}

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">Phone Number</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can contact the Tasker by calling the following number:
            <Typography variant="h6" align="center" color="primary">
              {data.phoneNumber}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Button onClick={() => (window.location.href = `tel:${data.phoneNumber}`)} color="primary" autoFocus>
            Call
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
