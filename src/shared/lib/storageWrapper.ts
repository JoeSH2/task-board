class StorageWrapper {
  private storage: Storage | undefined;
  constructor(type: 'local' | 'session') {
    if (type === 'local') {
      try {
        this.storage =
          type === 'local' ? window.localStorage : window.sessionStorage;
      } catch (error) {
        console.log(error);
      }
    }
  }

  get<T>(key: string) {
    if (!this.storage) return;
    try {
      const value = this.storage.getItem(key);
      if (value === null) return;
      const result = JSON.parse(value) as T;
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  set(key: string, value: unknown) {
    if (!this.storage) return;
    try {
      const stringValue = JSON.stringify(value);

      this.storage.setItem(key, stringValue);
    } catch (error) {
      console.log(error);
    }
  }

  remove(key: string) {
    if (!this.storage) return;
    try {
      return this.storage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  clear() {
    if (!this.storage) return;
    try {
      return this.storage.clear();
    } catch (error) {
      console.log(error);
    }
  }
}

export const localStorageWrapper = new StorageWrapper('local');
export const sessionStorageWrapper = new StorageWrapper('session');
