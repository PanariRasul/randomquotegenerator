function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    var current_quote = quotes[randomIndex];

    document.getElementById("quote").innerHTML = current_quote;

}

var quotes = [
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr",
    "The only way to do great work is to love what you do.- Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Imagination is more important than knowledge. - Albert Einstein",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.- Ralph Waldo Emerson",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",


]


addQuote = () => {
    var newQuote1 = document.getElementById("newQuote").value;
    quotes.push(newQuote1);
    if (document.getElementById("newQuote").value === "") {
        alert("Please Enter the New quote...!")
    } else {
        alert("New Quote Adedd Succsessfuly")
    }

    document.getElementById("newQuote").value = "";
}