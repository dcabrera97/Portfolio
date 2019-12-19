import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import { Sticky, StickyContainer } from "react-sticky";



export default class SectionThree extends Component {
    render() {
        return (
            <Section>
                <Flex justifyContent="center">
                    <Box>

                        <SkillHeader><Span>Ski</Span>lls</SkillHeader>

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
        );
    }
}

const Section = styled.section`
    height: 60vh;
    width: 100%;
    background-color: #2C3A49;
`


const SkillHeader = styled.h1`
    font-size: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    color: white;
    font-weight: 700;
`

const Span = styled.span`
    color: #d34e54;
`


