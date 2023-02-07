const Joi = require("@hapi/joi");

const validateGetParams = (req, res, next) => {

    const schema = Joi.object({
        username: Joi.string().required(),
        id: Joi.number().required()
    });
    const { value } = schema.validate(req.params);
    if (value.username !== "ricky" || value.id !== 1) {
        return res.status(400).json({ msg: "Invalid user or id" });
    }
    next();
};

const validateRole = (req, res, next) => {

    const schema = Joi.object({
        role: Joi.string().required()
    });
    const { value } = schema.validate(req.params);
    if (value.role !== "admin") {
        return res.status(400).json({ msg: "Anda tidak memiliki credential" });
    }
    next();
};


module.exports = {
    validateRole,
    validateGetParams
}
