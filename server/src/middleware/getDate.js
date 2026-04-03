function getDate(req, res, next){
    try{
        console.log(req.body);
        
        const os = req.body;
        req.osData = os.osData;
        next();
    } catch(e){
        throw new Error("Error in get datas: ")
    }

}

module.exports = {getDate}