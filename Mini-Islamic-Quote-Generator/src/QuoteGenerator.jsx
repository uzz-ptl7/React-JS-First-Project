import { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch quotes from the local JSON file
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("/quotes.json"); // Fetch from public folder
      const quotes = await response.json();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
    setLoading(false);
  };

  // Fetch quote on first load
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      <h2 className="title">Islamic Quote Generator</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="quote">"{quote.quote}"</p>
          <p className="author">— {quote.author}</p>
          <button className="button" onClick={fetchQuote}>
            New Quote
          </button>
        </>
      )}
    </div>
  );
};

export default QuoteGenerator;
