import { Grid, Skeleton, Stack } from "@mui/material";

const LayOutLoader = () => {
  return (
    <>
      <Grid
        container
        height={"calc(100vh-4rem)"}
        spacing={"1rem"}
        style={{ height: "100%" }}
      >
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          style={{ height: "100%" }}
        >
          {/* //? here we are dividing the display in 3 parts according the screen size. If the screen is sm the first grid will be hidden.*/}
          <Skeleton variant="rectangular" height={"100vh"} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={6}>
          <Stack>
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton variant="rounded" height={"5rem"} key={index} />
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          style={{ height: "100%" }}
          sx={{
            display: { xs: "none", md: "block" },
            padding: "2rem",
          }}
        >
          <Skeleton variant="rectangular" height={"100vh"} />
        </Grid>
      </Grid>
    </>
  );
};
export default LayOutLoader;
