require("dotenv").config();
const app = require("./source/app");

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
