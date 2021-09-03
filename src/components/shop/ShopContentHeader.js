import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { setSort } from "../../redux/actions/shopActions";

function ShopContentHeader({ data, productPerPage }) {
  const { Option } = Select;
  const dispatch = useDispatch();
  const shopState = useSelector((state) => state.shopReducer);
  const handleChange = (value) => {
    dispatch(setSort(value));
  };
  return (
    <div className="shop-content__header">
      <div className="shop-content__header-showing">
        <h5>
          Mostrando 1 - {productPerPage} de {data.length} Produtos
        </h5>
      </div>
      <div className="shop-content__header-filter">
        <p>Filtrar por:</p>
        <Select
          className="shop-content__header-filter__select"
          defaultValue={shopState.sort}
          style={{ width: 250 / 16 + "em" }}
          onChange={handleChange}
        >
          <Option value="default">Padrão</Option>
          <Option value="lowHigh">Preço: baixo para alto</Option>
          <Option value="highLow">Preço: alto para baixo</Option>
          <Option value="az">A a Z</Option>
          <Option value="za">Z a A</Option>
        </Select>
      </div>
    </div>
  );
}

export default React.memo(ShopContentHeader);
