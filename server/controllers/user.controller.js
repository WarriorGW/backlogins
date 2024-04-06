import { pool } from "../config/db.js";

export const getUsers = async (req, res) => {
	try {
		const [result] = await pool.query(
			"SELECT * FROM users ORDER BY createdAt ASC"
		);
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const getOneUser = async (req, res) => {
	try {
		const [result] = await pool.query(
			"SELECT * FROM users WHERE email = ? AND pass = ?",
			[req.body.email, req.body.pass]
		);

		if (result.length === 0) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}

		res.json(result[0]);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createUser = async (req, res) => {
	try {
		const response = req.body;
		const [result] = await pool.query("INSERT INTO users SET ?", response);
		res.json({
			id: result.insertId,
			response,
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const changePass = async (req, res) => {
	try {
		const result = await pool.query(
			"UPDATE users SET pass = ? WHERE email = ?",
			[req.body.pass, req.body.email]
		);
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateUser = async (req, res) => {
	try {
		const result = await pool.query("UPDATE users SET ? WHERE id = ?", [
			req.body,
			req.params.id,
		]);
		res.json(result);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteUser = async (req, res) => {
	try {
		const [result] = await pool.query("DELETE FROM users WHERE id = ?", [
			req.params.id,
		]);
		if (result.affectedRows === 0)
			return res.status(404).json({ message: "Task no encontrada" });
		return res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
