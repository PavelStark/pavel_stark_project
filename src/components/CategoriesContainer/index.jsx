import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllCategories} from "../../asyncActions/categories";
import style from "./Categories.module.css"


function CategoriesContainer({ type }) {
  const { id } = useParams();
  const { allCategories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAllCategories(type))
  }, [id, type]);


  return (
    <div className="wrapper">

      <div className={style.categoriesAll}>

      </div>

      <div className={style.categoriesContainer}>
            {allCategories.map(elem => 
                <div>
                    <img alt='categories' className={style.categoriesItem} src={ROOT_URL+elem.image}/>
                    <p className={style.categoriesName}>{elem.title}</p>
                </div>
            )}
        </div>
      
    </div>
  );
}

export default CategoriesContainer;
