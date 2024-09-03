import React, { useRef, useState } from "react";

const Modal = React.forwardRef((props, ref) => {
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{
        display: props.visible ? "flex" : "none", // Use flexbox to center
        visibility: props.visible ? "visible" : "hidden",
        backgroundColor: "rgba(0,0,0,0.5)", // Background overlay
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog"
        style={{
          width: "40%", // Set width to 40% of the window size
          maxWidth: "90%", // Optional: Ensure modal doesn't exceed screen width on smaller screens
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.data.Title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={props.onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{props.data.subject}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              style={{backgroundColor:'red'}}
              onClick={props.onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const Card = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modal = useRef();

  return (
    <div className="card" style={{ margin: "10px", border: "solid 1px gray" }}>
      <Modal
        ref={modal}
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        data={props.data}
      />
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "green" }}
            onClick={() => setIsModalVisible(true)}
          >
            Preview
          </button>
          <button className="btn btn-primary">Add for Next</button>
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  const Applications = [
    { Title: "Application for Library" },
    { Title: "Application for Library" },
    { Title: "Application for Library" },
  ];
  return (
    <>
      {Applications.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </>
  );
};

export default Notifications;
