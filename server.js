const path = require("path");
const express = require("express");
const session = require("express-session");
const expresshb = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine instance with custom helpers
const hb = expresshb.create({ helpers });

const sess = {
  // required to sign the session ID cookie
  secret: "Dog jumped over the moon",
  // this is the session ID cookie
  cookie: { maxAge: null },
  // false is typically recommended; see: touch method
  resave: false,

  saveUninitialized: true,
  store: new SequelizeStore({
    // connect the Sequelize instance with express and sessions
    db: sequelize,
  }),
};

// creates a middleware for our session object
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hb.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}!`));
});
