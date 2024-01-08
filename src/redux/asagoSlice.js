import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
};

export const asagoSlice = createSlice({
    name: "asago",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log(action);
            // console.log("state: ", state.productData);
            const existingProduct = state?.productData?.find((item) => {
                return item?._id === action?.payload?._id;
            });
            // console.log("Existed: ", existingProduct);
            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 1) + (action.payload.quantity || 1);
            } else {
                state.productData.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item) => item._id === action.payload._id
            );
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity === 1;
            } else {
                existingProduct && existingProduct.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart,
} = asagoSlice.actions;
export default asagoSlice.reducer;
