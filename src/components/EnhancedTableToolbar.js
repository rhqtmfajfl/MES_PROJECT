import { Toolbar, Typography } from "@mui/material";
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';

const EnhancedTableToolbar = ({numSelected}) => {

  return (
<Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
      >
    
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        

          {/* <input type="date" name="startday"></input> */}
          {/* <Calendar/> */}

        </Typography>
    
                          
      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar;