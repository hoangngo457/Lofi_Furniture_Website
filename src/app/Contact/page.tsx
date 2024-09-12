import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";
import logo from "/public/images/vip.jpg";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "bootstrap/dist/css/bootstrap.min.css";
import  "@/styles/contact.css";
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
    <div >
      <div className="contact-bg">
        <Image
          src={logo}
          alt="logo"
          style={{
            width: "100vw",
            height: "auto",
            zIndex: "-1", // Đảm bảo hình ảnh nằm phía sau
          }}
        />

        <h1 className="h1-contact">Liên hệ</h1>
        <div className="breadcrumbs-contact">
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" sx={{ color: "white" }} />
            }
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>

        <div className="row">
          <div className="col-6 ggmaps">
            <div className="box-ggmaps">
              hello
            </div>
            </div>
          <div className="col-6 information-contact">
            <div className=""></div>
















          </div>
        </div>
     
    </div>
  );
};
export default Contact;
