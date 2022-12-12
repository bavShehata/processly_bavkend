const { model, Schema } = require("mongoose");

const OrderSchema = new Schema(
  {
    deliveryNote: {
      type: "String",
      required: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: "String",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: "Number",
      required: true,
    },
    size: {
      type: "String",
      required: false,
    },
    totalPrice: {
      type: "Number",
      required: true,
    },
  },
  { timestamps: true }
);

const OrderModel = model("order", OrderSchema);

module.exports = OrderModel;
