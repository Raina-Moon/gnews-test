import React from 'react'
import styled, { keyframes } from 'styled-components'

const SkeletonNewsCard = () => {
  return (
    <Wrapper>
        <Title />
        <Image />
        <Description />
    </Wrapper>
  )
}

export default SkeletonNewsCard

const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`

const Shimmer = styled.div`
    animation-duration: 1.5s;
    transition: shimmer 3s linear infinite;
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    `

    const Wrapper = styled.div`
        list-style: none;
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        height: 350px;
        box-sizing: border-box;
        overflow: hidden;
        background: #f6f7f8;
        background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        background-size: 800px 104px;   
        position: relative;
        animation: ${shimmer} 1.5s linear infinite;
    `

    const Title = styled(Shimmer)`
        width: 80%;
        height: 20px;
        border-radius: 4px;
    `
    const Image = styled(Shimmer)`
        width: 100%;
        height: 150px;
        border-radius: 8px;
    `
    const Description = styled(Shimmer)`
        width: 90%;
        height: 60px;
        border-radius: 4px;
    `