/**
 * ExpressPlus
 * filtertest.js Created by usher.yue.
 * User: usher.yue
 * Date: 2022/2/24
 * Time: 18:25
 * 乘风破浪－注解扩展
 */

//可以通过router直接增加过滤器
let router=newRouter();



//@Document(2020-11-11,过滤拦截路由,prm1 整数,prm2 字符串)
//@Filter(Test,Analysist)
router.get('/filter1',async(req,res,next)=>{

    res.send('test');
});


//@Document(2020-11-11,过滤拦截路由,prm1 整数,prm2 字符串)
router.get('/filter2',async(req,res,next)=>{

    res.send('test');
});



//@Document(2020-11-11,过滤拦截路由,prm1 整数,prm2 字符串)
router.get('/filter3',async(req,res,next)=>{

    res.send('test');
});




module.exports=router;