import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi, usersApi, authGoogleApi } from "@/api/index.js";
import { history } from "@/libs/utils/index.js";
import { setLocalStorage } from "@/libs/utils";
import { setLoading, setId } from "./features.js";
import { addNotification } from "@/libs/utils/addNotification.js";

export const userSignUp = createAsyncThunk(
  "user/sign-up",
  async ({ option, next }, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { id } = await authApi.signUp(option);

      if (id) {
        dispatch(setId(id));
        next();
      }
    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userOtp = createAsyncThunk(
  "user/otp",
  async (params, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { token } = await authApi.otp(params);
      if (token && token !== null) {
        setLocalStorage("access-token", token);
        history.push("/student");
      }
    } catch (error) {
      addNotification(error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userSignIn = createAsyncThunk(
  "user/sign-in",
  async (params, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await authApi.signIn(params);

      if (res.data) {
        const { data } = res

        setLocalStorage("access-token", data.token);
        history.push("/student");
      }
    } catch (error) {
      addNotification(error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userResetPassword = createAsyncThunk(
  "user/reset-password",
  async (params, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const data = await authApi.resetPassword(params.option);

      if (data.status && data.status === 200) {
        params.navigate("/reset");
      }
    } catch (error) {
      addNotification(error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userChangePassword = createAsyncThunk(
  "user/change-password",
  async (params, { dispatch }) => {
    try {
      const { data } = await authApi.changePassword(params);

    } catch (error) {
      addNotification(error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userSignUpGoogle = createAsyncThunk(
  "user/sign-up/google",
  async (params, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const token = await authGoogleApi.signUpWidthGoogle();
    } catch (e) {
      addNotification(e)
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userSignInGoogle = createAsyncThunk(
  "user/sign-in/google",
  async (params, { dispatch }) => {
    window.open(
      `http://single.uz/api/user-auth-google/google`,
      "_blank",
      "width=500 height=600"
    );
    try {
      dispatch(setLoading(true));
      const token = await authGoogleApi.signInWidthGoogle();
    } catch (e) {
      addNotification(e)
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userSignUpFacebook = createAsyncThunk(
  "/user-up-google",
  async (params, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const token = await authApi.signUpWidthFacebook();
    } catch (e) {
      addNotification(e)
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const userSignInFacebook = createAsyncThunk(
  "/user-up-google",
  async (params, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const token = await authApi.signInWidthFacebook();
    } catch (e) {
      addNotification(e)
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const teacherBecome = createAsyncThunk(
  "teacher/become",
  async (params, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await usersApi.becomeTeacher(params);

    } catch (e) {
      addNotification(e);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
