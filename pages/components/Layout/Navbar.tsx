import { MenuOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/Navbar.module.scss";

const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <nav className={styles.navbar}>

      <div className={styles.logoDiv} >
        <Image height={60} width={60} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&usqp=CAU" />
      </div>

     

      <div className={styles.linkDiv}  >

       <Link className={styles.link} href="#" > Home  </Link>

       <Link className={styles.link} href="#" > Events  </Link>

       <Link className={styles.link} href="#" > Connects  </Link>

       <Link className={styles.link} href="#" > Roadmaps  </Link>

      </div>
      <div className={styles.btnDiv} >
        <Button>Sign in/Log in</Button>
      </div>

      <div className={styles.humbergDiv} onClick={handleClick} > <MenuOutlined /> </div>
      
    </nav>
  );
};

export default Navbar;
