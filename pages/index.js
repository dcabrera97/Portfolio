import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layout/Layout";
import SectionOne from "../components/Sections/section1"
import SectionTwo from "../components/Sections/section2"

export default class index extends Component {
    render() {
        return (
            <Layout>
                <SectionOne/>
                <SectionTwo/>
            </Layout>
        )
    }
}

