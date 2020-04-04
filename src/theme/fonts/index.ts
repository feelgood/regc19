import { createGlobalStyle } from "styled-components";

import Museo700 from "./Museo700.otf";
import Museo500 from "./Museo500.otf";
import Museo300 from "./Museo300.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Museo';
        src: local('Museo700'), local('Museo700'),
        url(${Museo700}) format('otf');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: local('Museo500'), local('Museo500'),
        url(${Museo500}) format('otf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo';
        src: local('Museo300'), local('Museo300'),
        url(${Museo300}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;
