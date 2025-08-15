function greet(name) {

    return `Hell0000 Dear, ${name}!`;
    
    }
    
    module.exports = greet; // Ensure function is exportable
    // If run directly, print output (useful for debugging)
    
     if (require.main === module) {
    
     console.log(greet("World"));
    
    }
