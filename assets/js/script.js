// Local variables
let headsFlip = 0
let tailsFlip = 0

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners and handlers for both buttons
    document.getElementById('flip').addEventListener('click', () => {
        let flippedHeads = Math.random() < 0.5

        if (flippedHeads) {
            // If heads is flipped, heads img will display + update text content to heads was flipped
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            headsFlip ++ //adds to heads flip
        }
        else {
            // If tails is flipped, tails img will display + message will update to tails was flipped
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tailsFlip ++ //adds to tails flip
        }

        // scoreboard
        // Total number of rolls
        let total = headsFlip + tailsFlip

        // Percentage variables
        let percentHeads = 0
        let percentTails = 0


        // calculates percentage
        if (total > 0) {
            percentHeads = Math.round((headsFlip / total) * 100)
            percentTails = Math.round((tailsFlip / total) * 100)
        }

        // Update cells in table
        document.getElementById('heads').textContent = headsFlip
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsFlip
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    // CLEAR BUTTON
    document.getElementById('clear').addEventListener('click', function () {
        //resets local variables to 0
        headsFlip = 0
        tailsFlip = 0

        //resets percentage variable back to 0
        let total = headsFlip + tailsFlip
        let percentHeads = 0
        let percentTails = 0


        // Updates cells to 0
        document.getElementById('heads').textContent = headsFlip
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsFlip
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})