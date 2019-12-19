import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import { Sticky, StickyContainer } from "react-sticky";


export default class SectionOne extends Component {
    render() {
        return (
            <Section>
                <HeadDiv>
                    <HeaderOff>Davis Cabrera</HeaderOff>
                    <HeaderMain>Davis Cabrera</HeaderMain>
                    <HeaderOff>Davis Cabrera</HeaderOff>
                    <Flex>
                        <Box px={2} py={2} width={1/4}>
                            <div p={1}>LinkedIn</div>
                        </Box>
                        <Box px={2} py={2} width={1/4}>
                            <div p={1}>GitHub</div>
                        </Box>
                        <Box px={2} py={2} width={1/4}>
                            <div p={1}>Email</div>
                        </Box>
                        <Box px={2} py={2} width={1/4}>
                            <div p={1}>Resume</div>
                        </Box>
                    </Flex>
                </HeadDiv>    
            </Section>
        );
    }
}


const Section = styled.section`
    height: 95vh;
    width: auto;
    display: flex;
    margin: auto;
`

const HeadDiv = styled.div`
    margin: auto;
    text-align: center;
`

const HeaderOff = styled.h1`
    font-size: 83px;
    color: transparent;
    font-weight: 700;
    letter-spacing: 2px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #d34e54;
    
`

const HeaderMain = styled.h1`
    font-size: 83px;
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
`