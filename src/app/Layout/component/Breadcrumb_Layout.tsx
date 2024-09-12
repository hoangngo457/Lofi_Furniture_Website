import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "@/styles/breadcrumb.css";
const Breadcrumb_Layout = () => {
    const breadcrumbs = [
      <Link
        underline="none"
        key="1"
        color="white"
        href="/"
        sx={{ fontWeight: "bold", fontSize: "1.5vw" }}
      >
        Trang chủ
      </Link>,
      <Typography
        key="2"
        sx={{ color: "white", fontWeight: "bold", fontSize: "1.5vw" }}
      >
        Liên hệ
      </Typography>,
    ];
  return (
    <div className="body-breadcrumb">
      <div className="contact-bg">
        <img src="images/vip.jpg" />
        <h1 className="h1-contact">Liên hệ</h1>
        <div className="breadcrumbs-contact">
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                fontSize="small"
                sx={{ color: "white", fontSize: "1.5vw" }}
              />
            }
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb_Layout;
