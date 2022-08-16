
import { doLogin } from "./index";
import * as $http from "../../httpProvider";
import * as configUrl from "../../configUrl";
import * as TokenUtils from "../../../util/tokenUtils";

export const fnDoLogin = user => {
  return dispatch => {
    console.log(user);
    $http
      .postData(`${configUrl.API_BASE_URL}/auth/login`, {
        username: user.username,
        password: user.password,
        metamask: user.metamask
      })
      .then(response => {
        console.log("login======",response);
        dispatch(doLogin(response.data));
        if (response.data.data !== undefined) {
          TokenUtils.setToken(JSON.stringify(response.data.data));
        }
        window.location.href = "/";
      })
      .catch(error => {
        if (error.response.data.message !== undefined) {
          alert({
            title: 'Errors',
            message: error.response.data.message,
            type: 'error'
          })
        } else {
          console.log(error);
          alert(error);
        }
      });
  };
};
