import React, {Component} from "react";
import Header from "./components/Header";
import logo from "./assets/images/Group 396.png";
import Section from "./components/Section";
import List from "./components/List";
import mainSectionImg from "./assets/images/9 1.png"
import btnImg from "./assets/images/Polygon 1.png"
import Title from "./components/Title";
import Text from "./components/Text";
import Button from "./components/button";
import listImg1 from "./assets/images/Group 400.png";
import listImg2 from "./assets/images/Group 401.png";
import listImg3 from "./assets/images/Group 402.png";
import listImg4 from "./assets/images/Group 403.png";
import sectionTwoImg from "./assets/images/about 4.png";
import cardImg1 from "./assets/images/welcome-3 1 (1).png";
import cardImg2 from "./assets/images/welcome-3 1 (2).png";
import cardImg3 from "./assets/images/welcome-3 1 (3).png";
import cardImg4 from "./assets/images/welcome-3 1.png";
import cardImg5 from "./assets/images/welcome-3 1 (4).png";
import Card from "./components/Card";
import "./assets/CSS/style.css";


class App extends Component {
    state = {
        logo,
        menu: [
            {
                id: 1,
                name: "Home",
                url: "/home"
            },
            {
                id: 2,
                name: "About",
                url: "/about"
            },
            {
                id: 3,
                name: "Services",
                url: "/services"
            },
            {
                id: 4,
                name: "Blog",
                url: "/home"
            },
            {
                id: 5,
                name: "Contact",
                url: "/contact"
            },
        ],
        listImg: [
            {id: 1, img: listImg1,},
            {id: 2, img: listImg2},
            {id: 3, img: listImg3},
            {id: 4, img: listImg4},
        ],
        cardList: [
            {
                id: 1,
                title: "Naxly as the Winners in Global Agency Awards",
                text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
                img: cardImg1
            },
            {
                id: 2,
                title: "Expert Prespective Agency Awards",
                text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
                img: cardImg2
            },
            {
                id: 3,
                title: "Business Prespective Global Agency Awards",
                text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
                img: cardImg3
            },
            {
                id: 4,
                title: "Value for Results in Global Agency Awards",
                text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
                img: cardImg4
            },
            {
                id: 5,
                title: "Global Experience in Agency Awards",
                text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
                img: cardImg5
            },
        ],
    }

    /*changeState = () => {
        this.setState({logo:"new"});
    }*/
    render() {
        const {menu, logo, listImg, cardList} = this.state
        return (
            <div className="App">
                <Header menu={menu} logo={logo}/>
                <Section className="section_main" rowClass="align-items-center">
                    <div className="col-12 col-md-7">
                        <h6 className="text-uppercase text-primary mb-3">Next generation platform</h6>
                        <Title className="mb-4">Artificial intelligence &amp; Cyber security</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, eos temporibus.
                            Aspernatur assumenda molestiae molestias optio pariatur, provident quisquam
                            reiciendis!</Text>
                        <div className="d-flex mt-5">
                            <Button>Get Started</Button>
                            <Button className="ml-3 d-flex align-items-center"><img
                                src={btnImg} alt=""/><span>Watch Video</span></Button>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 d-flex align-items-center">
                        <img className="img-fluid mt-md-0 mt-5" src={mainSectionImg} alt=""/>
                    </div>
                    <div className="row mt-5">
                        <List items={listImg}>
                            {({id, img}) => <div key={id} className="col-6 col-md-3 mt-md-0 mt-5">
                                <img className="img-fluid text-center" src={img} alt=""/>
                            </div>}
                        </List>
                    </div>
                </Section>
                <Section className="section_ai" rowClass="align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={sectionTwoImg} alt="img" className="img-fluid mb-md-0 mb-5"/>
                    </div>
                    <div className="col-12 col-md-6 pl-5">
                        <h1 className="font-weight-bold">Apply AI, Deep Learning and Data Sciece to solve</h1>
                        <p className="mt-4 mb-5 text-secondary">Lorem ipsum is placeholder text commonly used in the
                            graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <a href="#" className="btn btn-primary general_btn">Learn More</a>
                    </div>
                </Section>
                <Section className="section_card" containerClass="container-fluid">
                    <List items={cardList}>
                        {({id, ...otherParams}) => <Card key={id} {...otherParams} />}
                    </List>
                </Section>
            </div>
        );
    }
}

export default App;