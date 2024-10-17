import Header from "../components/header";
import Footer from "../components/footer";
import "./base.scss";

interface Props {
  children: React.ReactNode;
}
const BasePage = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default BasePage;
