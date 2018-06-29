import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu'
import './Burger.css';
import Button from '@material-ui/core/Button';

class MenuWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

        if (sideChanged) {
            this.setState({hidden: true});
            //
            setTimeout(() => {
                this.show();
            }, this.props.wait);
        }
    }

    show() {
        this.setState({hidden: false});
    }

    render() {
        let style;

        if (this.state.hidden) {
            style = {display: 'none'};
        }

        return (
            <div style={style} className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
}

class BMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'slide',
            side: 'left'
        };
    }

    getMenu() {
        const Menu = BurgerMenu[this.state.currentMenu];
        let jsx = (
            <MenuWrap wait={20}>
                <Menu>
                    <Button id="home" className="menu-item" href="/">Главная</Button>
                    <Button id="benches" className="menu-item" href="/">Скамейки</Button>
                    <Button id="container_platforms" className="menu-item" href="/about">Контейнерные площадки</Button>
                    <Button id="original_forms" className="menu-item" href="/contact">Оригинальные формы</Button>
                    <Button id="tribunes" className="menu-item" href="/contact">Трибуны</Button>
                    <Button id="fences" className="menu-item" href="/contact">Ограждения</Button>
                    <Button id="contact" className="menu-item" href="/contact">Контакты</Button>
                </Menu>
            </MenuWrap>
        );

        return jsx;
    }

    render() {

        return (
            <div id="outer-container" style={{height: '100%'}}>
                {this.getMenu()}
            </div>
        );
    }
}

export default BMenu;