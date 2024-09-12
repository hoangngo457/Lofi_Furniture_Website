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
import account from "/public/images/account.png";
import favorite from "/public/images/favorite.png";
import shopping_cart from "/public/images/shopping-cart.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";

import MenuProductCategory from "./component/MenuCategory";
import { useState } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { menuItems } from "./component/menu_item";
import "./component/menu.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface OptionType {
  value: string;
  label: JSX.Element;
}

const options: OptionType[] = [
  {
    value: "vi",
    label: (
      <div className="text-center">
        <Image src={vietnam_flag} alt={"VietNam Flag"} width={20} height={16} />
        <div style={{ marginLeft: 10 }}> Tiếng Việt</div>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="text-center">
        {" "}
        <Image src={english_flag} alt={"English Flag"} width={20} height={16} />
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
  const [activeItem, setActiveItem] = useState<string>("Trang chủ");
  const handleItemClick = (label: string) => {
    setActiveItem(label);
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
        <div style={{ width: "22.5%" }}>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo website"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
        <form className="search-secsion">
          <input type="text" />
          <div className="search-btn">
            <SearchOutlinedIcon sx={{ color: "#fff" }} />
          </div>
        </form>
        <div className="header-control">
          <Link href={"#"} className="header-icon">
            <Image
              src={account}
              alt="account"
              height={26}
              width={26}
              style={{ padding: "10px" }}
            />
            Tài khoản
          </Link>
          <Link href={"/favorite"} className="header-icon">
            <Image
              src={favorite}
              alt="favorite"
              height={26}
              width={26}
              style={{ margin: "10px" }}
            />
            Yêu thích
            <div className="quantity-node">0</div>
          </Link>
          <Link href={"#"} className="header-icon">
            <Image
              src={shopping_cart}
              alt="shopping cart"
              height={26}
              width={26}
              style={{ padding: "10px" }}
            />
            Giỏ hàng
            <div className="quantity-node">0</div>
          </Link>
        </div>
      </div>
      <div className="nav-header">
        <div>
          <ul className="row-items">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={activeItem == item.label ? "active" : ""}
                onClick={() => handleItemClick(item.label)}
              >
                {item.label === "Sản phẩm" ? (
                  <div className="dropdown">
                    <Link href="#">
                      Sản phẩm
                      <ArrowDropDownIcon />
                    </Link>
                    <MenuProductCategory />
                  </div>
                ) : (
                  <Link href={item.path}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hot-sales">
          <Link href={"#"}>
            <Image
              src={
                "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/menu_icon_3.png?1708512217480"
              }
              alt="flash"
              width={12}
              height={24}
              style={{ marginRight: "10px" }}
            />
            Hot Sale
          </Link>
        </div>
      </div>
    </header>
  );
};
export default HeaderLayout;
