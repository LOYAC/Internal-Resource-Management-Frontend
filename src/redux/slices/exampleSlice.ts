import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Simulated async functions (replace with real API calls later)
const fakeApiCall = <T>(response: T, delay = 500): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(response), delay));

// Types
interface Item {
  id: number;
  name: string;
}

interface ExampleState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  items: [],
  loading: false,
  error: null,
};

// Async thunks
export const addItem = createAsyncThunk<Item, Item>(
  "example/addItem",
  async (item) => {
    return await fakeApiCall(item);
  }
);

export const editItem = createAsyncThunk<Item, Item>(
  "example/editItem",
  async (updatedItem) => {
    return await fakeApiCall(updatedItem);
  }
);

export const deleteItem = createAsyncThunk<number, number>(
  "example/deleteItem",
  async (itemId) => {
    return await fakeApiCall(itemId);
  }
);

const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ADD ITEM
      .addCase(addItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Add failed";
      })

      // EDIT ITEM
      .addCase(editItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        const index = state.items.findIndex((i) => i.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
        state.loading = false;
      })
      .addCase(editItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Edit failed";
      })

      // DELETE ITEM
      .addCase(deleteItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Delete failed";
      });
  },
});

export default exampleSlice.reducer;
