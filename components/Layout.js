import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const styles = useStyles();
  return (
    <>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={styles.main}>{children}</Container>
      <footer className={styles.footer}>
        <Typography>All right reserved. Next Amazona .</Typography>
      </footer>
    </>
  );
}
