const express = require("express");
const expressHbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Dashboard = require("./models/dashboardModel");
const userDB = require("./config/userDB");
const User = require("./models/userModel");
const {
    compareHash
} = require("./utils/hash");
const {
    sign
} = require("./utils/jwtService");
const auth = require("./middleware/auth");
var methodOverride = require("method-override");
const app = express();
app.use(methodOverride("_method"));
// Creating handlebars engine
const hbs = expressHbs.create({
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "./views/layouts"),
    partialsDir: path.join(__dirname, "./views/partials")
});

// Let express know to use handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());

//sequelize funcitons


const incomeSum = async () => {
    const result = await Dashboard.sum('amount', {
        where: {
            type: "Income"
        }
    })
    console.log(JSON.parse(JSON.stringify(result)))
    return JSON.parse(JSON.stringify(result));
};
const expenditureSum = async () => {
    const result = await Dashboard.sum('amount', {
        where: {
            type: "Expenditure"
        }
    })
    console.log(JSON.parse(JSON.stringify(result)))
    return JSON.parse(JSON.stringify(result));
};

//Monthly

const incomeSumMonthly = async () => {
    let monthlyIncome = {};
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    for (let x of months) {
        const result = await Dashboard.sum('amount', {
            where: {
                type: "Income",
                month: x
            }
        })
        monthlyIncome[x] = result
    }

    console.log(monthlyIncome)
    return monthlyIncome
};

const expenditureSumMonthly = async () => {
    let monthlyExpenditure = {};
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    for (let x of months) {
        const result = await Dashboard.sum('amount', {
            where: {
                type: "Expenditure",
                month: x

            }
        })
        monthlyExpenditure[x] = result
    }

    console.log(monthlyExpenditure)
    return monthlyExpenditure
};

//All history

const getAll = async () => {
    const result = await Dashboard.findAll();
    return JSON.parse(JSON.stringify(result));
};

//routes
var uid;
app.post("/login", async (req, res) => {
    const {
        email,
        password
    } = req.body;
    console.log(email);
    const result = await User.findOne({
        where: {
            email: email
        }
    });
    // console.log(result)
    const user = result.get();
    // console.log(user)

    if (user) {
        const isValidPassword = compareHash(password, user.password);
        uid = user.id;
        if (isValidPassword) {
            const token = sign({
                sub: "user",
                email
            });
            res.cookie("jwt", token, {
                httpOnly: true
            });
            res.status(200).redirect("/dashboard");
        } else {
            res.status(401).send("Invalid User");
        }
    } else {
        res.status(401).send("Invalid User");
    }
});


app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/register', (req, res) => {
    res.status(200).render("register", {
        layout: "hero"
    })
})
app.get("/dashboard", auth, async (req, res) => {
    res.status(200).render("dashboard", {
        layout: "hero",
        incomeSum: await incomeSum(),
        expenditureSum: await expenditureSum(),
        monthlyIncome: await incomeSumMonthly(),
        monthlyExpenditure: await expenditureSumMonthly(),
        history: await getAll()
    });
});

app.post("/dashboard", async (req, res) => {
    try {
        if(req.body.amount){
        const rr = await Dashboard.create(req.body);
        res.status(200).render("dashboard", {
            layout: "hero",
            incomeSum: await incomeSum(),
            expenditureSum: await expenditureSum(),
            monthlyIncome: await incomeSumMonthly(),
            monthlyExpenditure: await expenditureSumMonthly(),
            history: await getAll()
        });
        } else {
            res.status(400).send("Invalid User");
        }
    } catch (e) {
        console.log("error: " + e);
    }
});

app.post("/register",auth, async (req, res) => {
    try {
        console.log(req.body);
        if (req.body.email) {
            const rr = await User.create(req.body);
            res.status(200).render("login", {
                layout: "hero.hbs",
            });
        } else {
            res.status(400).send("Invalid User");
        }
    } catch (e) {
        console.log("error: " + e);
    }
});

app.get("/login", (req, res) => {
    res.status(200).render("login", {
        layout: "hero.hbs",
    });
});



app.get("/home", auth, (req, res) => {
    res.status(200).render("home", {
        layout: "hero",
        userid: uid
    });
})

let PORT = process.env.PORT || 5000
app.listen(PORT);