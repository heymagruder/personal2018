var quotes = [
'I have bad news and worse news a financial adviser says to his client. Which would you like to hear first? The bad news, the client says. All your money will be gone in 24 hours. Oh my gosh, the client says. What’s the worse news? I should have made this call yesterday.',
'The market may be bad, but I slept like a baby last night. I woke up every hour and cried.',
'How many advisers does it take to screw in a lightbulb? One to hire a lightbulb installer to do it and then charge you 1% of your assets each year.',
'I\'m not saying my financial adviser is bad at her job but when I went into her office and asked her to check my balance, she tried to push me over.',
'You know you have a bad financial adviser when you tell him to buy AOL stock and he asks you the ticker symbol.',
'What’s another name for long-term investment? A failed short-term investment.',
'A client asks his adviser, where should I invest my money? Put it on booze, the adviser says. Where else you get 40%?',
'A client asks his adviser, is all my money really gone? No, of course not, the adviser says. It’s just with somebody else!',
'The pessimist sees the glass as half empty ...The optimist sees it half full. The financial adviser just adds whiskey.',
'A financial adviser is an expert! He will know tomorrow why the things he predicted yesterday didn’t happen today.',
'Why couldn’t the advisor get people to buy bonds? Not enough interest.',
'How to make a million in the stock market? Start with two!',
'I saw a bank that said if offered 24 Hour Banking.” But I didn’t go in. I didn’t have that much time.',
'Why did the robber only steal 1% of the bank’s money? He was a financial advisor.',
'You know you have a bad financial adviser when you tell him to buy AOL stock and he asks you the ticker symbol.',
'Just got some good news from my financial planner, he told me I can retire at 62 and comfortably live for 11 minutes.',
'A woman proudly told her friend, "I\'m responsible for making my husband a millionaire. Well what was he before he married you? the friend asked. A billionaire.',
'Q: How does financial advisors measure their success? A: By the number of consecutive life sentences they receive.',
'A financial advisor, a Jew, and a convict walk into a bar. He orders a beer.',
'My investments put three kids through Harvard. Unfortunately it was my financial advisor’s kids.',
'What do you call a company that is run by a kid? Baby on Board of Directors.',
'I once got into so much debt that I couldn\'t even afford my electricity bills, they were the darkest times of my life.',
'I used to be a banker but I lost interest.',
'I had an account with a bank in the North Pole, but they froze all my assets.',
'An accountant is having a hard time sleeping and goes to see his doctor. Doctor, I just can\'t get to sleep at night. The Doctor replied Have you tried counting sheep? The accountant stated That\'s the problem - I make a mistake and then spend three hours trying to find it.'

]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
