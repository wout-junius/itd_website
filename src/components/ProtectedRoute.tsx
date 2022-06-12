import { Navigate, Outlet, useNavigate } from "react-router-dom";

import React, { ReactElement } from "react";
import PropTypes from "prop-types";

const ProtectedRoute = (
  props: React.PropsWithChildren<{ user: any; redirectPath: string }>
): ReactElement<any, any> => {
  if (!props.user || new Date(props.user.exp) < new Date()) {
    console.log(props.redirectPath);
    return <Navigate to={props.redirectPath} replace />;
  }
  return props.children as ReactElement<any, any>;
};
export default ProtectedRoute;
