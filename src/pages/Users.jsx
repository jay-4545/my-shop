import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slice/userSlice";

function Users() {
  const users = useSelector((store) => {
    return store.user;
  });
  const dispatch = useDispatch();

  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (users.loading) return <p>Loading...</p>;
  if (users.error) return <p>Error...</p>;
  if (users.users)
    return (
      <p>
        {users.users.map((value) => {
          return <p>{value.name}</p>;
        })}
      </p>
    );
}

export default Users;
