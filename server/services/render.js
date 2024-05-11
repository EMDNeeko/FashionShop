const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.info_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("info_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.jobRoutes = (req, res) =>{
    axios.get('http://localhost:3000/api/jobs')
        .then(function(response){
            res.render('indexJ', { jobs : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_job = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(response){
            res.render('add_job', { users : response.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_job = (req, res) =>{
    axios.get('http://localhost:3000/api/jobs', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_job", { job : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.login = (req, res) =>{
    res.render('login');
}