// import { LoaderStore } from '@components/Loader';
import { create } from 'mobx-persist';
import AuthStore from '@store/AuthStore';
// import AuthStore from '@store/AuthStore';
import AsyncStorage from '@react-native-community/async-storage';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

export function createStores() {
  const stores = {
    // loaderStore: new LoaderStore(),
    authStore: new AuthStore(),
    // authStore: new AuthStore(),
  };
  return stores;
}

export function hydrateStores(storeManager) {
  const { stores } = storeManager;
  hydrate('authStore', stores.authStore).then(() => { });
  // hydrate('authStore', stores.authStore).then(() => { });
}
