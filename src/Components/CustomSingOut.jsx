import React from "react";
import { Auth } from "aws-amplify";
import { ButtonContainer } from "./Button";

function CustomSignoutButton() {
  const signOut = (e) => {
    e.preventDefault();
    Auth.signOut().then(() => {
      window.location.reload(false);
    });
    // window.location.reload(); //<!-- it also works without, but just to really kick the user out.-->
  };
  return (
    <ButtonContainer cart signOut onClick={signOut}>
      Sign out
    </ButtonContainer>
  );
}

export default CustomSignoutButton;
