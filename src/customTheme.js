import { createMuiTheme } from '@material-ui/core';

const customThemes = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Nunito Sans',
    h2: {
      fontFamily: 'Nunito Sans',
      fontSize: "3375rem",
      fontWeight: '400',
    },
    h3: {
      fontFamily: 'Nunito Sans',
      fontSize: "3rem",
      fontWeight: '400',
    },
    h4: {
      fontFamily: 'Nunito Sans',
      fontSize: "2.25rem",
      fontWeight: '400',
    },
    h5: {
      fontFamily: 'Nunito Sans',
      fontSize: "1.5rem",
      fontWeight: '400',
    },
    h6: {
      fontFamily: 'Nunito Sans',
      fontSize: "1.25rem",
      fontWeight: '400',
    },
    body1: {
      fontFamily: 'Nunito Sans',
      fontSize: "1rem",
      fontWeight: '500',
    },
    body2: {
      fontFamily: 'Nunito Sans',
      fontSize: "0.875rem",
      fontWeight: '400',
    },
    subtitle1: {
      fontFamily: 'Nunito Sans',
      fontSize: "1rem",
      fontWeight: '500',
    },
    subtitle2: {
      fontFamily: 'Nunito Sans',
      fontSize: "0.875rem",
      fontWeight: '400',
    }
  },
  palette: {
    primary: {
      main: '#008080'
    },
    secondary: {
      main: '#008080'
    },
    success: {
      main: '#13CE66'
    },
    warning: {
      main: '#FFC82C'
    },
    error: {
      main: '#d00000'
    },
    background: {
      default: '#fcfcfc',
      paper: '#fcfcfc'  
    },
    action: {
      hover: '#e1e1e1',
      hoverOpacity: "0.1",
    },
    text: {
      primary: 'rgba(68, 68, 68,68.1)',
      secondary: 'rgba(68, 68, 68,68.87)',
      disabled: 'rgba(68, 68, 68,68.54)',
      hint: 'rgba(68, 68, 68,68.34)',
    }
  },
   space: {
    borderRadius: {
      main: '4'
    },
  },
  props: {
     MuiButton: {
      disableRipple: true,
    },
    MuiPaper: {
      elevation: 12,
    },

},
  overrides: {
    MuiButton: {
      root: {
        fontSize: "0.875rem",
        fontWeight: '500',
        textTransform: 'none',
        paddingTop: "16",
        paddingRight: "8",
        paddingBottom: "16",
        paddingLeft: "8",
      }
    },
      IconButton: {
        root: {
        fontSize: "0.875rem",
        fontWeight: '500',
        textTransform: 'none',
        paddingTop: "16px",
        paddingRight: "8px",
        paddingBottom: "16px",
        paddingLeft: "8px",
      }
    },
        MuiButtonBase: {
        root: {
        fontSize: "0.875rem",
        fontWeight: '500',
        textTransform: 'none',
        paddingTop: "16px",
        paddingRight: "8px",
        paddingBottom: "16px",
        paddingLeft: "8px",
      }
    },
    MuiBreadcrumbs: {
      root: {
        color: 'rgba(68, 68, 68,68.87)',
        fontSize: '0.875rem'
      }
    },
    MuiOutlinedInput: {
      root: {
               "& $notchedOutline": {
          borderColor: "#c4c4c4"
        },
         '&$focused $notchedOutline': {
        borderColor: '#008080',
        borderWidth: "2px",
      },
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none'
      },
      wrapper: {
        fontSize: "0.875rem",
      }
    },
    MuiTypography: {
      colorPrimary: {
        color: 'transparent'
      }
    },
    MuiFormLabel: {
      root: {
        '&.Mui-focused': {
          color: '#0000008a'
        }
      }
    },
    /*MuiBox: {
      root: {
        marginTop: "16px",
      }
    },*/
    MuiDialogTitle: {
      root: {
        color: '#555555',
        fontWeight: 700
      }
    }
  }
});

export default customThemes;
