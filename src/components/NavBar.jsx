import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple, pink, indigo } from '@mui/material/colors';

const MainButton = styled(Button)(({ theme }) => ({
    backgroundColor: indigo[400],
    '&:hover': {
      backgroundColor: indigo[300],
    },
  }));

  const NavButton = styled(Button)(({ theme }) => ({
    backgroundColor: purple[400],
    '&:hover': {
      backgroundColor: pink[600],
    },
  }));

export class NavBar extends React.Component {
    render() {
        return(
            <div>
                <MainButton className="MainTitleButton" variant="contained" href=".">My Shows</MainButton>
                <NavButton className="NavBarButton" variant="contained" href="/comedy">Comedy</NavButton>
                <NavButton className="NavBarButton" variant="contained" href="/thrillers">Thrillers</NavButton>
                <NavButton className="NavBarButton" variant="contained" href="/fantasy">Fantasy</NavButton>
                <NavButton className="NavBarButton" variant="contained" href="/other">Other</NavButton>
            </div>
        )
    }
}
