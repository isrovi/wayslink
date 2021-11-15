import React from "react";

import { Modal, Button } from "react-bootstrap";

function Delete(props) {
  return (
    <>
      <Modal {...props} centered>
        <div
          style={{ fontSize: "24px" }}
          className="text-success text-center p-5"
        >
          you are sure want to remove this link
          <div className="d-flex justify-content-between">
            <div></div>
            <div className="mt-5 d-flex flex-end">
              <Button
                style={{
                  width: "140px",
                  background: "#FF0000",
                  borderRadius: "10px",
                }}
                className="me-4"
                variant="danger"
                onClick={() => props.deleteData(props.dataId)}
              >
                Yes
              </Button>
              <Button
                style={{
                  width: "140px",
                  background: "#E5E5E5",
                  borderRadius: "10px",
                }}
                className="text-white"
                variant="light"
                onClick={props.onHide}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Delete;
