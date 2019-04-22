const boom = require('boom');
const Admin = require('../app/models/admin');

exports.getAdmins = async (req, reply) => {
    try {
        
        const admins = await Admin.find({},'state firstName lastName user createdAt')

        return admins
    } catch (error) {
        throw boom.boomify(error)
    }
}

exports.getSingleAdmin = async (req, reply) => {
    try {
        const id = req.params.id
        const admin = await Admin.findById(id)
        return desiredData;
    } catch (error) {
        throw boom.boomify(error)
    }
}

exports.createAdmin = async (req, reply) => {
    return new Promise((resolver, reject)=> {

   
    const admin = new Admin(req.body)
    const saveAdmin = cb => (err, admin)=>{
        if(err){
            reject(err)
            return
        }
        cb(admin)
    }
    const findAdmin = record =>{
        Admin.find(record, (err, [admin])=> {
            if(err){
                reject(err)
                return
            }

            reply.header("location", `admin/${admin._id}`)
            resolver({...JSON.parse(JSON.stringify(admin)), password: null})
        })
    } 
    admin.save(saveAdmin(findAdmin))

    })
} 

exports.updateAdmin = async (req, reply) => {
    try { 
        Admin.findById(req.params.id, function (err, admin) {
            if (err)
                res.send(err);
            admin.firstName = req.body.firstName;
            admin.lastName = req.body.lastName;
            admin.state = req.body.state;
            admin.user = req.body.user;
            admin.password = req.body.password
            admin.save(function (err) {
            reply.send({
                    message: 'Admin info updated',
                    data: admin
                });
            });
        });
    } catch (error) {
        throw boom.boomify(error)
    }
} 

exports.deleteAdmin = async (req, reply) => {
    try {
        const id = req.params.id
        const admin = await Admin.findByIdAndRemove(id)
        return admin 
    } catch (error) {
        throw boom.boomify(error)
    }
}

exports.deleteAll = async (req, reply) => {
    // dev 
  try{
        const admin = Admin.deleteMany({});
        return admin; 
    } catch (error) {
        throw boom.boomify(error);
    }
}

