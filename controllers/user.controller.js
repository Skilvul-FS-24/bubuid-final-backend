const {User} = require("../models")

module.exports = {
    getAllUser: async (req, res) => { 
        try {
            const users = await User.findAll()
  
      res.json({
        message: "berhasil mendapatkan data user",
        data: users,
      });
        } catch(error){
            error: error.message
        }
    },
  
    getUserById: async (req, res) => {
        const {id} = req.params
        const users = await User.findOne({
            where:{id:id}
        })

      res.json({
        message: "berhasil mendapatkan data id",
        data: users,
      })
    },
}