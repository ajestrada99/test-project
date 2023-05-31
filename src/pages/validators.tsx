import { useContext, useEffect } from "react";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { UsersPageContext } from "@/contexts/user-context";
import Router from "next/router";

const Valiadators = () => {
  const context = useContext(UsersPageContext);
  const { props } = context;

  useEffect(() => {
    if (props?.value) {
      Router.push({
        pathname: `/dashboard/settlements/${props?.value[0]?.Worker}-${props?.value[0]?.company}`,
      });
    }
  }, [props]);

  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent="center"
        alignItems={"center"}
        minHeight={"100vh"}
      >
        <Grid md={12}>
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube" />
            <div className="sk-cube2 sk-cube" />
            <div className="sk-cube4 sk-cube" />
            <div className="sk-cube3 sk-cube" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Valiadators;
