import { render, screen } from "src/test-utils";
import AcmeButton from ".";
// import messages from "./read-now-button-messages";

describe("ReadNowButton", () => {
    const defaultState = {
        userId: "test-user-id",
        identificationNumber: "test-identification-number",
        someName: "Shotgun",
    };
    const renderWithState = ({ userId, identificationNumber }) =>
    render(<AcmeButton identificationNumber={identificationNumber} />, {
        preloadedState: { user: { userId: userId } },
    });

    it("should render link with link ,sd3jdj", () => {
    renderWithState(defaultState);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe(
        `/area/deepPath/${identificationNumber}`
    );
    });

    it("should render link text as 'Some Link'", () => {
    renderWithState(defaultState);
    const link = screen.getByRole("link");
    // expect(link.textContent).toBe(messages.linkText.defaultMessage);
    expect(link.textContent).toBe("Some Link");
});
});
