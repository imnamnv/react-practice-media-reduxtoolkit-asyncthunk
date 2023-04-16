import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("user/fetch", async () => {
  const request = await axios.get("http://localhost:3005/users");
  await pause(1000);

  return request.data;
});

const pause = async (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
