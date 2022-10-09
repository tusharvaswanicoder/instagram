import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import DragAndDropPhotos from "../../Components/DragAndDropPhotos/DragAndDropPhotos";
import {
    Back,
    CloseButton,
    Container,
    Content,
    Header,
    Heading,
    Next,
    Wrapper,
} from "./styles";
import CropImage from "../../Components/CropImage/CropImage";

const CreateNewPost = ({ close }) => {
    const [images, setImages] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    useEffect(() => {
        document.title = "Create new post • Instagram";
        document.body.style.overflow = "hidden";
        return () => {
            document.title = "Instagram";
            document.body.style.overflow = "auto";
        };
    }, []);
    const steps = [
        {
            title: "Create new post",
            content: (
                <DragAndDropPhotos
                    next={() => setActiveStep(1)}
                    setImages={setImages}
                />
            ),
        },
        {
            title: "Crop",
            content: <CropImage slides={images} />,
        },
    ];
    return (
        <Wrapper>
            <CloseButton onClick={close}>
                <MdOutlineClose />
            </CloseButton>
            <Container>
                <Header>
                    {activeStep ? (
                        <Back onClick={() => setActiveStep(activeStep - 1)}>
                            <BsArrowDown />
                        </Back>
                    ) : null}
                    <Heading>{steps[activeStep].title}</Heading>
                    {activeStep ? (
                        <Next onClick={() => setActiveStep(activeStep + 1)}>
                            Next
                        </Next>
                    ) : null}
                </Header>
                <Content>{steps[activeStep].content}</Content>
            </Container>
        </Wrapper>
    );
};

export default CreateNewPost;
