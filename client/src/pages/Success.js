import  React, {useEffect, useState } from "react";
import { idbPromise } from "../utils/helpers";
import { useMutation } from "@apollo/react-hooks";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  const [shouldRedirect, setshouldRedirect] = useState(false);
  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const items = cart.map((item) => item._id);
      if (items.length) {
        const { data } = await addOrder({ variables: { items } });
        const itemData = data.addOrder.items;

        itemData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
        setshouldRedirect(true)
      }
    }

    saveOrder();
  }, [addOrder]);

        if (shouldRedirect) {
        setTimeout(function () {
          window.location.assign("/");
        }, 3000);
      }

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the homepage</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
