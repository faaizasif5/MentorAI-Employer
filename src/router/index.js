import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LazyLoader } from "Layout/lazy-loader";
import Routes from "Config/routes";
import { isLoggedIn } from "Helpers/auth-helper";

function AppRouter() {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Switch>
        {isLoggedIn()
          ? // ONLY AUTHENTICATED ROUTES AVAILABLE IF LOGGED IN
            Routes.filter((route) => route.requireAuthentication).map(
              (route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  component={route.component}
                />
              ),
            )
          : // ONLY NON-AUTHENTICATED ROUTES AVAILABLE IF LOGGED OUT
            Routes.filter((route) => !route.requireAuthentication).map(
              (route) => {
                return (
                  <Route
                    key={route.name}
                    path={route.path}
                    component={route.component}
                  />
                );
              },
            )}

        <Route path="*">
          {isLoggedIn() ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Suspense>
  );
}

export default AppRouter;
