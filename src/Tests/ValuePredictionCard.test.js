import React from "react";
import { render } from "@testing-library/react";
import ValuePredictionCard from "../components/ValuePredictionCard";

describe("ValuePredictionCard", () => {
  const props = {
    ticker: "AAPL",
    pricePredictions: {
      ARIMA: "$100",
      LSTM: "$120",
      linReg: "$130",
    },
    rmse: {
      ARIMA: "0.5",
      LSTM: "0.3",
      linReg: "0.2",
    },
  };

  test("renders the component with the correct props", () => {
    const { getByText } = render(<ValuePredictionCard {...props} />);

    expect(
      getByText(`TOMORROW'S ${props.ticker} CLOSING PRICE BY ARIMA`)
    ).toBeInTheDocument();
    expect(
      getByText(`TOMORROW'S ${props.ticker} CLOSING PRICE BY LSTM MODEL`)
    ).toBeInTheDocument();
    expect(
      getByText(`TOMORROW'S ${props.ticker} CLOSING PRICE BY LINEAR REGRESSION`)
    ).toBeInTheDocument();
    expect(getByText("ARIMA RMSE")).toBeInTheDocument();
    expect(getByText("LSTM MODEL RMSE")).toBeInTheDocument();
    expect(getByText("LINEAR REGRESSION RMSE")).toBeInTheDocument();

    expect(getByText(props.pricePredictions.ARIMA)).toBeInTheDocument();
    expect(getByText(props.pricePredictions.LSTM)).toBeInTheDocument();
    expect(getByText(props.pricePredictions.linReg)).toBeInTheDocument();
    expect(getByText(props.rmse.ARIMA)).toBeInTheDocument();
    expect(getByText(props.rmse.LSTM)).toBeInTheDocument();
    expect(getByText(props.rmse.linReg)).toBeInTheDocument();
  });
});
