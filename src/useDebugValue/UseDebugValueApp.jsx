import { useState, useDebugValue } from "react";

// Custom hook to track online/offline status
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Update status on online/offline events
  const updateStatus = () => setIsOnline(navigator.onLine);
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);

  // 1. Use useDebugValue to show status in React DevTools
  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}

function UseDebugValueApp() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h1>{isOnline ? "You are Online 🌐" : "You are Offline ❌"}</h1>
    </div>
  );
}

export default UseDebugValueApp;
