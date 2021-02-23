import * as React from "react";

import { render } from "@Test/utils";
import { LoginForm } from "@Components";

describe("Navbar", () => {
    it("should render without fail", () => {
        const { getByText } = render(<LoginForm />);

        expect(getByText("LoginForm")).toBeTruthy();
    });

    it("should match snapshot", () => {
        const { container } = render(<LoginForm />);

        expect(container).toMatchSnapshot();
    });
});
