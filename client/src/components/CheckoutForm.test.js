import React from "react";
import {
    render,
    fireEvent,
    getByTestId,
    getByText,
} from "@testing-library/react";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
     render(<CheckoutForm />)
});



test("form shows success message on submit with form details", async () => {
    const firstname = "Andre";
    const lastname = "X";
    const address = "123 Sesame St";
    const city = "adjkfsdhf";
    const state = "New York";
    const zip = "11220";
    const { getByTestId, getByText } = render(<CheckoutForm />);
    const formSubmit = getByTestId("submit");
    fireEvent.click(formSubmit)
    

    // It's about time
    const success = getByTestId(/successMessage/i);

 
    expect(success).toBeInTheDocument();

});




//https://www.youtube.com/watch?v=NE_aorvSeSQ 

//https://testing-library.com/docs/react-testing-library/cheatsheet

//https://www.youtube.com/watch?v=S_gFUVIt0sM&feature=youtu.be