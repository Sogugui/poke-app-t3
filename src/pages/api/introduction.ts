
import { NextApiRequest, NextApiResponse } from "next";

export default (req:NextApiRequest, res:NextApiResponse<Answer>) =>{
    res.status(200).json({name:'Poke App'})
}