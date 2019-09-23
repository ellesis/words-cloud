import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Drawer, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 'auto' // right side margin, so make left button
  }
}

class AppShell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false       //Draw open or not
    }
  }

  handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={this.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer open={this.state.toggle}>
          <MenuItem onClick={this.handleDrawerToggle}>Home</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(AppShell)