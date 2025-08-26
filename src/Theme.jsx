import React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  Button,
  Paper,
  Chip,
  TableCell,
  TableRow,
  tableCellClasses,
  TextField,
  InputBase,
  Switch,
}
  from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { LoadingButton } from '@mui/lab';
import { useContext } from "react";
export const themeDrawer = createTheme({
  palette: {
    primary: {
      main: "#52BA33",
    },
  },
});

export const CssDrawer = {
  '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
    backgroundColor: "#52BA33",
  },
};


export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light",
});

function Theme({ children }) {
  const [mode, setMode] = React.useState(localStorage.getItem("theme") || "light");

  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => {
        const newMode = prevMode === 'light' ? 'dark' : 'light';
        localStorage.setItem("theme", newMode);
        return newMode;
      });
    },
    mode,
  }), [mode]);

  const theme = React.useMemo(() => mdTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Theme;

const mdTheme = (mode) =>createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === "dark" ? "#252728" : "var(--white)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderColor: "var(--light-gray)",
          backgroundColor: "var(--light-gray)",
          color: "var(--white)",
          fontWeight: 'bold',
          fontSize: '16px',
          "&.Mui-selected": {
            borderColor: "var(--teal-A700)",
            backgroundColor: "var(--teal-A700)",
            color: "var(--white)",
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        secondary: {
          // main: "var(--teal-A700)",
          // light: "var(--light-green)",
          // dark: "var(--dark-green)",
          main: "#00bfa5",
          light: "#24AD23",
          dark: "#006500",
          contrastText: "#fff",
        },
        // divider: "var(--gray)",
        background: {
          main: "#fff",
        },
        // divider: "var(--gray)",
        background: {
          default: "#ffffff",
          paper: "#ffffff",
        },
      } : {
        background:{
          default: "#252728",
          paper: "#252728",
        }
       }
      )

      

  },
  typography: {
    fontFamily: "'Noto Sans Thai', sans-serif !important",
  },
});

export const drawerWidth = 320;

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(

  ({ theme, open }) => ({
    minHeight: "100vh",
    maxHeight: "100%",
    width: "100%",
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "var(--teal-A700)" : theme.palette.secondary.main,
  color: theme.palette.mode === 'dark' ? "var(--white)" : theme.palette.secondary.contrastText,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const useHeaderStyle = () => {
  const { mode } = useContext(ColorModeContext);
  return {
    textDecoration: "underline",
    cursor: "pointer",
    color: mode === "dark" ? "var(--teal-A700)" : "var(--teal-A800)",
  };
};

export const useTealTextStyle = () => {
  const { mode } = useContext(ColorModeContext);
  return {
    color: mode === "dark" ? "var(--teal-A700)" : "var(--teal-A800)",
  };
};

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const ButtonTeal = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.mode === 'dark' ? "#00bfa5" : "#009688",
  backgroundColor: theme.palette.mode === 'dark' ? "#00bfa5" : "#009688",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: theme.palette.mode === 'dark' ? "#00897b" : "#00796b",
    backgroundColor: theme.palette.mode === 'dark' ? "#00897b" : "#00796b",
  },
}));

export const ButtonConfirm = styled(Button)(({ theme }) => ({
  borderColor: "#1976d2",
  backgroundColor: "#1976d2",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  marginLeft: 2,
  marginRight: 2,
  '&:hover': {
    borderColor: "#166ABD",
    backgroundColor: "#166ABD",
  },
}));

export const ButtonTealSubmit = styled(Button)(({ theme }) => ({
  borderColor: "var(--teal-A700)",
  backgroundColor: "var(--teal-A700)",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  padding: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  '&:hover': {
    borderColor: "var(--dark-teal)",
    backgroundColor: "var(--dark-teal)",
  },
}));

export const ButtonCancel = styled(Button)(({ theme }) => ({
  borderColor: "var(--red-A400)",
  backgroundColor: "var(--red-A400)",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "var(--red-700)",
    backgroundColor: "var(--red-700)",
  },
}));

export const ButtonTealStructure = styled(Button)(({ theme }) => ({
  borderColor: "#9e9e9e",
  backgroundColor: "#9e9e9e",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "#616161",
    backgroundColor: "#616161",
  },
}));

export const ButtonCancelStructure = styled(Button)(({ theme }) => ({
  borderColor: "#ff9800",
  backgroundColor: "#ff9800",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "#f57c00",
    backgroundColor: "#f57c00",
  },
}));

export const ButtonChip = styled(Chip)(({ theme }) => ({
  fontSize: "16px",
  cursor: "pointer",
  // '&:hover': {
  //   backgroundColor: 'transparent !important'
  // },
}));

export const BtnLoading = styled(LoadingButton)(({ theme }) => ({
  borderColor: "var(--teal-A700)",
  backgroundColor: "var(--teal-A700)",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "var(--dark-teal)",
    backgroundColor: "var(--dark-teal)",
  },
}));

export const BtnLoadingRed = styled(LoadingButton)(({ theme }) => ({
  borderColor: "#E04345",
  backgroundColor: "#E04345",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "#B23637",
    backgroundColor: "#B23637",
  },
}));

export const BtnMap = styled(Button)(({ theme }) => ({
  borderColor: "#fff",
  // backgroundColor: "var(--teal-A700)",
  color: "#fff",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "#fff",
    // backgroundColor: "var(--dark-teal)",
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
}));

export const ItemDashboardPAO = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "100px",
  width: "100%",
  padding: 30,
  backgroundColor: "#F5F5F5",
}));

export const ItemDashboard = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#F5F5F5",
}));

export const ItemDashboard2 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#147cc4",
}));

export const ItemDashboard3 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#44940c",
}));

export const ItemDashboard4 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#e49c2c",
}));

export const ItemDashboard5 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#ec6c44",
}));

export const ItemDashboard6 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#dc4464",
}));

export const ItemDashboard7 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#dcecf4",
}));

export const ItemDashboard8 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#dcf4dc",
}));

export const ItemDashboard9 = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#242424",
}));

export const ItemDashboard_ipd = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#62f5a5",
}));

export const ItemDashboard_opd = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: 30,
  backgroundColor: "#f5a562",
}));

export const ItemDashboardGreen = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: "5%",
  backgroundColor: "#12db46",
}));

export const ItemDashboardRed = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: "5%",
  backgroundColor: "#e74747",
}));

export const ItemDashboardBlue = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: "5%",
  backgroundColor: "#24ccf0",
}));

export const ItemDashboardPurple = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  padding: "5%",
  backgroundColor: "#2477f0",
}));

export const ItemHomepage = styled(Paper)(({ theme }) => ({
  fontSize: "16px",
  height: "auto",
  width: "100%",
  // minWidth: "350px",
  padding: "40px 20px 40px 20px",
  backgroundColor: theme.palette.mode === 'dark' ? "#252728" : "",
  color:  theme.palette.mode === 'dark' ? "var(--teal-A400)" : "var(--teal-A800)",
  boxShadow: theme.palette.mode === 'dark' ? "0px 3px 5px #757575" : "",
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--teal-A700)",
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fff",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#fff",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

export const CssTextField = styled(TextField)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
}));

export const CssSelect = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInputBase-input': {
    // backgroundColor: "#fff",
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #E0E3E7',
    fontSize: 16,
    padding: '15px 26px 15px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#A0AAB4',
      boxShadow: '0 0 0 0.2rem rgba(160,170,180,.25)',
    },
  },
}));

export const StyledTblCellDashboard = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFFFFF",
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: 16,
    borderBottom: "1px solid #6AB0F6",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTblRowDashboard = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#FFFFFF",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#EEEDED",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
  // "& .MuiTableCell-root ": {
  //   borderBottom: "1px solid #6AB0F6"
  // }
}));

export const StyledTblCellSum = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderTop: "1px solid #6AB0F6"
  },
}));

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export const StyledTblK103 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#333333",
    backgroundColor: "var(--teal-A700)",
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: 16,

    "&.MuiTableCell-root": {
      border: "1px solid #fff",
    }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    "&.MuiTableCell-root": {
      border: "1px solid #fff",
      backgroundColor: theme.palette.mode == "dark" ? "#303233" : "#ffffff",
    }
  },

}));

export const StyledTblK104 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#333333",
    backgroundColor: "#00838F",
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 16,

    "&.MuiTableCell-root": {
      border: "1px solid #fff",
    }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    "&.MuiTableCell-root": {
      border: "1px solid #fff",
    }
  },

}));

export const StyledTblK105 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#333333",
    backgroundColor: "rgba(0,210,186, 0.8)",
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 16,

    "&.MuiTableCell-root": {
      border: "1px solid #fff",
    }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    "&.MuiTableCell-root": {
      border: "1px solid #fff",
    }
  },

}));

export const BtnCheckClaim = styled(LoadingButton)(({ theme }) => ({
  borderColor: "var(--light-green)",
  backgroundColor: "var(--light-green)",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "var(--dark-green)",
    backgroundColor: "var(--dark-green)",
  },
}));

export const BtnConfirmClaim = styled(Button)(({ theme }) => ({
  borderColor: "#1976d2",
  backgroundColor: "#1976d2",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "#0d47a1",
    backgroundColor: "#0d47a1",
  },
}));

export const BtnLogin = styled(Button)(({ theme }) => ({
  borderColor: "var(--teal-A700)",
  backgroundColor: "var(--teal-A700)",
  color: "var(--white)",
  fontSize: "16px",
  borderRadius: "10px",
  '&:hover': {
    borderColor: "var(--dark-teal)",
    backgroundColor: "var(--dark-teal)",
  },
}));

export const BoxShadow = styled(Paper)(({ theme }) => ({
  boxShadow: theme.palette.mode === 'dark' ? "7px 7px 7px 4px #757575" : "10px 15px 15px 5px #E9E9E9" ,
  borderRadius: "10px",
}));

