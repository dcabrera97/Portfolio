import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import { Sticky, StickyContainer } from "react-sticky";


export default class Navbar extends Component {
    render() {
        return (
            <StickyContainer>
                <Nav>
                    <Flex justifyContent="center">
                        <Box>
                            <NavList>

                                <Link href="#">
                                    <NavLink>Skills</NavLink>
                                </Link>



                                <Link href="#">
                                    <NavLink>Portfolio</NavLink>
                                </Link>



                                <Link href="#">
                                    <NavLink>Contact</NavLink>
                                </Link>
                                

                            </NavList>
                        </Box>
                    </Flex>
                </Nav>
            </StickyContainer>
        );
    }
}

const Nav = styled.nav`
    width: 100%;
    height: 64px;
	z-index: 9;
    position: relative;
    padding-top: 2px;
`;

const NavList = styled.ul`
	
	list-style-type: none;
	padding: 0px !important;
`;


const NavLink = styled.a`
	margin: 0px 20px;
	color: white;
	cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.5px;
`;
