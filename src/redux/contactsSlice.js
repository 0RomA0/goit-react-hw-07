import { createSlice, createSelector } from "@reduxjs/toolkit"

import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
  },
    extraReducers: builder => {
    builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.rejected, handleRejected)
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
         })
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(deleteContact.fulfilled, (state, action) => { 
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(item => item.id !== action.payload.id);
        })
  },
});


export default contactsSlice.reducer;


export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
       return contacts.filter((contact) => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
    });

    

    