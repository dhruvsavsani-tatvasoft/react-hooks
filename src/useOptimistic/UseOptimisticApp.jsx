import { useState, useTransition, useOptimistic } from "react";

function UseOptimisticApp() {
  const [serverLikes, setServerLikes] = useState(0);
  const [optimisticLikes, addLike] = useOptimistic(0, (prev, action) => prev + action);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    // 1. Optimistic UI update
    addLike(1);

    // 2. Simulate async server update
    startTransition(() => {
      setTimeout(() => {
        setServerLikes(prev => prev + 1); // actual server state
      }, 1000);
    });
  };

  return (
    <div>
      <button onClick={handleLike}>Like 👍</button>
      <p>Optimistic Likes: {optimisticLikes}</p>
      <p>Server Likes: {serverLikes}</p>
      {isPending && <p>Updating server...</p>}
    </div>
  );
}

export default UseOptimisticApp;
