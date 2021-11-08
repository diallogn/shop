import useStyles from '../utils/styles';
import NextLink from 'next/link';

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from '@material-ui/core';

export default function Layout({ children }) {
  const styles = useStyles();
  return (
    <>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={styles.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={styles.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={styles.main}>{children}</Container>
      <footer className={styles.footer}>
        <Typography>All right reserved. Next Amazona.</Typography>
      </footer>
    </>
  );
}
