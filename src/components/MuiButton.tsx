import { Stack, Button } from "@mui/material";

const MuiButton = () => {
  return (
    <div>
      <div style={{padding:"10px"}}>
        <Button variant="text" href="https://www.gogle.com">
          Text
        </Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </div>

      <div style={{padding:"10px"}}>
        <Button variant="contained" color="perimay" size="sm">perimay</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="success">success</Button>
        <Button variant="contained"  color="warning">warning</Button>
        <Button variant="contained"  color="info">info</Button>
        <Button variant="contained"  color="error">error</Button>
      </div>
    </div>
  );
};

export default MuiButton;
