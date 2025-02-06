import { MenuItem, TextField } from "@mui/material";

const EditPopUp = () => {
  return (
    <div>
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="dense"
      />
      <TextField
        label="URL"
        name="url"
        fullWidth
        margin="dense"
      />
      <TextField
        label="Tags"
        name="tags"
        fullWidth
        margin="dense"
      />
      <TextField
        select
        label="Type"
        name="type"
        fullWidth
        margin="dense"
      >
        <MenuItem>Watchlist</MenuItem>
        <MenuItem>Wishlist</MenuItem>
        <MenuItem>Shopping List</MenuItem>
      </TextField>
      <TextField
        select
        label="Status"
        name="status"
        fullWidth
        margin="dense"
        color="secondary"
      >
        <MenuItem>Not Started</MenuItem>
        <MenuItem>In Progress</MenuItem>
        <MenuItem>Completed</MenuItem>
      </TextField>
      <TextField
        label="Amount"
        name="amount"
        type="number"
        margin="dense"
        fullWidth
        color="secondary"
      />
      <TextField
        label="Deadline"
        name="deadline"
        type="date"
        fullWidth
        margin="dense"
      />
      <TextField
        label="Description"
        name="description"
        fullWidth
        margin="dense"
        multiline
        rows={3}
      />
    </div>
  );
};

export default EditPopUp;
