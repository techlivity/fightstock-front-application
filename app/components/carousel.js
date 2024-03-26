"use client"
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles/styles.css"
import Image from 'next/image';
import juJitsu from "../public/juJitsu.png"
import boxing from "../public/boxing.png"
import taekwondo from "../public/taekwondo.jpg"
import karate from "../public/karate.jpg"
import kungFu from "../public/kungFu.jpg"
import kickBoxing from "../public/kickBoxing.jpg"

const Carousel_Component = ({items}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 2,
      spacing: 5,
    },
      loop: true,
    },
    
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div className="navigation-wrapper w-11/12 items-center m-auto ">
        <div ref={sliderRef} className="keen-slider rounded-3xl mt-16">
          <div className="keen-slider__slide number-slide1"><Image className="w-full" src={juJitsu}></Image></div>
          <div className="keen-slider__slide number-slide2"><Image className="w-full mt-40" src={boxing}></Image></div>
          <div className="keen-slider__slide number-slide3"><Image className="w-full" src={karate}></Image></div>
          <div className="keen-slider__slide number-slide4"><Image className="w-full" src={kungFu}></Image></div>
          <div className="keen-slider__slide number-slide5"><Image className="w-full h-full" src={kickBoxing}></Image></div>
          <div className="keen-slider__slide number-slide6"><Image className="w-full" src={taekwondo}></Image></div>
        </div>
        <div className='flex m-auto w-full justify-center mt-6'>  
          <h1 className='font-protest-guerrila flex text-5xl text-zinc-50 drop-shadow-lg'>Com a FightStock, o poder está sempre em suas mãos</h1>
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <div className="relative w-[107%] items-center right-12 bottom-52">
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  )
}


export default Carousel_Component;