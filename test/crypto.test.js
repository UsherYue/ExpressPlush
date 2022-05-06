/**
 * ApiBareFramework
 *  Created by usher.yue.
 * User: usher.yue
 * Date: 17/3/23
 * Time: 16:37
 */

let assert = require('chai').assert;
let crypto=require('../app/common/crypto');

describe('加密测试', function () {
    it('md5测试', done => {
        console.log(crypto.md5('111111'));
        done();
    });
    it('getCinpers()获取加密算法', done => {
        let cinphers=crypto.getCiphers();
        console.log(cinphers)
        done();
    });
    it('aes-128-cbc加密和解密', done => {
        const key = '751f621ea5c8f930';
        const iv = '2624750004598718';
        const data =JSON.stringify({user: "www", pass:"wwwww/"})
        console.log("数据加密前:",data);
        const crypted = crypto.aesEncrypt(key, iv, data);
        console.log("数据加密后:", crypted);
        const dec =  crypto.aesDecrypt(key, iv, crypted);
        console.log("数据解密后:", JSON.parse(dec));
        done();
    });
    it('des-ecb加密和解密', done => {
        const key = '01234567';
        const iv = '';
        let data =JSON.stringify({user: "www", pass:"wwwww/"})
        console.log("数据加密前:",data);
        const crypted = crypto.desEncrypt(key, data);
        console.log("数据加密后:", crypted);
        const dec =  crypto.desDecrypt(key,  crypted);
        console.log("数据解密后:", JSON.parse(dec));
        done();
    });
});