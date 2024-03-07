import React from "react";
import MainNavigator from "./routes/navigation";
import { IKContext } from "imagekitio-react";
import { useSelector } from "react-redux";

const App = () => {
  const isLoading =useSelector((state)=>state.loading.isLoading)
  console.log('isLoading----',isLoading)
  
  return (
    <IKContext
      publicKey="public_SWufzC3NBuBYZKszPsXhFdh1XDo="
      urlEndpoint="https://ik.imagekit.io/saufrbirqu"
    >
      <MainNavigator />
      {/* <AddtoCart/> */}
    </IKContext>
  );
};

export default App;
