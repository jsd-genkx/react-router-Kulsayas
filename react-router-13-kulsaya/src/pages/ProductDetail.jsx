import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  // ใช้ useParams คือสามารถอ่าน id: 1 จาก path บน browser ได้

  return (
    <div>
      <h1>Product Details</h1>
      <p>Details for Product ID: {id}</p>
    </div>
  );
}
export default ProductDetail;
