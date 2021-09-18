import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import style from "./rating.module.css";

// no of row
const Rating = () => {
  return (
    <>
      <div className={style.ratings}>
        <div className={style.star}>
          <input type="checkbox" className={style.checkbox} />
          <StarIcon />
          <StarBorderIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <span>(16)</span>
      </div>
    </>
  );
};
export default Rating;
