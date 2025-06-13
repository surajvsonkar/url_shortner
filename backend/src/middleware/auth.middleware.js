import { findUserById } from '../dao/user.dao.js';
import { verifyToken } from '../utils/helper.js';

export const authMiddleware = async (req, res, next) => {
	const token = req.cookies.accessToken;
	if (!token)
		return res.status(401).json({
			message: 'Unauthorized user',
		});

	try {
		const decoded = verifyToken(token);
        console.log(decoded)
        const user = await findUserById(decoded.id)
        if(!user) return res.status(401).json({
            message: "unauthorized"
        })
        req.user = user
	} catch (error) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }
};
