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
        arr:[{message:"ms1"},{message:"msg2"}],
        objectArray:[      
            {id:5,unique:"unique_5"},
            {id:4,unique:"unique_4"},
            {id:3,unique:"unique_3"},
            {id:2,unique:"unique_2"},
            {id:1,unique:"unique_1"},
        ]
    },
    clickbtn:function(e){
        console.log(e)
        this.setData({
            name:"huagu",
            age:4
        })
    },
    switch:function(e){
        const length = this.data.objectArray.length;
        for(let i=0;i<length;++i){
            const x = Math.floor(Math.random()*length);
            const y = Math.floor(Math.random()*length);
            console.log(x);
            console.log(y);
            const temp = this.data.objectArray[x];
            this.data.objectArray[x] = this.data.objectArray[y];
            this.data.objectArray[y] = temp;
        }
        this.setData({
            objectArray:this.data.objectArray
        })
    },
    addItem:function(e){
        let length = this.data.objectArray.length;
        this.data.objectArray = [{id:length+1,unique:"unique_"+length+1}].concat(this.data.objectArray);
        this.setData({
            objectArray:this.data.objectArray
        })
    },
    addNumItem:function(e){
        let length = this.data.array.length;
        this.data.array = [length+1].concat(this.data.array);
        this.setData({
            array:this.data.array
        })
    },
    bindView:function(event){
        console.log(event);
        event.target.dataset.alphaBata === 1;//- 会转为驼峰写法
        event.target.dataset.alphabate === 2;//大写会转为小写
    }
})