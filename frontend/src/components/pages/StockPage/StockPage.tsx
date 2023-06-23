import { Button, Stack } from "@mui/material";
import * as React from "react";

type StockPageProps = {
  //
};

const StockPage: React.FC<any> = () => {
  return (
    <div>
      <Stack spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </div>
  );
};

export default StockPage;
