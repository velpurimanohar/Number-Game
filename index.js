function numberGenerationGame(remainingScore, num1, num2, num3) {
    // Variables to hold the updated score and game comment
    let gameComment = "";
    let updatedScore = remainingScore;

    // Check if all numbers are the same
    if (num1 === num2 && num2 === num3) {
        updatedScore += 1000;
        gameComment = `You were lucky this time, you got 1000 INR as all the numbers are the same. Numbers`;
    } 
    // Check if all numbers are even or all numbers are odd
    else if ((num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) || 
             (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0)) {
        updatedScore += 300;
        if (num1 % 2 === 0) {
            gameComment = `You were lucky this time, you got 300 INR as all the numbers are even. Numbers`;
        } else {
            gameComment = `You were lucky this time, you got 300 INR as all the numbers are odd. Numbers`;
        }
    } 
    // Check if numbers have a difference of 1 between them (e.g., 1, 2, 3)
    else if (Math.abs(num1 - num2) === 1 && Math.abs(num2 - num3) === 1) {
        updatedScore += 800;
        gameComment = `You were lucky this time, you got 800 INR as all the numbers have a difference of 1. Numbers`;
    } 
    // No winning conditions met
    else {
        gameComment = `You were not lucky this time. Numbers`;
    }

    // Subtract 100 from the remaining score for each game round
    updatedScore -= 100;

    // Check if the remaining score is less than or equal to 0
    if (updatedScore <= 0) {
        gameComment = "Game Over";
        updatedScore = 0;
    }

    // Return the updated score and the game comment
    return {
        updatedScore: updatedScore,
        gameComment: gameComment
    };
}

// Function to handle playing the game and updating the UI
function playGame() {
    // Generate three random numbers between 1 and 9
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    let num3 = Math.floor(Math.random() * 9) + 1;

    // Display the random numbers in the input boxes
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
    document.getElementById('num3').value = num3;

    let currentScore = parseInt(document.getElementById('score').textContent);
    let result = numberGenerationGame(currentScore, num1, num2, num3);

    // Update the score on the webpage
    document.getElementById('score').textContent = result.updatedScore;
    
    // Display the result message
    document.getElementById('result').textContent = result.gameComment;
}