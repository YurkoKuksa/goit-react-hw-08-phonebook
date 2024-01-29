import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import contactsSlice from './contactsSlice';
// import filterSlice from './filterSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// whitelist: [token],
// };

// const persistedReducer = persistReducer(persistConfig, contactsSlice);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filter: filterSlice,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
