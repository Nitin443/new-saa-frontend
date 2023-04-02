import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props extends React.PropsWithChildren<any> { }

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Navbar />
            <div style={{backgroundColor: "gray", marginBottom: "50px", width: "100%", height: "50px"}} ></div>
            <Footer />
        </>
    );

}

export default Layout;