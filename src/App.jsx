import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { useState } from "react";
import { useEffect } from "react";
import Secrect from "./Pages/Secrect/Secrect";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);



  return (
    <div >
      {isLoading ? (
        <Secrect></Secrect>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}

    </div>
  );
};

export default App;
