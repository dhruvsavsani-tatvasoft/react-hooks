import React, { useSyncExternalStore, useState } from "react";

// 1. Create a simple store
const store = {
  state: { count: 0 },
  listeners: [],
  increment() {
    this.state.count += 1;
    this.listeners.forEach(listener => listener());
  },
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return this.state.count;
  }
};

// 2. React component subscribing to the store
function UseSyncExternalStoreApp() {
  const count = useSyncExternalStore(
    store.subscribe.bind(store),
    store.getSnapshot.bind(store)
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => store.increment()}>Increment</button>
    </div>
  );
}

export default UseSyncExternalStoreApp;
