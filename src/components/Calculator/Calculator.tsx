import { useState } from "react";
import { NUMBERS, OPERATORS, Operator } from "../../constants";
import "./calculator.css";

function Calculator() {
	const [expression, setExpression] = useState("");
	const [result, setResult] = useState();

	const handleNumberClick = (number: number) => {
		setExpression((prevExpression) => prevExpression + number);
	};

	const handleOperatorClick = (operator: string) => {
		setExpression((prevExpression) => prevExpression + operator);
	};

	const handleClearClick = () => {
		setExpression("");
	};

	const handleCalculateClick = () => {
		const expressionArray = expression.split("");
		
	};

	return (
		<div data-testid="calculator" className="calculator">
			<h1>Calculator</h1>
			<h2 data-testid="expression">Expression: {expression}</h2>
			<h2 data-testid="result">Result: {result}</h2>
			<div>
				{NUMBERS.map((number) => (
					<button key={number} onClick={() => handleNumberClick(number)}>
						{number}
					</button>
				))}
			</div>
			<div>
				{OPERATORS.map((operator) => (
					<button key={operator} onClick={() => handleOperatorClick(operator)}>
						{operator}
					</button>
				))}
			</div>
			<div>
				<button onClick={handleClearClick}>Clear</button>
				<button onClick={handleCalculateClick}>Calculate</button>
			</div>
		</div>
	);
}

export default Calculator;
