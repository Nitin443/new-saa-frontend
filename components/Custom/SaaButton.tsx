import { Button, Spin } from "antd";
import styles from "../../styles/SaaButton.module.scss";
import { CSSProperties } from "react";
import { LoadingOutlined } from "@ant-design/icons";

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

  const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />

  return (
    <button
      id={id}
      style={style}
      onClick={onClick}
      disabled={isDisable}
      
      className={`${styleClass} ${styles.button}`}
    >
      {loading ? <Spin indicator={antIcon} /> : children}
    </button>
  );
};

export default SaaButton;
