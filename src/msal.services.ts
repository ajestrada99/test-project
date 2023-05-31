import * as msal from "@azure/msal-browser";
//? This is the services using with login microsft
//? using the env 
// and using the interface 
interface MsalConfig {
    auth:{
        clientId: any,
        authority: any, 
        redirectUri: any 
        postLogoutRedirectUri:any;
        navigateToLoginRequestUrl:boolean
    },
    cache:{
        cacheLocation: any,
        storeAuthStateInCookie:boolean
    }
}

const msalConfig:MsalConfig = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        authority: process.env.NEXT_PUBLIC_AUTHORITY,
        redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI ,
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: process.env.NEXT_PUBLIC_LOCAL_STORAGE_CLIENT,
        storeAuthStateInCookie: true,
      },
    
};



const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance }