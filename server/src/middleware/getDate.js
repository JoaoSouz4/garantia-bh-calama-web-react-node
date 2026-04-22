function getOsData(req, res, next) {
    try {
        const osData  = req.body;

        if (!osData) {
            return res.status(400).json({ error: "osData is required"});
        }

        req.osData = osData;
        next();
    } catch (e) {
        next(new Error("Error in getOsData", req.body));
    }
}

module.exports = { getOsData };