import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

interface NotificationProps {
  children: React.ReactNode;
}

const Notification: React.FC<NotificationProps> = ({ children }) => {
  const warning = useSelector((state: RootState) => state.notification.warning);
  const update = useSelector((state: RootState) => state.notification.update);

  const classes = clsx({
    notification: true,
    warning: warning,
    update: update,
  });

  return <div className={classes}>{children}</div>;
};

export default Notification;
