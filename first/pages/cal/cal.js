Page({
    data:{
        name:"wmh",
        age:12,
        id:1,
        condit:true,
        flag:false,
        operA:2,
        operB:3,
        operC:3,
        size:6,
        obj:{text:"数据路径运算:"},
        fa:"对象",
        ba:"组合",


        array:[1,2,3,4,5],
        ch:"jifen",
        userInfoA:{firstname:"良",lastname:"生"},
    },
    clickbtn:function(){
        this.setData({
            name:"huagu",
            age:4
        })
    }
})