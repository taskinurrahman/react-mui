import {Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <div>
      <div style={{margin:"10px"}}>
        <Button variant="text" href="https://www.gogle.com">
          Text
        </Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </div>

      <div style={{margin:"10px"}}>
        <Button variant="contained" color="primary">perimay</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="success">success</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="error">error</Button>
      </div>


      <div style={{margin:"10px"}}>
        <Button variant="contained" startIcon={<SendIcon/>}>send</Button>
        <Button variant="contained" endIcon={<SendIcon/>}>send</Button>
        <SendIcon></SendIcon>
      </div>
    </div>
  );
};

export default MuiButton;
