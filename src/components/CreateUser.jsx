import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/CreateUser.css";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

export function CreateUser() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
  });

  const fetchUser = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    setUser(res.data);
  };

  const onChangeUserName = (e) => {
    setNewUser(e.target.value);
  };

  onsubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: newUser,
    });
    setNewUser({ username: "" });
    fetchUser();
  };
  const alertErase = (idUser) => {
    Swal.fire({
      background: "#E5E5E5",
      title: "¿Desea eliminar este usuario?",
      text: "Este proceso no es reversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "brown",
      cancelButtonColor: "#010101",
      confirmButtonText: "Si, seguro",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(idUser);
        Swal.fire("Completado", "El usuario ha sido eliminado", "success");
      }
    });
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`)
    fetchUser();
  };
  useEffect(() => {
    fetchUser();
  });
  return (
    <div className="user">
      <div className="formUser">
        <div className="title">
          <h3>Create New User</h3>
        </div>
        <form className="form" onSubmit={onsubmit}>
          <input
            className="inputUser"
            type="text"
            placeholder="New user"
            name="user"
            value={newUser.username}
            onChange={onChangeUserName}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <ul>
        {user.map((item) => (
          <li key={item._id}>
            {item.username}{" "}
            <MdDeleteForever onClick={()=>alertErase(item._id)} className="icon" size={20} />
          </li>
        ))}
      </ul>
    </div>
  );
}
