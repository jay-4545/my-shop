import { Button, Drawer } from "flowbite-react";
import { HiMinus, HiPlus, HiShoppingCart, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeFromCart } from "../redux/slice/cartSlice";

export function DrawerComponent({ isOpen, toggleDrawer }) {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeFromCart(id));
  }

  function handleDecrease(id) {
    dispatch(decrease(id));
  }

  function handleIncrease(id) {
    dispatch(increase(id));
  }

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} position="right">
      <Drawer.Header
        title="Cart"
        titleIcon={() => {
          return <HiShoppingCart className="mr-2 h-5 w-5" />;
        }}
      />
      <Drawer.Items className="flex flex-col gap-4">
        {cart?.cartItem?.map((cartItem) => {
          return (
            <div className="flex gap-4">
              <div>
                <img
                  src={cartItem.img}
                  alt=""
                  className="h-14 w-14 object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2 items-center ">
                  <p>{cartItem.title}</p>
                  <p className="font-medium ml-14">
                    {cartItem.price * cartItem.qty}$
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    pill
                    size="xs"
                    gradientDuoTone="pinkToOrange"
                    onClick={() => {
                      handleDecrease(cartItem.id);
                    }}
                  >
                    <HiMinus />
                  </Button>
                  <p>{cartItem.qty}</p>
                  <Button
                    pill
                    size="xs"
                    gradientDuoTone="pinkToOrange"
                    onClick={() => {
                      handleIncrease(cartItem.id);
                    }}
                  >
                    <HiPlus />
                  </Button>
                  <div className="ml-11">
                    <Button
                      pill
                      size="xs"
                      gradientDuoTone="pinkToOrange"
                      onClick={() => {
                        handleDelete(cartItem.id);
                      }}
                    >
                      <HiTrash />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="fixed bottom-0 bg-white w-[calc(272px)] p-2">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>{cart.subTotal}</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>{cart.tax}</p>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>{cart.total}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Drawer.Items>
    </Drawer>
  );
}

export default DrawerComponent;
