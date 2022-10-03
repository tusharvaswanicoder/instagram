import Cropper from "cropperjs";
import React, { createRef, useEffect, useLayoutEffect, useRef } from "react";
import { Container, Image, Images } from "./styles";
import "cropperjs/dist/cropper.css";

const CropImage = ({ files }) => {
    const croppers = useRef([]);
    const images = useRef([]);
    useLayoutEffect(() => {
        Object.values(files).forEach((file, index) => {
            croppers.current.push(
                new Cropper(images.current[index].current, {
                    viewMode: 1,
                    initialAspectRatio: 1 / 1,
                    crop(event) {
                        console.log(event);
                    },
                })
            );
        });
    }, [files]);
    return (
        <Container>
            <Images>
                {Object.values(files).map((file, index) => {
                    images.current[index] =
                        images.current[index] || createRef();
                    return (
                        <Image>
                            <img
                                ref={images.current[index]}
                                key={index}
                                alt={file.name}
                                src={URL.createObjectURL(file)}
                            />
                        </Image>
                    );
                })}
            </Images>
        </Container>
    );
};

export default CropImage;
