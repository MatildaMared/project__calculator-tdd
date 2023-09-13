import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Calculator from "./Calculator";
import { NUMBERS, OPERATORS } from "../../constants";
import userEvent from "@testing-library/user-event";

describe("Calculator", () => {
	it("should render the correct number buttons", () => {
		render(<Calculator />);
		NUMBERS.forEach((number) => {
			expect(screen.getByText(number.toString())).toBeDefined();
		});
	});

	it("should render the correct operator buttons", () => {
		render(<Calculator />);

		OPERATORS.forEach((operator) => {
			expect(screen.getByText(operator)).toBeInTheDocument();
		});
	});

	it("shuould display the correct expression", async () => {
		const user = userEvent.setup();
		render(<Calculator />);

		const threeButton = screen.getByText("3");
		const sevenButton = screen.getByText("7");

		await user.click(threeButton);
		await user.click(sevenButton);

		const expectedExpression = /37/;

		screen.debug();
		expect(screen.getByText(expectedExpression)).toBeInTheDocument();
	});
});
