import Link from "next/link";
const page = () => {
  return (
    <div>
      <div>
        <p>
          <Link href="#">Bồn tắm</Link>
        </p>
        <ul>
          <li>
            <Link href="#">Bồn tắm đá</Link>
          </li>
          <li>
            <Link href="#">Bồn tắm ngâm</Link>
          </li>
          <li>
            <Link href="#">Bồn tắm massage</Link>
          </li>
          <li>
            <Link href="#">Bồn tắm massage âm sàn</Link>
          </li>
        </ul>
      </div>
      <div className="product-category">
        <p>
          <Link href="#">Bồn cầu</Link>
        </p>
        <ul>
          <li>
            <Link href="#">Bồn cầu thông minh</Link>
          </li>
          <li>
            <Link href="#">Bồn cầu treo tường</Link>
          </li>
          <li>
            <Link href="#">Bồn cầu 1 khối</Link>
          </li>
          <li>
            <Link href="#">Bồn cầu không két nước</Link>
          </li>
        </ul>
      </div>
      <div className="product-category">
        <p>
          <Link href="#">Sen tắm</Link>
        </p>
        <ul>
          <li>
            <Link href="#">Sen tắm cây</Link>
          </li>
          <li>
            <Link href="#">Sen tắm âm tường</Link>
          </li>
          <li>
            <Link href="#">Sen tắm nhiệt độ</Link>
          </li>
          <li>
            <Link href="#">Sen tắm nóng lạnh</Link>
          </li>
        </ul>
      </div>
      <div className="product-category">
        <p>
          <Link href="#">Tủ chậu Lavabo</Link>
        </p>
        <ul>
          <li>
            <Link href="#">Chậu treo tường</Link>
          </li>
          <li>
            <Link href="#">Chậu âm bàn</Link>
          </li>
          <li>
            <Link href="#">Bộ tủ chậu</Link>
          </li>
        </ul>
      </div>
      <div className="product-category">
        <p>
          <Link href="#">Vòi Lavabo</Link>
        </p>
        <ul>
          <li>
            <Link href="#">Vòi nước nóng lạnh</Link>
          </li>
          <li>
            <Link href="#">Vòi lavabo âm tường</Link>
          </li>
          <li>
            <Link href="#">Vòi cảm ứng</Link>
          </li>
        </ul>
      </div>
      <div className="product-category">
        <p>
          <Link href="#">Phụ kiện</Link>
        </p>
        <ul>
          <li>
            <Link href="#">Gương phòng tắm</Link>
          </li>
          <li>
            <Link href="#">Máy sấy tay</Link>
          </li>
          <li>
            <Link href="#">Phễu thoát sàn</Link>
          </li>
          <li>
            <Link href="#">Kệ kính</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default page;
