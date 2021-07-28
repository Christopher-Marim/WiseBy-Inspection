import React from "react";
import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";

import {AppRoutes} from './app.routes'

export function Routes() {
    const { signed } = useAuth();
    return signed ? <AppRoutes /> : <SignIn/>;

}