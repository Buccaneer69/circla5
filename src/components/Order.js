import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import Select from "react-select";

const deliveryMethods = [
    { value: 1, label: "Utställning" },
    { value: 2, label: "Tömning/skifte" },
    { value: 3, label: "Hemtag" },
];

const OrderForm = () => {
  const { category, subcategory, listItem } = useParams();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderData = {
      category,
      subcategory,
      listItem,
      ...data,
    };
    sessionStorage.setItem("order", JSON.stringify(orderData));
    console.log("Order saved:", orderData);
  };

  const onContinue = () => {
    reset();
  };

  useEffect(() => {
    // Check if there is saved order data in session storage
    const savedOrder = sessionStorage.getItem("order");
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);
      reset(parsedOrder);
      console.log("Order loaded from session storage:", parsedOrder);
    }
  }, [reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Top section */}
            <div className="top-section">
                <h2>Order Form</h2>
                <p>Category: {category}</p>
                <p>Subcategory: {subcategory}</p>
                <p>List Item: {listItem}</p>
                <p>
                    Date: <input type="date" {...register("date")} />
                </p>
                <p>
                    Time: <input type="time" {...register("time")} />
                </p>
                <p>
                    Leveranssätt:
                        <Controller
                        name="deliveryMethod"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                        <Select {...field} isMulti options={deliveryMethods} />
                        )}
                    />
                    {errors.deliveryMethod && (
                        <p className="errorMsg">This is a required field.</p>
                    )}                                
                </p>
                {errors.action && <p>Please enter an action</p>}
                <button onClick={onContinue}>Continue ordering</button>
                <button type="button" onClick={reset}>
                    Reset form
                </button>
            </div>
            {/* Second section */}
            <div className="middle-section">
                <h3>Personal Information</h3>
                <p>
                    Name/Company:{" "}
                    <input type="text" {...register("name", { required: true })} />
                </p>
                {errors.name && <p>Please enter your name/company</p>}
                <p>
                    Contact: <input type="text" {...register("contact", { required: true })} />
                </p>
                {errors.contact && <p>Please enter a contact</p>}
                <p>
                    Phone number:{" "}
                    <input type="tel" {...register("phone", { required: true })} />
                </p>
                {errors.phone && <p>Please enter a valid phone number</p>}
                <p>
                    Email: <input type="email" {...register("email", { required: true })} />
                </p>
                {errors.email && <p>Please enter a valid email address</p>}
                <p>
                    Markings: <input type="text" {...register("markings")} />
                </p>
                <p>
                    Add file: <input type="file" {...register("file")} />
                </p>
                <p>
                    Address: <input type="text" {...register("address", { required: true })} />
                </p>
                {errors.address && <p>Please enter an address</p>}
            </div>
            {/* Third section */}
            <div className="bottom-section">
                <h3>Additional Information</h3>
                <p>
                    Free Text Message: <textarea {...register("message")} />
                </p>
                <p><input type="checkbox" {...register('terms', { required: true })} />I agree to the terms and conditions</p>
                {errors.terms && <p>Please agree to the terms and conditions</p>}
                <p><input type="checkbox" {...register('storeData')} />I agree to store my personal data</p>
                <button type="submit">Send</button>
            </div>        
        </form>
    );
}
    
    export default OrderForm;