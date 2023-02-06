import FormCreateProduct from "../components/FormCreateProduct";
import "../css/styles.css";
import "../routes/ViewCreateProduct.css";
import { Link } from "react-router-dom";

const ViewCreateProduct = () => {
  return (
    <div className="container">
      <div className="nav">
        <h1 className="page-header">Create Product</h1>
        <Link to="/" className="main-btn">
          List of Products
        </Link>
      </div>
      <FormCreateProduct />
    </div>
  );
};
export default ViewCreateProduct;
