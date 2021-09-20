import React,{ useState } from "react";
import "./App.css";
import pic1 from "./img/goods1.png";
import pic2 from "./img/goods2.jpg";
import pic3 from "./img/goods3.png";

export const App=()=>{
    const [buyingGoods,setBuyingGoods]=useState([]);
    const [member,setMember]=useState([]);

    const goodsData=[
        {
            name:"Tシャツ",
            price:3000
        },{
            name:"マフラータオル",
            price:2000
        },{
            name:"キャップ",
            price:2000
        },{
            name:"マスク",
            price:800
        },{
            name:"クリアトートバッグ",
            price:3400
        },{
            name:"スティックライト",
            price:3100
        },{
            name:"個別マフラータオル",
            price:2350
        },{
            name:"個別フード付きマフラータオル",
            price:2900
        },{
            name:"ランダム生写真",
            price:1100
        }
    ];

    const onClickBuy=(index)=>{
        const newBuyingGoods=[...buyingGoods,goodsData[index]];
        setBuyingGoods(newBuyingGoods);

        const newMember=[...member,""];
        setMember(newMember);    
    }

    const onClickBack=(index)=>{
        alert("買えや！");

        const newBuyingGoods=[...buyingGoods];
        newBuyingGoods.splice(index,1);
        setBuyingGoods(newBuyingGoods);

        const newMember=[...member];
        newMember.splice(index,1);
        setMember(newMember);
    }

    const sumFunc=(arr)=>{
        let sum=0;
        arr.map((data)=>{
            sum+=data.price;
        })
        return sum;
    }
    const sumPrice=sumFunc(buyingGoods);

    return(
        <>
            <header>
                乃木坂46 真夏の全国ツアー2021 グッズ購入リスト
            </header>

            <div className="goodsList">
                <p className="title">グッズ一覧</p>
                <ul>
                    {goodsData.map((data,index)=>{
                        return(
                            <li key={index}>
                                <div className="nameData">{data.name}</div>
                                <div className="priceData">￥{data.price}</div>
                                <button onClick={()=>onClickBuy(index)}>購入</button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="buyList">
                <p className="title">購入リスト</p>
                <ul>
                    {buyingGoods.map((data,index)=>{
                        return(
                            <li key={index}>
                                <div className="nameData">{data.name}</div>
                                <div className="priceData">￥{data.price}</div>
                                <button onClick={()=>onClickBack(index)}>戻す</button>
                                <input 
                                    value={member[index]} 
                                    onChange={(event)=>{
                                        let newMember=[...member];
                                        newMember[index]=event.target.value;
                                     setMember(newMember);
                                    }} 
                                />
                            </li>
                        );
                    })}
                </ul>
                <p className="sum">合計金額 ￥{sumPrice}</p>
            </div>

            <div className="pictureList">
                <img src={pic1} />
                <img src={pic2} />
                <img src={pic3} />
            </div>
        </>
    );
}