import useStyles from '../utils/styles';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const styles = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{title ? `${title} - Amazona` : 'Amazona'}</title>
          {description && <meta name="description" content={description} />}
        </Head>

        <CssBaseline />

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
      </ThemeProvider>
    </>
  );
}
