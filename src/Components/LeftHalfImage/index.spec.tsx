import * as React from "react";

import { render } from "@Test/utils";
import { LeftHalfImage } from "@Components";

describe("Navbar", () => {
    it("should render without fail", () => {
        const { getByText } = render(<LeftHalfImage />);

        expect(getByText("LeftHalfImage")).toBeTruthy();
    });

    it("should match snapshot", () => {
        const { container } = render(<LeftHalfImage />);

        expect(container).toMatchSnapshot();
    });
});
