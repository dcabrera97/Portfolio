import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import { Sticky, StickyContainer } from "react-sticky";
import Particles from 'react-particles-js';


const particleOptions = {
    particles: {
        number: {
            value: 13,
            density: {
                enable: true,
                value_area: 2500
            }
        },
        size: {
            value: 20
        },
        opacity: {
            value: 0.09,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 250,
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 1
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
                            <SkillHeader>Skills</SkillHeader>
                        </Box>
                    </Flex>
                    <Flex textAlign="center">
                        <Box px={2} py={2} width={1 / 4}>
                            <div>icon</div>
                        </Box>
                        <Box px={2} py={2} width={1 / 4}>
                            <div>icon</div>
                        </Box>
                        <Box px={2} py={2} width={1 / 4}>
                            <div>icon</div>
                        </Box>
                        <Box px={2} py={2} width={1 / 4}>
                            <div>icon</div>
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
    z-index: -1;
    background-color: #2C3A49;
`

const SkillHeader = styled.h1`
    font-size: 50px;
    padding-top: 50px;
    padding-bottom: 100px;
    color: white;
    font-weight: 700;
`