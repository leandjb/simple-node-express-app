const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("EXPRESS API Server Running...")
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`EXPRESS API Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;

