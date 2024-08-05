import Navbar from "./Navbar"; // Update path as needed

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      {/* <main>{children}</main> */}
    </>
  );
};

export default Layout;
