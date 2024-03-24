"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../public/img/slider_img1.jpg";
import img2 from "../../public/img/slider_img2.jpg";
import img3 from "../../public/img/slider_img3.jpg";
import Image from "next/image";

export default function HeroSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdNavigateNext
        className={className}
        style={{
          ...style,
          display: "block",
          color: "white",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdNavigateBefore
        className={className}
        style={{
          ...style,
          display: "block",
          color: "white",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="lg:container lg:py-6 lg:px-32">
      <div className="slider-container relative">
        <Slider
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
          speed={900}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          responsive={[
            {
              breakpoint: 1080,
              settings: {
                arrows: false,
              },
            },
          ]}
        >
          <div>
            <Image
              src={img1}
              width={700}
              height={200}
              alt="slider"
              className="w-[770px] h-[420px] object-cover"
            />
          </div>

          <div>
            <Image
              src={img2}
              width={700}
              height={200}
              alt="slider"
              className="w-[770px] h-[420px] object-cover"
            />
          </div>

          <div>
            <Image
              src={img3}
              width={700}
              height={200}
              alt="slider"
              className="w-[770px] h-[420px] object-cover"
            />
          </div>
        </Slider>

        <div className="bg-white p-4 md:p-10 h-[350px] max-w-[600px] md:absolute top-24 right-0 md:shadow-lg">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            fade={true}
            speed={1200}
          >
            <div className="space-y-6 text-justify">
              <h2 className="text-3xl font-bold">
                Title text for slider div 1
              </h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, eligendi. Necessitatibus aliquid, distinctio autem
                reprehenderit dolorum consequuntur ullam cum explicabo harum vel
                soluta quam et quasi aliquam numquam natus deleniti!
              </h3>
            </div>
            <div className="space-y-6 text-justify">
              <h2 className="text-3xl font-bold">
                Title text for slider div 2
              </h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                sed. Numquam quo in quos nulla natus, atque soluta! Voluptate
                quod illo similique nemo nulla odit architecto distinctio dicta
                unde voluptatum?
              </h3>
            </div>
            <div className="space-y-6 text-justify">
              <h2 className="text-3xl font-bold">
                Title text for slider div 3
              </h2>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis ratione repellat est blanditiis perspiciatis mollitia
                obcaecati quibusdam sed delectus, illum amet facere optio
                officia deleniti laborum provident dolorum, doloribus magnam.
                reprehenderit dolorum consequuntur ullam cum explicabo harum
                vel.
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
