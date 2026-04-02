require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const {HoldingsModel} = require("./models/HoldindsModel");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require("./models/OrdersModels");
const {UserModel} = require("./models/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

// Authentication routes
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new UserModel({ username, email, password: hashedPassword });
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            message: "User created successfully",
            token,
            user: { id: user._id, username: user.username, email: user.email, balance: user.balance }
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error creating user" });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            message: "Login successful",
            token,
            user: { id: user._id, username: user.username, email: user.email, balance: user.balance }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in" });
    }
});

app.get("/profile", verifyToken, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                balance: user.balance
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile" });
    }
});
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//     }
//   ];
//     tempHoldings.forEach(async (holding) => {
//         let newHolding = new HoldingsModel({
            
//                 name: holding.name,
//                 qty: holding.qty,
//                 avg: holding.avg,
//                 price: holding.price,
//                 net: holding.net,
//                 day: holding.day,
//     });
//         await newHolding.save();
// });
// res.send("Holdings added successfully");   
// });

// app.get("/addPositions", async (req, res) => {
//     let tempPostions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPostions.forEach(async (position) => {
//     let newPosition = new PositionsModel({
//         product: position.product,
//         name: position.name,
//         qty: position.qty,
//         avg: position.avg,
//         price: position.price,
//         net: position.net,
//         day: position.day,
//         isLoss: position.isLoss
//     });
//     await newPosition.save();
// });
// res.send("Positions added successfully");
// });

app.get("/allHoldings", verifyToken, async (req, res) => {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
});

app.get("/allPositions", verifyToken, async (req, res) => {
    const positions = await PositionsModel.find({});
    res.json(positions);
});

app.post("/newOrder", verifyToken, async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        userId: req.user.userId // Associate order with user
    });
    await newOrder.save();
    res.json({ message: "Order received successfully" });
});

app.get("/allOrders", verifyToken, async (req, res) => {
    const orders = await OrdersModel.find({ userId: req.user.userId });
    res.json(orders);
});

app.delete("/cancelOrder/:id", verifyToken, async (req, res) => {
    try {
        const order = await OrdersModel.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json({ message: "Order canceled successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error canceling order" });
    }
});

app.listen(process.env.PORT || 3002, () => {
    console.log("App Started")
});