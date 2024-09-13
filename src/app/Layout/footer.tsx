import "@/styles/footer.css";
import { menuItems } from "./component/menu_item";
import Link from "next/link";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/material";
const FooterLayout = () => {
  const lstNews = [
    { label: "Hướng dẫn mua hàng", path: "/" },
    { label: "Chính sách đổi trả", path: "/" },
    { label: "Chính sách bán hàng", path: "/" },
    { label: "Chính sách giao hàng", path: "/" },
    { label: "Bảo mật thông tin cá nhân", path: "/" },
  ];
  return (
    <footer>
      <div className="main-footer">
        <Container>
          <div className="left-footer">
            <h4>THÔNG TIN CÔNG TY</h4>
            <div className="item">
              <strong>Tên công ty</strong>
              <p>Công ty cổ phần MTV Lofi Furniture</p>
            </div>
            <div className="item">
              <strong>Địa chỉ</strong>
              <p>47 TL08, Thạnh Lộc, quận 12, TP Hồ Chí Minh</p>
            </div>
            <div className="item">
              <strong>Email</strong>
              <a href="#">support@lofiFnt.vn</a>
            </div>
            <div className="item">
              <strong>Hotline</strong>
              <a href="#">1900 6750</a>
            </div>
          </div>
          <div className="right-footer">
            <div className="col-footer ">
              <AddIcon sx={{ color: "#d94e28" }} className="icon-smallscreen" />
              <div>
                <h4>VỀ CHÚNG TÔI</h4>
                <ul className="column-items">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-footer">
              <AddIcon sx={{ color: "#d94e28" }} className="icon-smallscreen" />
              <div>
                <h4>CHÍNH SÁCH</h4>

                <ul className="column-items">
                  {lstNews.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="module">
              <div className="module-social">
                <h4>THÔNG TIN LIÊN HỆ</h4>
                <div className="list-module">
                  <Link href={"#"}>
                    <Image
                      src={
                        "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/facebook.png?1708512217360"
                      }
                      alt={"Facebook"}
                      width={36}
                      height={36}
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src={
                        "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/twitter.png?1708512217360"
                      }
                      alt={"Twitter"}
                      width={36}
                      height={36}
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src={
                        "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/linkedin.png?1708512217360"
                      }
                      alt={"Linkedin"}
                      width={36}
                      height={36}
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src={
                        "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/youtube.png?1708512217360"
                      }
                      alt={"Youtube"}
                      width={36}
                      height={36}
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src={
                        "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/instagram.png?1708512217360"
                      }
                      alt={"Instagram"}
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
              </div>
              <div className="module-payment">
                <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                <div className="list-module">
                  <ul>
                    <li>
                      <Image
                        src={
                          "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/facebook.png?1708512217360"
                        }
                        alt={"Facebook"}
                        width={36}
                        height={36}
                      />
                    </li>
                    <li>
                      <Image
                        src={
                          "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/twitter.png?1708512217360"
                        }
                        alt={"Twitter"}
                        width={36}
                        height={36}
                      />
                    </li>
                    <li>
                      <Image
                        src={
                          "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/linkedin.png?1708512217360"
                        }
                        alt={"Linkedin"}
                        width={36}
                        height={36}
                      />
                    </li>
                    <li>
                      <Image
                        src={
                          "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/youtube.png?1708512217360"
                        }
                        alt={"Youtube"}
                        width={36}
                        height={36}
                      />
                    </li>
                    <li>
                      <Image
                        src={
                          "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/instagram.png?1708512217360"
                        }
                        alt={"Instagram"}
                        width={36}
                        height={36}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="copy-right">© Bản quyền thuộc về Lofi Team</div>
    </footer>
  );
};
export default FooterLayout;
