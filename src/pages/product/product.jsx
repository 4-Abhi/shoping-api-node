import React, { useEffect } from "react";
import style from "./product.module.css";
import { useDispatch, useSelector } from "react-redux";

import { GetItem } from "../../state/item/itemAction";

import Paginate from "../../components/paginate/paginate";

import ItemButton from "../../components/Itembutton/ItemButton";

const Product = ({ match }) => {
  const dispatch = useDispatch();

  const itemStore = useSelector((state) => state.item);
  const { item } = itemStore;

  // Use Effect

  useEffect(() => {
    if (match.params.id) {
      dispatch(GetItem(match.params.id));
    }
  }, [dispatch, match]);

  return (
    <section className={style.main}>
      <div className={style.container}>
        <div className="row">
          <div className="c0l-md-3 col-lg-3 order-1 order-sm-0"></div>
          <div className="col-md-9 col-lg-9 order-0 order-sm-1 ">
            <div className={style.header}>
              <form>
                <div className="">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Sort By Best Sell</option>
                    <option value="1">Sort By New Item</option>
                    <option value="2">Sort By Discount</option>
                  </select>
                </div>
              </form>

              <span className={style.items}>Total Items 140</span>
            </div>
            <div className={style.content}>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                {item && (
                  <>
                    {item.map((itm) => {
                      let item = { ...itm, qty: 0 };

                      return (
                        <div className="col" key={item._id}>
                          <div className={style.product}>
                            <div className={style.product_card}>
                              <img src={item.images[0]} alt="product" />
                              <div className={style.card_body}>
                                <h4 className={style.name}>{item.name}</h4>
                                <h4 className={style.price}>
                                  <del>₹ 45</del>

                                  <span>₹{item.price}/piece</span>
                                </h4>
                                <ItemButton item={item} />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
            <div>
              <Paginate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
