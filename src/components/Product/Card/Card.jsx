import style from "../product.module.css";
const Card = ({ item }) => {
  return (
    <div className="col" key={item._id}>
      <a href="/">
        <div className={style.card}>
          <img
            src="https://foodstore.s3.ap-south-1.amazonaws.com/category/food.png"
            alt="item"
          />

          <div className={style.card_body}>
            <h2>{item.name}</h2>

            <div className={style.price}>
              <del>120</del>
              <span>140 / 1 kg</span>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Card;
