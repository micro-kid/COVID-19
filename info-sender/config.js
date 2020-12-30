/*
 * @Author: your name
 * @Date: 2020-01-29 23:24:30
 * @LastEditTime : 2020-01-31 19:15:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /info-sender/config.js
 */

const baseUrl = `https://3g.dxy.cn/newh5/view/pneumonia_peopleapp?from=timeline&isappinstalled=0`;

const account = {
    from : `"microkid" <410487636@qq.com>`,  //改成你的邮箱
    host:'smtp.qq.com', //改成对应的邮箱服务商主机，QQ邮箱不用修改可以用这个
    port:'465', //改成对应邮箱服务商端接口，QQ邮箱不用修改可以用这个
    secureConnection:true, // 使用了 ssl
    auth:{
        user:'410487636@qq.com',//用来发送邮件的邮箱，改成你的邮箱
        pass:'jemghdorutfucabe'//邮箱的授权码，改成对应邮箱服务商的授权密码
    }
}

//接收者的邮箱数组
const emails = [
    // '1131242397@qq.com',
    // '1041657280@qq.com',
    '410487636@qq.com',
]

module.exports = {
    baseUrl:baseUrl,
    account:account,
    emails:emails
}