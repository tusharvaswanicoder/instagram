import Cropper from "cropperjs";
import React, { createRef, useEffect, useRef, useState } from "react";
import {
    AspectRatio,
    AspectRatioMenu,
    AspectRatioMenuItem,
    AspectRatioZoom,
    Backward,
    Container,
    Forward,
    Gallery,
    Image,
    Images,
    Input,
    Zoom,
    ZoomMenu,
} from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiExpandAlt } from "react-icons/bi";
import { AiOutlineZoomIn } from "react-icons/ai";
import { BsImage, BsImages, BsSquare } from "react-icons/bs";
import { TbRectangle, TbRectangleVertical } from "react-icons/tb";
import "cropperjs/dist/cropper.css";
import debounce from "../../Helpers/debounce";

const aspectRatios = [
    {
        name: "Original",
        icon: <BsImage />,
        value: null,
    },
    {
        name: "1:1",
        icon: <BsSquare />,
        value: 1,
    },
    {
        name: "4:5",
        icon: <TbRectangleVertical />,
        value: 4 / 5,
    },
    {
        name: "16:9",
        icon: <TbRectangle />,
        value: 16 / 9,
    },
];

const CropImage = ({ slides }) => {
    const croppers = useRef([]);
    const images = useRef([]);
    const container = useRef();
    const imagesContainer = useRef();
    const [activeImage, setActiveImage] = useState(0);
    const [containerWidth, setContainerWidth] = useState();
    const [selectedAspectRatio, setSelectedAspectRatio] = useState(0);
    const [aspectRatioMenuVisible, setAspectRatioMenuVisible] = useState(false);
    const [zoomLevelMenuVisible, setZoomLevelMenuVisible] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    useEffect(() => {
        const onResize = () => {
            setContainerWidth(container.current.offsetWidth);
        };
        onResize();
        window.addEventListener("resize", debounce(onResize, 500));
        return () =>
            window.removeEventListener("resize", debounce(onResize, 500));
    }, []);
    useEffect(() => {
        croppers.current.forEach((cropper) =>
            cropper.setAspectRatio(aspectRatios[selectedAspectRatio].value)
        );
    }, [selectedAspectRatio]);
    useEffect(() => {
        croppers.current.forEach((cropper) => cropper.zoomTo(zoomLevel));
    }, [zoomLevel]);
    useEffect(() => {
        Object.values(slides).forEach((slide, index) => {
            croppers.current.push(
                new Cropper(images.current[index].current, {
                    viewMode: 1,
                    zoomOnWheel: false,
                    data: {
                        height: "100%",
                    },
                })
            );
        });
    }, [slides]);
    return (
        <Container ref={container}>
            {activeImage !== 0 && (
                <Backward
                    onClick={() =>
                        setActiveImage((activeImage) => activeImage - 1)
                    }
                >
                    <FiChevronLeft />
                </Backward>
            )}
            {activeImage !== slides.length - 1 && (
                <Forward
                    onClick={() =>
                        setActiveImage((activeImage) => activeImage + 1)
                    }
                >
                    <FiChevronRight />
                </Forward>
            )}
            {aspectRatioMenuVisible && (
                <AspectRatioMenu>
                    {aspectRatios.map(({ name, icon }, index) => (
                        <AspectRatioMenuItem
                            isActive={selectedAspectRatio === index}
                            onClick={(e) => setSelectedAspectRatio(index)}
                            key={index}
                        >
                            {name}
                            {icon}
                        </AspectRatioMenuItem>
                    ))}
                </AspectRatioMenu>
            )}
            {zoomLevelMenuVisible && (
                <ZoomMenu>
                    <Input
                        type="range"
                        min={1}
                        max={5}
                        value={zoomLevel}
                        onChange={(e) => setZoomLevel(e.target.value)}
                    />
                </ZoomMenu>
            )}
            <AspectRatioZoom>
                <AspectRatio
                    onClick={() => {
                        setAspectRatioMenuVisible((prev) => !prev);
                        setZoomLevelMenuVisible(false);
                        imagesContainer.current.addEventListener(
                            "click",
                            (e) => {
                                setAspectRatioMenuVisible(false);
                                imagesContainer.current.removeEventListener(
                                    "click",
                                    () => {}
                                );
                            }
                        );
                    }}
                    isActive={aspectRatioMenuVisible}
                >
                    <BiExpandAlt />
                </AspectRatio>
                <Zoom
                    onClick={() => {
                        setZoomLevelMenuVisible((prev) => !prev);
                        setAspectRatioMenuVisible(false);
                        imagesContainer.current.addEventListener(
                            "click",
                            (e) => {
                                setZoomLevelMenuVisible(false);
                                imagesContainer.current.removeEventListener(
                                    "click",
                                    () => {}
                                );
                            }
                        );
                    }}
                    isActive={zoomLevelMenuVisible}
                >
                    <AiOutlineZoomIn />
                </Zoom>
            </AspectRatioZoom>
            <Gallery>
                <BsImages />
            </Gallery>
            <Images
                style={{
                    transform: `translateX(-${activeImage * containerWidth}px)`,
                }}
                ref={imagesContainer}
            >
                {Object.values(slides).map((slide, index) => {
                    images.current[index] =
                        images.current[index] || createRef();
                    return (
                        <Image key={index}>
                            <img
                                ref={images.current[index]}
                                alt={slide.name}
                                src={URL.createObjectURL(slide)}
                            />
                        </Image>
                    );
                })}
            </Images>
        </Container>
    );
};

export default CropImage;
