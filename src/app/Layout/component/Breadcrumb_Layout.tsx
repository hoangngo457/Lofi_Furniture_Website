"use client"; // Đánh dấu component này là Client Component

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSearchParams } from "next/navigation"; // Sử dụng useSearchParams

import "@/styles/breadcrumb.css";

const Breadcrumb_Layout = () => {
  const searchParams = useSearchParams(); // Lấy search params từ URL
  const label = searchParams.get("label") || "lỗi rồi"; // Lấy giá trị của 'label' từ URL

  const breadcrumbs = [
    <Link
      underline="none"
      key="1"
      color="white"
      href="/"
      sx={{ fontWeight: "bold" }}
    >
      Trang chủ
    </Link>,
    <Typography key="2" sx={{ color: "white", fontWeight: "bold" }}>
      {label}
    </Typography>,
  ];

  return (
    <div className="body-breadcrumb">
      <div className="contact-bg">
        <img src="images/vip.jpg" alt="Contact background" />
        <h1 className="h1-contact">{label}</h1>
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
    </div>
  );
};
export default Breadcrumb_Layout;
