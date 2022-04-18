import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import debitCardReducers from './reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function configureStore() {
    const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
      keyPrefix: '',
      whitelist: [
        'debitCardDetails',
      ],
      timeout: null,
    };
    const persistedReducer = persistReducer(persistConfig, debitCardReducers);
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);
    return store;
  }