const apps = require("./app");

const PORT = process.env.PORT || 5000;

apps.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
