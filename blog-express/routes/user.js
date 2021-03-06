var express = require('express');
const { set } = require('../app');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const { login } = require('../controller/user')
var router = express.Router();


router.post('/login', function(req, res, next) {
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
        if (data.username) {
            req.session.username = data.username;
            req.session.realname = data.realname;
            
            res.json(
                new SuccessModel()
            )
            return
        }
        res.jaon(
            new ErrorModel('登录失败')
        ) 
    })
});

router.get('/login-test', (req, res, next) => {
    if (req.session.username) {
        res.json({
            errno: 0,
            msg: '已登录'
        })
        return
    }
    res.json({
        errno: -1,
        msg: '未登录'
    })
})

// router.get('/session-test', (req, res, next) => {
//     const session = req.session
//     if (session.viewNum == null) {
//         session.viewNum = 0;
//     }
//     session.viewNum++
//     res.json({
//         viewNum: session.viewNum
//     })
// })


module.exports = router;

