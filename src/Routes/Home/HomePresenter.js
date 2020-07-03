import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from 'react-helmet';
import Section from '../../Components/Section';
import Loader from "../../Components/Loader";
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';


const Container = styled.div`
padding: 20px;

`;


const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
    <>
        <Helmet>
            <title>
                Movies | Nomfilx
                </title>
        </Helmet>
        {
            loading ? <Loader /> : (

                <Container>
                    <Helmet>
                        <title>
                            Movies | Nomfilx
                </title>
                    </Helmet>
                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section title="Now Playing">{nowPlaying.map(movie => <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} rating={movie.vote_average} isMovie={true} year={movie.release_date.substring(0, 4)} />)}</Section >
                    )}
                    {upComing && upComing.length > 0 && (
                        <Section title="Upcoming Movies">{upComing.map(movie => <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} rating={movie.vote_average} isMovie={true} year={movie.release_date.substring(0, 4)} />)}</Section >
                    )}
                    {popular && popular.length > 0 && (
                        <Section title="Popular Movies">{popular.map(movie => <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} rating={movie.vote_average} isMovie={true} year={movie.release_date.substring(0, 4)} />)}</Section >
                    )}
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>

            )
        }
    </>

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;



