var Userdb = require('../model/model');
var Jobdb = require('../model/modelJob');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Không được để trống !"});
        return;
    }
    // new user
    const user = new Userdb({
        name : req.body.name,
        phone : req.body.phone,
        email : req.body.email,
        dob : req.body.dob,
        position : req.body.position,
        address : req.body.address,
        gender: req.body.gender,
        status : req.body.status
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Có lỗi xảy ra khi tạo mới nhân viên."
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Không tìm thấy nhân viên theo mã "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Lỗi khi tìm nhân viên " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Có lỗi xảy ra khi tìm kiếm thông tin nhân viên." })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Dữ liệu cập nhật không được để trống"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `không thể cập nhật cho nhân viên có mã ${id}. Có thể do nhân viên không được tìm thấy.`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Có lỗi xảy ra khi cập nhật thông tin"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Không thể xoá nhân viên có mã ${id}. Có thể mã nhân viên sai`})
            }else{
                res.send({
                    message : "Xoá nhân viên thành công !"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Không thể xoá nhân viên có mã " + id
            });
        });
}

//For Job
exports.createJ = (req, res) =>{
    if(!req.body){
        res.status(400).send({ message : "Không được để trống !"});
        return;
    }

    const job = new Jobdb({
        day: req.body.day,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        employ: req.body.employ,
        pos: req.body.pos,
    })

    job
        .save(job)
        .then(data => {
            //res.send(data)
            res.redirect('/add-job');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Có lỗi xảy ra khi tạo mới ca làm việc."
            });
        });
}

exports.findJ = (req, res) =>{
    if(req.query.id){
        const id = req.query.id;

        Jobdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Không tìm thấy ca làm việc."})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Lỗi khi tìm ca làm việc."})
            })

    }else{
        Jobdb.find()
            .then(job => {
                res.send(job)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Có lỗi xảy ra khi tìm kiếm thông tin ca làm việc." })
            })
    }
}

exports.updateJ = (req, res) =>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Dữ liệu cập nhật không được để trống"})
    }

    const id = req.params.id;
    Jobdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `không thể cập nhật ca làm việc.`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Có lỗi xảy ra khi cập nhật thông tin"})
        })
}

exports.deleteJ = (req, res) =>{

    const id = req.params.id;
    Jobdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Không thể xoá ca làm việc.`})
            }else{
                res.send({
                    message : "Xoá ca làm việc thành công !"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Không thể xoá ca làm việc"
            });
        });
}