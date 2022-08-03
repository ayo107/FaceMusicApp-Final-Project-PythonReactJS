import React, { useState } from 'react';
import '../../styles/App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import config from '../config';
import Swal from "sweetalert2";


export const ChangePasswordNoModal = () => {

  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  let id = window.location.href.split(":")[2]

  const ChangePassword = async () => {

    let newRequest = new FormData();
    newRequest.append("password", password);
    newRequest.append("new_password",newpassword);
    newRequest.append("id", id)
    const token = JSON.parse(localStorage.getItem("jwt-token"));

    if (newpassword !== confirmPass) {
      alert("Las contraseñas no coinciden");
      return;
    }
    else {
      const response = await fetch(config.hostname + `/api/user/new-password`, {
        method: "PUT",
        headers: {
          "mode": 'no-cors',
          "Authorization": "Bearer " + token.token
        },
        body: newRequest
      });
      const responseJson = await response.json();
      Swal.fire({
        icon: 'sucess',
        title: 'Contraseña guardada',

      }).then(() => {
        window.location.href = '/personalbio:' + id
      })
      return responseJson;
    }
  }

    return (
      <>
        <div class="form-group">
          <input type="password" class="form-control" onChange={event => setPassword(event.target.value)} required />
          <label class="form-control-placeholder" for="password">Antigua Password</label>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" onChange={event => setNewPassword(event.target.value)} required />
          <label class="form-control-placeholder" for="password">Nueva Password</label>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" onChange={event => setConfirmPass(event.target.value)} required />
          <label class="form-control-placeholder" for="password">Nueva Password</label>
        </div>

        <div className="d-flex justify-content-center mt-3 mb-2" >
          <button onClick={() => ChangePassword()}>Cambiar contraseña</button>
        </div>
        <div className="d-flex justify-content-end">
          <form>
            <a href={"/personalbio:" + id}>
              <input type="button" value="Cerrar" />
            </a>
          </form>
        </div>
      </>
    )

  }

