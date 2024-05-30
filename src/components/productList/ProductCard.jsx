import { Button, Card } from "flowbite-react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

export function ProductCard({ product }) {
  const { title, img, rating, price } = product;
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ ...product, qty: 1 }));
  }

  return (
    <Card
      className="max-w-sm mt-14"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={img}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <Rating rating={rating} />
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <Button pill gradientDuoTone="pinkToOrange" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
