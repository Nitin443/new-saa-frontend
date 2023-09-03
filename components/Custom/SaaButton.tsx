import { Button, Spin } from "antd";
import styles from "../../styles/SaaButton.module.scss";
import { CSSProperties } from "react";

interface Props extends React.PropsWithChildren<any> {
  styleClass?: any;
  onClick?: any;
  isDisable?: boolean;
  style?: CSSProperties | undefined;
  id?: any;
  loading?: boolean;
}

const SaaButton: React.FC<Props> = ({
  children,
  styleClass,
  onClick,
  isDisable,
  style,
  id,
  loading,
}) => {

  return (
    <button
      id={id}
      style={style}
      onClick={onClick}
      disabled={isDisable}
      
      className={`${styleClass} ${styles.button}`}
    >
      {loading ? <Spin  /> : children}
    </button>
  );
};

export default SaaButton;
