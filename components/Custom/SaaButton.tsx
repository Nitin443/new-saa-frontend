import { Button } from "antd";
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
    <Button
      id={id}
      style={style}
      onClick={onClick}
      disabled={isDisable}
      loading={loading}
      className={`${styles.mainBtnDiv} ${styleClass}`}
    >
      {children}
    </Button>
  );
};

export default SaaButton;
