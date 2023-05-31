/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMsal } from "@azure/msal-react";
import { isEmpty } from "lodash";
import { useLazyGetCompaniesQuery } from '@/logic/companies';

interface UserContextProvider {
  children?: ReactNode | ReactElement<any, any>;
}

type PUserContext = {
  user: any | null;
  props: any | null
  // setUser: any 
  // setProps: any 
};

export const UsersPageContext = createContext<PUserContext>({
  user: '',
  props: null,
  // setProps: ()=> {},
  // setUser: ()=> {}, 
});

export function useUserContext() {
  return useContext(UsersPageContext);
}


export const UserContext: FC<UserContextProvider> = ({ children }) => {
  const { accounts } = useMsal()
  const [triggerCompanies, { data, isLoading, isError }] = useLazyGetCompaniesQuery()

  const splitName = accounts[0]?.username.split("@")[0];
  let userName = splitName?.replace(/#/g, "%23");

  useEffect(() => {
    if (userName) triggerCompanies({ userName });
  }, [userName]);

  const [ props, setProps] = useState<any[]>([])
  const [ user, setUser ] = useState();

  useEffect(()=>{
    setProps(data);
  },[data])

  // console.log(props)
  
  return (
    <UsersPageContext.Provider
      value={{ props ,user}} 
    >
      {children}
    </UsersPageContext.Provider>
  );
};
