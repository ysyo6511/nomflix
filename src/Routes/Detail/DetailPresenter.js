import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';

const Container = styled.div`
    height:calc(100vh - 50px);
    width:100%;
    position:absolute;
    padding:50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props => props.bgImage});
    background-position:center center;
    background-size:cover;
    filter: blur(3px);
    opacity:0.5;
    z-index:0;
`;

const Content = styled.div`
display:flex;
width:100%;
position:relative;
z-index:1;
height:100%;
`;

const Cover = styled.div`
    width:30%;
    background-image: url(${props => props.bgImage});
    background-position:center center;
    background-size:cover;
    height:100%;
    border-radius:5px;
`;

const Data = styled.div`
    width:70%;
    margin-left:10px;
`;

const Title = styled.h3`
    font-size:32px;
    margin-bottom:10px;
`;

const ItemContainer = styled.div`
    margin:20px 0px;
`;

const Item = styled.span`
    margin: 0 10px;
`;

const Divider = styled.span`
    font-size:18px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height:2;
    width:50%;
    color:rgba(255);
`;

const DetailPresenter = (
    { result,
        error,
        loading }
) => (

        loading ? 
        <>
        <Helmet>
            <title>
                Loading | Noxfilx
            </title>
        </Helmet>
        <Loader /> 
        </>
        :
            <Container>
                 <Helmet>
            <title>
            {result.original_title ? result.original_title : result.original_name} | Noxfilx
            </title>
        </Helmet>
                <Backdrop
                    bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                />
                <Content>
                    <Cover
                        bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../asset/noPosterSmall.jpeg")}
                    />
                    <Data>
                        <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                        <ItemContainer>
                            <Item>{result.first_air_date ? result.first_air_date.substring(0, 4) : result.release_date.substring(0, 4)}</Item>
                            <Divider>·</Divider>
                            <Item>{result.runtime} min</Item>
                            <Divider>·</Divider>
                            <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}</Item>

                        </ItemContainer>
                        <Overview>
                            {result.overview}
                        </Overview>
                    </Data>
                </Content>
            </Container>
    )


DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.string
}

export default DetailPresenter;



