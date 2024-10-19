// app/playground/[userId]/page.tsx

import { useRouter } from 'next/router';

const Multi = () => {
  const router = useRouter();
  const { userId } = router.query; // Access the dynamic userId from the URL
  const sessionId = router.query.sessionId; // Access the sessionId query parameter

  // Check if userId and sessionId are available
  if (!userId || !sessionId) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <h1>Playground for User: {userId}</h1>
      <p>Session ID: {sessionId}</p>
      {/* Your component content goes here */}
    </div>
  );
};

export default Multi
