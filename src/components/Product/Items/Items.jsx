import style from "../product.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Items = ({ category, product }) => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      let newObj = [...category];
      newObj.map((item) => {
        return (newObj[0].active = "active");
      });
      setItems(newObj);
    }
  }, [category]);

  return (
    <>
      {Items && (
        <>
          {Items.map((item) => {
            return (
              <div
                key={item._id}
                className={`tab-pane ${item.active ? item.active : ""}`}
                id={`id_${item._id}`}
                role="tabpanel"
                aria-labelledby={`id_${item._id}-tab`}
              >
                <div className={style.menu_item}>
                  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {product.map((item) => {
                      return <Card item={item} />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Items;
