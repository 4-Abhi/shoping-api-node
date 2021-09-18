import style from "./filter.module.css";
import SearchIcon from "@material-ui/icons/Search";

const filterBrand = () => {
  return (
    <div className={style.filter}>
      <div className={style.top}>
        <h4>FILTER BY PRICE</h4>
      </div>
      <div className={style.bottom}>
        <form>
          <label htmlFor="price" className={style.label}>
            <span className={style.min}>₹ 200</span>
            <span className={style.max}>₹ 800</span>
          </label>
          <div className={style.brand}></div>

          <div className={style.submit}>
            <SearchIcon className={style.icon} /> Search
          </div>
        </form>
      </div>
    </div>
  );
};

export default filterBrand;
