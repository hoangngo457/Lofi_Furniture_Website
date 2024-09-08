"use client";
import "@/styles/header.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import * as React from "react";
import Image from "next/image";
import check_order from "/public/images/check_orders.png";
import vietnam_flag from "/public/images/vietnam_flag.png";
import english_flag from "/public/images/english_flag.png";

import Select, { SingleValue } from "react-select";
import logo from "/public/images/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import {Locale} from '../i18n/config';
import {setUserLocale} from '../services/locale';


interface OptionType {
  value: string;
  label: JSX.Element;
}

const options: OptionType[] = [
  {
    value: "vi",
    label: (
      <div className="text-center">
        <Image src={vietnam_flag} alt={"VietNam Flag"} width={24} height={20} />
        <div style={{ marginLeft: 10 }}> Tiếng Việt</div>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="text-center">
        {" "}
        <Image src={english_flag} alt={"English Flag"} width={24} height={20} />
        <div style={{ marginLeft: 10 }}> English</div>
      </div>
    ),
  },

];
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "none", // Loại bỏ border
    boxShadow: "none", // Loại bỏ bóng của border
  }),
  indicatorSeparator: () => ({
    display: "none", // Loại bỏ đường phân cách giữa các chỉ báo
  }),
};
const HeaderLayout = () => {
  const [selectedOption, setSelectedOption] = React.useState<OptionType | null>(
    options[0]
  );


  // Chỉ định kiểu cho option
  const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
    const locale = option?.value as Locale;
    if (option) {
      setUserLocale(locale);  
  }
  };
  return (
    <header>
      <div className="top-header">
        <div className="left-side">
          <span className="text-center">
            <CallIcon fontSize="medium" sx={{ color: "#d94e28" }} />
            <a href="#">1900 6750</a>
          </span>
          <span className="text-center" style={{ marginLeft: 10 }}>
            <EmailIcon fontSize="medium" sx={{ color: "#d94e28" }} />
            <a href="#">support@lofiFnt.vn</a>
          </span>
        </div>
        <div className="right-side">
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyles}
          />
          <div className="text-center">
            <Image
              src={check_order}
              alt={"check order"}
              width={24}
              height={24}
            />
            <a href="#">Kiểm tra đơn hàng</a>
          </div>
        </div>
      </div>
      <div className="header-area">
        <div style={{ width: "30%" }}>
          <Image
            src={logo}
            alt="logo website"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="search-secsion" id="search">
          <input type="text" />
          <div className="search-btn">
            <SearchOutlinedIcon sx={{ color: "#fff" }} />
          </div>
        </div>
      </div>
      <div className="nav-header"></div>
    </header>
  );
};
export default HeaderLayout;
