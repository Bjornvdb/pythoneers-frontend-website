const express = require('express'); 
const app = express();

// Serve static resources
app.use(express.static('./public'));
app.use('/dist/images', express.static('./public/dist/images'));
app.use('/dist/js', express.static('./public/dist/js'));
app.use('/dist/css', express.static('./public/dist/css'));

// Start server
app.listen(9090, () => {
    console.log('Listening on http://localhost:9090');
});

