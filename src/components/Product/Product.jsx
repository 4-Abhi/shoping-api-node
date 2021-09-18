import React, { useEffect } from "react";
import style from "./product.module.css";
import { useSelector } from "react-redux";
import { product } from "../../data/product";
import Items from "./Items/Items";

const Product = () => {
  const categoryStore = useSelector((state) => state.category);
  const itemStore = useSelector((state) => state.item);
  // eslint-disable-next-line
  const item = itemStore;
  const { category } = categoryStore;

  useEffect(() => {}, []);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.title}>Featured Products</h2>
        <h6>Visit Our Shop to see amazing Product</h6>
        <span className={style.underline}></span>
        <div className={style.menu}>
          <ul className="nav" id="myTab" role="tablist">
            {category && (
              <>
                {category.map((item) => {
                  return (
                    <li key={item._id} role="presentation" className="nav-item">
                      <a
                        href="/#"
                        id={`id_${item._id}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#id_${item._id}`}
                        aria-controls={`id_${item._id}`}
                        type="button"
                        role="tab"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
        <div className="tab-content">
          {category && <Items category={category} product={product} />}
        </div>
      </div>
    </div>
  );
};
export default Product;
