import React, { useEffect } from "react";
import "./Clients.scss";
import Table from "../../ReactTable/Table";
import { fetchAuthUser } from "../../features/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Clients = () => {
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.auth);

  console.log("clients",clients);
  

  const User = clients?.map((user) => ({
    userName: user?.userName || "Dummy",
    profile: user?.profile || "No Profile",
    userEmail: user?.userEmail || "dummy@gamil.com",
    Address: user?.userAddress || "root",
    id: user._id
  }));

  useEffect(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  // Check if clients data exists and is an array
  if (!clients || !Array.isArray(clients)) {
    return <div className="client_container">Loading...</div>;
  }

  return (
    <div className="client_container w-100">
      <Table data={User} /> {/* Pass the actual data */}
    </div>
  );
};

export default Clients;
