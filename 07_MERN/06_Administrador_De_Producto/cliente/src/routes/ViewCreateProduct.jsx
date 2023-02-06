import FormCreateProduct from "../components/FormCreateProduct";
import "../css/styles.css";
import "../routes/ViewCreateProduct.css";

const ViewCreateProduct = () => {
  return (
    <div className="container">
      <h1 className="page-header">Create Product</h1>
      <FormCreateProduct />
    </div>
  );
};
export default ViewCreateProduct;
