import styled from "styled-components";

// export const ToastMessage = styled.div`
//   width: 300px;
//   min-height: 34px;
//   padding: 10px 30px 10px 10px;
//   box-sizing: border-box;
//   background-color: ${props => props.type === 'danger' ? '#C70100' : '#5cb85c'};
//   color: #ffffff;
//   font-size: 14px;
//   font-family: 'Roboto', sans-serif;
//   font-weight: bold;
//   position: fixed;
//   top: 50px;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 99999;
//   border-radius: 3px;
//   box-shadow: 3px 3px 8px ${props => props.type === 'danger' ? '#C70100' : '#5cb85c'};

//   svg {
//     position: absolute;
//     top: 10px;
//     right: 5px;
//     color: #ffffff;
//     cursor: pointer;
//   }
// `

export const LayoutFlexBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f6f7f9;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;
export const LayoutSideBarBox = styled.div`
    width: calc((100% / 12) * 3);
    height: 100%;

    @media (max-width: 1020px) {
        width: calc((100% / 12) * 4);
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const LayoutContentBox = styled.div`
    width: calc((100% / 12) * 9);
    height: 100%;
    padding: 30px 40px;
    box-sizing: border-box;

    @media (max-width: 1020px) {
        width: calc((100% / 12) * 8);
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;
