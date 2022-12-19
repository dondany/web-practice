const quotes = [
	{
		"id": 1,
		"text": "Be the change you wish to see in the world.",
		"author": "Mahatma Gandhi"
	},
	{
		"id": 2,
		"text": "The only way to do great work is to love what you do.",
		"author": "Steve Jobs"
	},
	{
		"id": 3,
		"text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
		"author": "Ralph Waldo Emerson"
	},
	{
		"id": 4,
		"text": "In three words I can sum up everything I've learned about life: it goes on.",
		"author": "Robert Frost"
	},
	{
		"id": 5,
		"text": "It does not matter how slowly you go as long as you do not stop.",
		"author": "Confucius"
	},
	{
		"id": 6,
		"text": "You miss 100% of the shots you don't take.",
		"author": "Wayne Gretzky"
	},
	{
		"id": 7,
		"text": "Believe you can and you're halfway there.",
		"author": "Theodore Roosevelt"
	},
	{
		"id": 8,
		"text": "The best way to predict your future is to create it.",
		"author": "Abraham Lincoln"
	},
	{
		"id": 9,
		"text": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
		"author": "Winston Churchill"
	},
	{
		"id": 10,
		"text": "The only thing we have to fear is fear itself.",
		"author": "Franklin D. Roosevelt"
	}
];


function nextQuote() {
    const quoteNumberElement = document.getElementById("quote-number");
    const quoteTextElement = document.getElementById("quote-text");
    const quoteAuthorElement = document.getElementById("quote-author");
    
    const random = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[random];

    quoteNumberElement.innerHTML = `QUOTE #${randomQuote.id}`;
    quoteTextElement.innerHTML = randomQuote.text;
    quoteAuthorElement.innerHTML = `- ${randomQuote.author}`;
}