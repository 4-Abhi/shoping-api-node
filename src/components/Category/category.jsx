import { useEffect } from "react";
import style from "./category.module.css";
import { Link } from "react-router-dom";
// import { category } from "../../data/category";
import { Getcategory } from "../../state/category/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(Getcategory());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.title}> Shop By Category</h1>
        <h6 className={style.desc}>Visit to Our Site for amazing Product</h6>
        <span className={style.underline}></span>
        <div className={style.list}>
          <div className={style.list_container}>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 row-cols-xl-6">
              {category && (
                <>
                  {category.map((item) => {
                    return (
                      <div className="col" key={item._id}>
                        <div className={style.items}>
                          <Link to={`/product/${item._id}`}>
                            <div className={style.list_item} key={item._id}>
                              <img src={item.image} alt="item" />
                            </div>
                            <h4 className={style.list_title}>{item.name}</h4>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
