import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { CloseButton, Container, Content, Heading, Wrapper } from "./styles";

const Modal = ({ style, heading, children, closeModal }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "auto");
    }, []);
    const close = (e) => {
        e.stopPropagation();
        closeModal(e);
    };
    return (
        <Wrapper onClick={close}>
            <Container style={style}>
                {heading && (
                    <Heading>
                        {heading}
                        <CloseButton onClick={close}>
                            <IoIosClose fontSize={40} />
                        </CloseButton>
                    </Heading>
                )}
                <Content>{children}</Content>
            </Container>
        </Wrapper>
    );
};

export default Modal;
