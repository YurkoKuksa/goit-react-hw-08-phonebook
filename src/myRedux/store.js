import { configureStore } from '@reduxjs/toolkit';
import { addContacts, removeContacts } from './contacts/contactsSlice';
import { filterContacts } from './contacts/filterSlice';
import { authSliceReducer } from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: { addContacts, removeContacts },
    filter: filterContacts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
