import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { 
    withStyles,
    Typography,
    Toolbar,
    AppBar,
    CssBaseline
} from '@material-ui/core';
   

const styles = theme => ({
  appBar: {
    position: 'relative',
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


function Layout(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
      
        <div className={classNames(classes.layout, classes.cardGrid)}>
            {props.children}
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);