import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
          // Arrange
    render(<CheckoutForm/>)

         // Act

    const title = screen.queryByText(/checkout form/i)

          // Assert

    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();

});

test("form shows success message on submit with form details", () => {
    // Arrange
    render(<CheckoutForm/>)

    // Act
    const first_name = screen.queryAllByLabelText(/firt name/i);
    const last_name = screen.queryAllByLabelText(/last name/i)
    const button = screen.getByRole('button', {name: /checkout/i})

    userEvent.type(first_name, 'amanuel')
    userEvent.type(last_name, 'gilay')
    userEvent.click(button);

    const successMessage = await screen.findAllByTestId(/successMessage/i)
    const successName = await screen.findByTestId(/successMessage/);

    expect(successMessage).toBeInTheDocument();
    expect (successName).toBeInTheDocument();

});

