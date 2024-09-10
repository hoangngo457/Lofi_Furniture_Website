import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";
import logo from "/public/images/vip.jpg";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import stylecontact from "@/styles/contact.module.css";
import { colors } from "@mui/material";

const Contact = () => {
  const breadcrumbs = [
    <Link
      underline="none"
      key="1"
      color="white"
      href="/"
      sx={{ fontWeight: "bold", fontSize: "20" }}
    >
      Trang chủ
    </Link>,
    <Typography key="2" sx={{ color: "white", fontWeight: "bold" }}>
      Liên hệ
    </Typography>,
  ];

  return (
    <div className="body-contact">
      <div className={stylecontact["contact-bg"]}>
        <Image
          src={logo}
          alt="logo"
          style={{
            width: "100vw",
            height: "auto",
            zIndex: "-1", // Đảm bảo hình ảnh nằm phía sau
          }}
        />

        <h1 className={stylecontact["h1-contact"]}>Liên hệ</h1>
        <div className={stylecontact["breadcrumbs-contact"]}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" sx={{ color: "white" }} />
            }
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>


      <div className="container">
  <div className="row">
    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <div className="w-100"></div>

    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>
</div>
    </div>
  );
};
export default Contact;
