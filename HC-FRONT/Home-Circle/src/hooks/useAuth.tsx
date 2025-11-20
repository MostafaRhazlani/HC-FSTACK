import { useEffect, useState } from "react";
import Keycloak from "keycloak-js";

export const client = new Keycloak({
    url: "http://localhost:8080",
    realm: "hc-realm",
    clientId: "hc-client",
});

let initPromise: Promise<boolean> | null = null;

const useAuth = () => {
    const [isLogin, setLogin] = useState(!!client.authenticated);
        const [isInitialized, setInitialized] = useState(!!client.authenticated);


    useEffect(() => {
        if(!initPromise) {
            initPromise = client.init(
                { 
                    onLoad: "check-sso",
                    checkLoginIframe: false
                }
            )
        }

        initPromise
            .then((authenticated) => {
                setLogin(authenticated);
                setInitialized(true);
            })
            .catch((error) => {
                console.log("Authentication Failed", error);
                setInitialized(true);

            });
    }, []);

    const login = () => client.login();
    const register = () => client.register();
    const logout = () => client.logout({ redirectUri: "http://localhost:3000/" });

    return { isLogin, login, isInitialized, register, logout, token: client.token};
}

export default useAuth;