import { Suspense, useState } from "react";
import MainRoute from "./Routes/MainRoute";

function App2() {
  const [name, setName] = useState("Mojca");

  return (
    <Suspense fallback={<p>Loading....</p>}>
      <MainRoute />
    </Suspense>
  );
}

export default App2;
