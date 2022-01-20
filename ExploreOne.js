import React, { useState,useEffect, Component } from 'react';
import axios from 'axios';
import { useQuery, gql } from '@apollo/client'
import {graphql} from 'react-apollo'


const initData = {
    pre_heading: "Exclusive Assets",
    heading: "Explore",
    btn_1: "View All",
    btn_2: "Load More"
}

// const data = [
//     {
//         id: "1",
//         img: "/img/auction_1.jpg",
//         title: "Walking On Air",
//         owner: "Richard",
//         price: "1.5 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "2",
//         img: "/img/auction_2.jpg",
//         title: "Domain Names",
//         owner: "John Deo",
//         price: "2.7 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "3",
//         img: "/img/auction_3.jpg",
//         title: "Trading Cards",
//         owner: "Arham",
//         price: "2.3 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "4",
//         img: "/img/auction_4.jpg",
//         title: "Industrial Revolution",
//         owner: "Yasmin",
//         price: "1.8 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "5",
//         img: "/img/auction_5.jpg",
//         title: "Utility",
//         owner: "Junaid",
//         price: "1.7 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "6",
//         img: "/img/auction_6.jpg",
//         title: "Sports",
//         owner: "ArtNox",
//         price: "1.9 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "7",
//         img: "/img/auction_7.jpg",
//         title: "Cartoon Heroes",
//         owner: "Junaid",
//         price: "3.2 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "8",
//         img: "/img/auction_8.jpg",
//         title: "Gaming Chair",
//         owner: "Johnson",
//         price: "0.69 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "9",
//         img: "/img/auction_9.jpg",
//         title: "Photography",
//         owner: "Sara",
//         price: "2.3 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "10",
//         img: "/img/auction_10.jpg",
//         title: "Zed Run",
//         owner: "SpaceMan",
//         price: "3.7 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "11",
//         img: "/img/auction_11.jpg",
//         title: "Rare Tyres",
//         owner: "Monas",
//         price: "2.2 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     },
//     {
//         id: "12",
//         img: "/img/auction_12.jpg",
//         title: "World of Women",
//         owner: "Victor",
//         price: "4.3 ETH",
//         count: "1 of 1",
//         btnText: "Place a Bid"
//     }
// ]

// const getAllNft = gql`
// {
//    nftentities {
//      name
//      description
//      id
//      uri
//      owner
//      creator {
//        id
//      }
//      sale {
//        id
//        price
//      }
//      auction {
//        id
//      }
//    }
//  }
// `



class ExploreOne extends Component {
    _isMounted = 1;

    state = {
        initData: {},
        data: [],
        error: null,
        isLoaded: false,
      

    }
  getAllNft = gql`
  {
     nftentities {
       name
      description
      id
      uri
       owner
       creator {
         id
       }
      sale {
       id
        price
      }
      auction {
         id
     }
    }
  }
`
 
    getAllNft = async(query,variable)=>{
        try{
            const response =  await axios.post('https://api.thegraph.com/subgraphs/name/swapnil1023/grass3',{
                query,
                variable
            })
            console.log(response.data)
            if(this._isMounted===1){
                this.setState(() => ({
                    isLoaded: true,
                    data: response.data
                    
                  }));
                  

            }
          console.log(this.state.data)
          
        }catch(error){
            this.setState(() => ({ error }))
            console.log(error)

        };
       
    }
     componentDidMount(){
        this.setState({
            initData: initData,
         
           
    })
   
      
       
       
      

        this._isMounted = 1;

        const query = `
        {
            nftentities {
              name
              description
              id
              uri
              owner
              creator {
                id
              }
              sale {
                id
                price
              }
              auction {
                id
              }
            }
          }
        `
        const variables = {};
       

        this.getAllNft(query, variables)
      
    }
    componentWillUnmount() {
        this._isMounted = 0;
      }
    
    render() {
        

        return (
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/explore-3">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data && !!this.state.data.length && this.state.data.map((data, idx) => {
                            return (
                                <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={data.img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{data.name}</h5>
                                                </a>
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/author">
                                                        <h6 className="ml-2 mb-0">{data.owner}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{data.price}</span>
                                                    <span>{data.count}</span>
                                                </div>
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/login"><i className="icon-handbag mr-2" />{data.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">{this.state.initData.btn_2}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExploreOne;