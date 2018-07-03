import React, {Component}  from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

// const fn = function () {
    /* do your action */
    // console.log("hello")
// }
// var imgStyle = {
    // width:'1px',
    // boxShadow: "10px 3px 1px #ffffff",
    // boxShadow:0
// };
class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0
        };
    }


    render() {
        return (
            <div>
                <StyleRoot>
                <Coverflow
                    // width='100%'
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={true}
                    active={0}
                    clickable={false}
                    infiniteScroll={true}
                    media={{
                        '@media (max-width: 900px)': {
                            height: '500px',
                            background:'white',
                            boxShadow:0
                        },
                        '@media (min-width: 900px)': {
                            height: '500px',
                            background:'white',
                            boxShadow:0
                        }
                    }}
                >

                    <img src='http://mafcenter.ru/wp-content/uploads/2018/04/f9fec4e2-e16a-4432-bb06-39bfaf9e0fae.jpg'
                         style={{
                             'box-shadow':'0'
                         }} alt='Album two' data-action="http://passer.cc"/>
                    <img src='http://mafcenter.ru/wp-content/uploads/2018/04/95fd55e1-4058-4b7d-b506-db34b5a24a5a.jpg' alt='Album three' data-action="https://doce.cc/"/>
                    <img src='http://mafcenter.ru/wp-content/uploads/2018/04/f9fec4e2-e16a-4432-bb06-39bfaf9e0fae.jpg' alt='Album two' data-action="http://passer.cc"/>
                    <img src='http://mafcenter.ru/wp-content/uploads/2018/04/95fd55e1-4058-4b7d-b506-db34b5a24a5a.jpg' alt='Album three' data-action="https://doce.cc/"/>
                    <img src='http://mafcenter.ru/wp-content/uploads/2018/04/f9fec4e2-e16a-4432-bb06-39bfaf9e0fae.jpg' alt='Album two' data-action="http://passer.cc"/>
                    <img src='http://mafcenter.ru/wp-content/uploads/2018/04/95fd55e1-4058-4b7d-b506-db34b5a24a5a.jpg' alt='Album three' data-action="https://doce.cc/"/>
                    {/*<img src='http://mafcenter.ru/wp-content/uploads/2018/06/IMG_4926-640x275.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>*/}
                    {/*<img src='http://mafcenter.ru/wp-content/uploads/2018/04/ef8f5261-1fa7-4d36-9b94-e70df855f5fe-650x280.jpg' alt='Album five' data-action="http://www.bbc.co.uk"/>*/}
                    {/*<img src='http://mafcenter.ru/wp-content/uploads/2018/04/fdc1617d-2240-41e3-8102-485a64ddc2bd-650x280.jpg' alt='Album six' data-action="https://medium.com"/>*/}
                    {/*<img src='http://mafcenter.ru/wp-content/uploads/2018/04/bbb0477b-a92f-4d21-ba99-96a07239188d-650x280.jpg' alt='Album seven' data-action="http://www.google.com"/>*/}
                    {/*<img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>*/}
                    {/*<img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>*/}
                    {/*<img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>*/}
                    {/*<img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>*/}
                </Coverflow>
                </StyleRoot>
            </div>
        );
    }

    _handleClick() {
        var num = Math.floor((Math.random() * 10) + 1);
        this.setState({
            active: num
        });
    }
};

export default Container;
