import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosConfig";
import { Vehicle } from "../../models/vehicle";
import { AxiosError } from "axios";

export const getAllVehicles = createAsyncThunk<
  Vehicle[],
  void,
  { rejectValue: string }
>("vehicles/getAllVehicles", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/campers");
    return response.data.items;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const getVehicleById = createAsyncThunk<
  Vehicle,
  string,
  { rejectValue: string }
>("vehicles/vehicleById", async (id, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
