import sale from "../../assets/sale.png";
import ShopListItemBlock from "./ShopListItem.style";

const ShopListItem = ({ item }) => {
  const { itemTitle, price, itemName, imageUrl } = item;
  console.log("이미지 경로 확인:", imageUrl);
  return (
    <ShopListItemBlock>
      <div className="itemImg">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="contents">
        <p className="itemName">{itemName}</p>
        <p className="title">{itemTitle}</p>
        <div className="priceContents">
          <span>SALE</span>
          <p className="price">{price.toLocaleString()}</p>
          <img src={sale} alt="item" />
        </div>
      </div>
    </ShopListItemBlock>
  );
};

export default ShopListItem;
