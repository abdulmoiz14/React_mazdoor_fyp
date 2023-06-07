import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import Chatbox from "./Chatbox";
export default function App() {
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>Launch demo modal</MDBBtn>

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
            <MDBModalBody>
              <Chatbox />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}