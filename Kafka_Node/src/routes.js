import express from "express";

const routes = express.Router();

routes.post('/cetifications', (req, res) => {
    
    return res.json({
        "status": "ok",
    })
    
});

export default routes;