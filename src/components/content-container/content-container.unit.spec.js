import ContentContainer from ".";
import { render, screen } from "src/test-utils";

describe("ContentContainer", () => {
it("should render the component", async () => {
render(
    <ContentContainer>
    <div data-auto="test-content">test-content</div>
    </ContentContainer>
);
expect(screen.getByTestId("test-content")).toBeInTheDocument();
});

it("should render the component with gray background class modifier when specified", async () => {
render(
    <ContentContainer gray>
    <div data-auto="test-content">test-content</div>
    </ContentContainer>
);

expect(
    screen
    .getByTestId("content-container-wrapper")
    .classList.contains("content-container__content-wrapper--gray")
).toEqual(true);
});
});
