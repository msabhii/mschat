//* To add validation in the login and sign up page

import { isValidUsername } from "6pp"; //? To validate the username

export const usernameValidator = (username) => {
  if (!isValidUsername(username))
    return {
      isValid: false,
      errorMessage: "The UserName is not valid",
    };
};
