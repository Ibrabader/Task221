import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/index-store";

function SuccessModal(props) {
  const dispatch = useDispatch();
  const refresh = (e) => {
    dispatch(modalActions.handleClose());
    window.location.reload(false);

  };
  return (
    <div clas>
      <div class="card text-center">
        <div class="card-header text-success">Suuccessful</div>
        <div class="card-body">
          <a onClick={refresh} href="#" class="btn btn-success">
            Close
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
