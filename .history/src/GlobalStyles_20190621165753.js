import { createGlobalStyle } from "styled-components";
// import food from "./images/food.jpg"

// const style = {
//     backgroundImage: `url(${food})`
//   }
export default createGlobalStyle`
html {
    height: 100%
}

body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
    height: 100%;
    background-image: url(./images/food.jpg);
}

.edit {
    height: 30px;
}

.avatar {
    margin-bottom: 20px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 2px solid #cccccc;
}

.accordion {
    margin: 5%;
    margin-top: 10px;
}

.navbar {
    height: 100px;
}
`;
