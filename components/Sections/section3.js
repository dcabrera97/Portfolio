import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import { Sticky, StickyContainer } from "react-sticky";
import Particles from 'react-particles-js';
import WinnableAppLogo from "../static/images/winnableapp.png"
import GarageSailLogo from "../static/images/garagesailapp.png"
import ArtNealLogo from "../static/images/artnealapp.png"


const particleOptions = {
    particles: {
        number: {
            value: 27,
            density: {
                enable: true,
                value_area: 2500
            }
        },
        size: {
            value: 9
        },
        opacity: {
            value: 0.09,
            random: false,
            anim: {
                enable: false,
                speed: 2,
                opacity_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 2
        }
    }
}




export default class SectionTwo extends Component {
    render() {
        return (
            <div>

                <Section>

                    <Flex justifyContent="center">
                        <Box>
                            <PortHeader>Portfolio</PortHeader>
                        </Box>
                    </Flex>
                    <Flex textAlign="center">
                        <Box width={1 / 3}>
                            <Logos src={WinnableAppLogo} alt="winnable" />
                        </Box>
                        <Box width={1 / 3}>
                            <Logos src={GarageSailLogo} alt="garagesail" />
                        </Box>
                        <Box width={1 / 3}>
                            <Logos src={ArtNealLogo} alt="artneal" />
                        </Box>
                    </Flex>
                    <Flex textAlign="center">
                        <Box width={1 / 3}>
                            <PortNames>Winnable</PortNames>
                            <button>View Live</button> <button>View GitHub</button>
                            <Infop>Winnable is a one platform for everything Overwatch.</Infop>
                            <InfopTwo>Create a team, join a team, and even keep tabs on player statistics.</InfopTwo>
                        </Box>
                        <Box width={1 / 3}>
                            <PortNames>GarageSail</PortNames>
                            <button>View Live</button> <button>View GitHub</button>
                            <Infop>GarageSail is an app used to post and search for local garage sales</Infop>
                            
                        </Box>
                        <Box width={1 / 3}>
                            <PortNames>ArtNeal</PortNames>
                            <button>View Live</button> <button>View GitHub</button>
                            <Infop>ArtNeal was made to showcase paintings from a local artist</Infop>
                            
                        </Box>
                    </Flex>

                </Section>

                <Particles params={particleOptions} />

            </div>
        );
    }
}

const Section = styled.section`
    height: 100vh;
    position: absolute;
    width: 100%;
    z-index: 1;
    
`

const PortHeader = styled.h1`
    font-size: 50px;
    padding-top: 50px;
    padding-bottom: 100px;
    color: white;
    font-weight: 700;
`

const PortNames = styled.h2`
    color: white;
    letter-spacing: 2px;
    font-size: 30px;
`

const Logos = styled.img`
    z-index: 2;
    height: 200px;
    width: auto;
`

const Infop = styled.p`
    padding-top: 40px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
`

const InfopTwo = styled.p`
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
`