import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import DragAndDropPhotos from "../../Components/DragAndDropPhotos/DragAndDropPhotos";
import { CloseButton, Container, Content, Heading, Wrapper } from "./styles";

const CreateNewPost = ({ close }) => {
    const [files, setFiles] = useState([]);
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
                    setFiles={setFiles}
                />
            ),
        },
        {
            title: "Crop",
            content: "Crop",
        },
    ];
    return (
        <Wrapper>
            <CloseButton onClick={close}>
                <MdOutlineClose />
            </CloseButton>
            <Container>
                <Heading>Create new post</Heading>
                <Content>{steps[activeStep].content}</Content>
            </Container>
        </Wrapper>
    );
};

export default CreateNewPost;
