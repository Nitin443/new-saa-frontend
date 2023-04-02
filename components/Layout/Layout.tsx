import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props extends React.PropsWithChildren<any> { }

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Navbar />
           {children}
            <Footer />
        </>
    );

}

export default Layout;