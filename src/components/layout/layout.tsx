import AnimatedPage from "@/components/animated-page";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

interface Props {
  children: React.ReactNode;
  footer?: boolean;
}

const Layout = (props: Props) => {
  const { children, footer = true } = props;

  return (
    <AnimatedPage>
      <NavBar />
      <main>{children}</main>
      {footer && <Footer />}
    </AnimatedPage>
  );
};

export default Layout;
