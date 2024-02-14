import React from "react";
import MainNavigator from "./routes/navigation";
import { IKContext } from "imagekitio-react";

const App = () => {
  return (
    <IKContext
      publicKey="public_SWufzC3NBuBYZKszPsXhFdh1XDo="
      urlEndpoint="https://ik.imagekit.io/saufrbirqu"
    >
      <MainNavigator />
    </IKContext>
  );
};

export default App;
