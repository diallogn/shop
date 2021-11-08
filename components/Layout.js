import useStyles from '../utils/styles';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from '@material-ui/core';

export default function Layout({ title, description, children }) {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>{title ? `${title} - Amazona` : 'Amazona'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
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
