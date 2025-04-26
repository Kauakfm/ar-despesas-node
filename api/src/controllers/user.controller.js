const db = require("../config/database");
// ==> Método responsável por criar um novo 'Product':
exports.createProduct = async (req, res) => {
    const { name, email, password } = req.body;
    const { rows } = await db.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
        [name, email, password]
    );
    res.status(201).send({
        message: "User added successfully!",
        body: {
            product: { name, email }
        },
    });
};