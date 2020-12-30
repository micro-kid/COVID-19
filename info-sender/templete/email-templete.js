/*
 * @Author: your name
 * @Date: 2020-01-29 23:24:30
 * @LastEditTime : 2020-01-31 11:36:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /info-sender/templete/email-templete.js
 */

function createEmailHtml({ info, baseUrl }){
    return `
    <html>
        <div>${info.title}</div>
        <div>更新时间：${info.pubDateStr}</div>
        <div>信息来源：${info.infoSource}</div>
        <div>${info.summary}</div>
        <div>
            <a href=${baseUrl} target="_blank">查看最新疫情动态</a>
        </div>
    </html>   
    `;
}

module.exports = {
    createEmailHtml:createEmailHtml
}