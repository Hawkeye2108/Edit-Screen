// // import React from 'react';
// // import { Box, TextField, Button, Checkbox, FormControlLabel, MenuItem, Typography, IconButton, Grid } from '@mui/material';
// // import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// // const EditUserDetails = () => {
// //   return (
// //     <Box 
// //       sx={{ 
// //         padding: 4, 
// //         backgroundColor: '#f7f7f7', 
// //         borderRadius: 2, 
// //         width: '80%', 
// //         margin: 'auto', 
// //         boxShadow: 3 
// //       }}
// //     >
// //       <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
// //         Edit User Details
// //       </Typography>

// //       <Grid container spacing={2}>
// //         <Grid item xs={6}>
// //           <TextField fullWidth label="User Name" placeholder="<Alphanumeric only>" />
// //         </Grid>
// //         <Grid item xs={6}>
// //           <TextField fullWidth label="Email ID" placeholder="<Text in email ID format>" />
// //         </Grid>

// //         <Grid item xs={4}>
// //           <TextField fullWidth label="First Name" placeholder="<Alphabets only>" />
// //         </Grid>
// //         <Grid item xs={4}>
// //           <TextField fullWidth label="Middle Name" placeholder="<Alphabets only>" />
// //         </Grid>
// //         <Grid item xs={4}>
// //           <TextField fullWidth label="Last Name" placeholder="<Alphabets only>" />
// //         </Grid>

// //         <Grid item xs={12}>
// //           <Typography variant="subtitle1" sx={{ mt: 2 }}>
// //             Select Business Groups and respective Roles to be assigned
// //           </Typography>
// //         </Grid>

// //         {/* First Row of Org Unit */}
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Org Unit">
// //             <MenuItem value="Org1">Org 1</MenuItem>
// //             <MenuItem value="Org2">Org 2</MenuItem>
// //           </TextField>
// //         </Grid>
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Business Unit">
// //             <MenuItem value="Business1">Business 1</MenuItem>
// //             <MenuItem value="Business2">Business 2</MenuItem>
// //           </TextField>
// //         </Grid>
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Functional Area">
// //             <MenuItem value="Area1">Functional Area 1</MenuItem>
// //             <MenuItem value="Area2">Functional Area 2</MenuItem>
// //           </TextField>
// //         </Grid>
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Business Group">
// //             <MenuItem value="Group1">Group 1</MenuItem>
// //             <MenuItem value="Group2">Group 2</MenuItem>
// //           </TextField>
// //         </Grid>

// //         {/* Second Row of Org Unit */}
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Org Unit">
// //             <MenuItem value="Org1">Org 1</MenuItem>
// //             <MenuItem value="Org2">Org 2</MenuItem>
// //           </TextField>
// //         </Grid>
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Business Unit">
// //             <MenuItem value="Business1">Business 1</MenuItem>
// //             <MenuItem value="Business2">Business 2</MenuItem>
// //           </TextField>
// //         </Grid>
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Functional Area">
// //             <MenuItem value="Area1">Functional Area 1</MenuItem>
// //             <MenuItem value="Area2">Functional Area 2</MenuItem>
// //           </TextField>
// //         </Grid>
// //         <Grid item xs={3}>
// //           <TextField select fullWidth label="Business Group">
// //             <MenuItem value="Group1">Group 1</MenuItem>
// //             <MenuItem value="Group2">Group 2</MenuItem>
// //           </TextField>
// //         </Grid>

// //         {/* Roles Checkboxes */}
// //         <Grid item xs={12}>
// //           <Box display="flex" justifyContent="space-around" mt={2}>
// //             <FormControlLabel control={<Checkbox />} label="Approver" />
// //             <FormControlLabel control={<Checkbox />} label="Author" />
// //             <FormControlLabel control={<Checkbox />} label="Viewer" />
// //             <FormControlLabel control={<Checkbox />} label="Feedback" />
// //             <FormControlLabel control={<Checkbox />} label="Export" />
// //           </Box>
// //         </Grid>

// //         {/* Add More Button */}
// //         <Grid item xs={12}>
// //           <IconButton color="primary">
// //             <AddCircleOutlineIcon />
// //           </IconButton>
// //           <Typography variant="body2" component="span">
// //             Add more Business Group assignments
// //           </Typography>
// //         </Grid>

// //         {/* Action Buttons */}
// //         <Grid item xs={12} display="flex" justifyContent="center" gap={2} mt={2}>
// //           <Button variant="outlined">Cancel</Button>
// //           <Button variant="contained" color="primary">Submit</Button>
// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default EditUserDetails;



// import React from 'react';
// import { Box, TextField, Button, Checkbox, FormControlLabel, MenuItem, Typography, Grid, IconButton } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// const EditUserDetails = () => {
//   return (
//     <Box 
//       sx={{ 
//         padding: 4, 
//         backgroundColor: '#f7f7f7', 
//         borderRadius: 2, 
//         width: '90%', 
//         margin: 'auto', 
//         boxShadow: 3 
//       }}
//     >
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
//         Edit User Details
//       </Typography>

//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <TextField fullWidth label="User Name" placeholder="<Alphanumeric only>" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField fullWidth label="Email ID" placeholder="<Text in email ID format>" />
//         </Grid>

//         <Grid item xs={4}>
//           <TextField fullWidth label="First Name" placeholder="<Alphabets only>" />
//         </Grid>
//         <Grid item xs={4}>
//           <TextField fullWidth label="Middle Name" placeholder="<Alphabets only>" />
//         </Grid>
//         <Grid item xs={4}>
//           <TextField fullWidth label="Last Name" placeholder="<Alphabets only>" />
//         </Grid>

//         <Grid item xs={12}>
//           <Typography variant="subtitle1" sx={{ mt: 2 }}>
//             Select Business Groups and respective Roles to be assigned
//           </Typography>
//         </Grid>

//         {/* Column Headers */}
//         <Grid container spacing={2} sx={{ fontWeight: 'bold', mt: 1 }}>
//           <Grid item xs={2}>Org Unit</Grid>
//           <Grid item xs={2}>Business Unit</Grid>
//           <Grid item xs={2}>Functional Area</Grid>
//           <Grid item xs={2}>Business Group</Grid>
//           <Grid item xs={4} display="flex" justifyContent="space-around">
//             <span>Approver</span>
//             <span>Author</span>
//             <span>Viewer</span>
//             <span>Feedback</span>
//             <span>Export</span>
//           </Grid>
//         </Grid>

//         {/* First Row */}
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Org1">Org 1</MenuItem>
//               <MenuItem value="Org2">Org 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Business1">Business 1</MenuItem>
//               <MenuItem value="Business2">Business 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Area1">Functional Area 1</MenuItem>
//               <MenuItem value="Area2">Functional Area 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Group1">Group 1</MenuItem>
//               <MenuItem value="Group2">Group 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={4} display="flex" justifyContent="space-around">
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//           </Grid>
//         </Grid>

//         {/* Second Row */}
//         <Grid container spacing={2} alignItems="center" mt={1}>
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Org1">Org 1</MenuItem>
//               <MenuItem value="Org2">Org 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Business1">Business 1</MenuItem>
//               <MenuItem value="Business2">Business 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Area1">Functional Area 1</MenuItem>
//               <MenuItem value="Area2">Functional Area 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={2}>
//             <TextField select fullWidth label="Select">
//               <MenuItem value="Group1">Group 1</MenuItem>
//               <MenuItem value="Group2">Group 2</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={4} display="flex" justifyContent="space-around">
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//           </Grid>
//         </Grid>

//         {/* Add More Button */}
//         <Grid item xs={12} mt={2}>
//           <IconButton color="primary">
//             <AddCircleOutlineIcon />
//           </IconButton>
//           <Typography variant="body2" component="span">
//             Add more Business Group assignments
//           </Typography>
//         </Grid>

//         {/* Action Buttons */}
//         <Grid item xs={12} display="flex" justifyContent="center" gap={2} mt={2}>
//           <Button variant="outlined">Cancel</Button>
//           <Button variant="contained" color="primary">Submit</Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default EditUserDetails;




import React from 'react';
import { Box, TextField, Button, Checkbox, FormControlLabel, MenuItem, Typography, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const EditUserDetails = () => {
  const inputStyles = {
    '& .MuiInputBase-input': { padding: '8px' },
    '& .MuiInputLabel-root': { fontSize: '0.9rem', fontWeight: 'bold' },
  };

  return (
    <Box 
      sx={{ 
        padding: 4, 
        backgroundColor: '#f7f7f7', 
        borderRadius: 2, 
        width: '90%', 
        margin: 'auto', 
        boxShadow: 3 
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        Edit User Details
      </Typography>

      <Grid container spacing={2}>
        {/* Username and Email */}
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>User Name</Typography>
          <TextField 
            fullWidth 
            placeholder="<Alphanumeric only>" 
            size="small" 
            sx={inputStyles}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>Email ID</Typography>
          <TextField 
            fullWidth 
            placeholder="<Text in email ID format>" 
            size="small" 
            sx={inputStyles}
          />
        </Grid>

        {/* Name Fields */}
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>First Name</Typography>
          <TextField 
            fullWidth 
            placeholder="<Alphabets only>" 
            size="small" 
            sx={inputStyles}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>Middle Name</Typography>
          <TextField 
            fullWidth 
            placeholder="<Alphabets only>" 
            size="small" 
            sx={inputStyles}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>Last Name</Typography>
          <TextField 
            fullWidth 
            placeholder="<Alphabets only>" 
            size="small" 
            sx={inputStyles}
          />
        </Grid>

        {/* Section Title */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
            Select Business Groups and respective Roles to be assigned
          </Typography>
        </Grid>

        {/* Table Header */}
        <Grid container spacing={2} sx={{ fontWeight: 'bold', mt: 1 }}>
          <Grid item xs={2}>Org Unit</Grid>
          <Grid item xs={2}>Business Unit</Grid>
          <Grid item xs={2}>Functional Area</Grid>
          <Grid item xs={2}>Business Group</Grid>
          <Grid item xs={4} display="flex" justifyContent="space-around">
            <span>Approver</span>
            <span>Author</span>
            <span>Viewer</span>
            <span>Feedback</span>
            <span>Export</span>
          </Grid>
        </Grid>

        {/* First Row of Inputs */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Org1">Org 1</MenuItem>
              <MenuItem value="Org2">Org 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Business1">Business 1</MenuItem>
              <MenuItem value="Business2">Business 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Area1">Functional Area 1</MenuItem>
              <MenuItem value="Area2">Functional Area 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Group1">Group 1</MenuItem>
              <MenuItem value="Group2">Group 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="space-around">
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </Grid>
        </Grid>

        {/* Second Row of Inputs */}
        <Grid container spacing={2} alignItems="center" mt={1}>
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Org1">Org 1</MenuItem>
              <MenuItem value="Org2">Org 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Business1">Business 1</MenuItem>
              <MenuItem value="Business2">Business 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Area1">Functional Area 1</MenuItem>
              <MenuItem value="Area2">Functional Area 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              select 
              fullWidth 
              size="small" 
              sx={inputStyles}
            >
              <MenuItem value="Group1">Group 1</MenuItem>
              <MenuItem value="Group2">Group 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="space-around">
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </Grid>
        </Grid>

        {/* Add More Button */}
        <Grid item xs={12} mt={2}>
          <IconButton color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
          <Typography variant="body2" component="span">
            Add more Business Group assignments
          </Typography>
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12} display="flex" justifyContent="center" gap={2} mt={2}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditUserDetails;

