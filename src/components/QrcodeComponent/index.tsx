import React from 'react'
import { Container, Content } from './styles'

import imgQrcode from '../../assets/image-qr-code.png'

export function Qrcode() {
    return (
        <>
            <Container>
                <Content>
                    <img src={imgQrcode} alt="QrcodeImg" />
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </Content>
                <p>Frontend Mentor - QR code component solution</p>
                <a href="https://github.com/frantecbh/qr-code-component-react" target="_blank" >GitHub project</a>
            </Container>
        </>
    )
}
