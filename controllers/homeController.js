

const getHomes = (req,res,next) =>{
    res.status(200).json({ success: true, msg: "Show the homes"});
}

const getHomeId = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `get the home ${req.params.id}`});
}

const createHome = (req,res,next) =>{
    res.status(200).json({ success: true, msg: "Create the home"});
}

const updateHomeId = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `update the home ${req.params.id}`});
}

const deleteHomeId = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `delete the home ${req.params.id}`});
}


module.exports = {
    getHomes,
    getHomeId,
    createHome,
    updateHomeId,
    deleteHomeId
};