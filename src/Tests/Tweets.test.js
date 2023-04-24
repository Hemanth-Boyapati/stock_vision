import React from "react";
import { render } from "@testing-library/react";
import Tweets from "../components/Tweets";

describe("Tweets", () => {
  it("renders the correct ticker and tweets", () => {
    const ticker = "AAPL";
    const tweets = ["This is a tweet", "Another tweet"];
    const { getByText } = render(<Tweets ticker={ticker} tweets={tweets} />);

    // Assert that the ticker is rendered
    expect(getByText(`Recent TWEETS about ${ticker}`)).toBeInTheDocument();

    // Assert that each tweet is rendered
    tweets.forEach((tweet) => {
      expect(getByText(tweet)).toBeInTheDocument();
    });
  });
});
