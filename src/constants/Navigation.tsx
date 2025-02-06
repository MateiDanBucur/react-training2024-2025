import { Button } from "@mui/material";
import "../App.css";
import { Link, Outlet } from "react-router";
import { useIntl } from "react-intl";

function Navigation() {
  const intl = useIntl();
  return (
    <div>
      <header>
        <div className="inner">
          <div className="logo">
            <Button>
              <Link to="">{intl.formatMessage({ id: "navigation.home.title" })}</Link>
            </Button>
            <Button>
              <Link to="edit">{intl.formatMessage({ id: "navigation.edit.title" })}</Link>
            </Button>
            <Button>
              <Link to="add">{intl.formatMessage({ id: "navigation.add.title" })}</Link>
            </Button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Navigation;
