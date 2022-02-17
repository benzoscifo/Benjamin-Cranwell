import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Sustainability() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
          <div>
            <StaticImage
              className="object-cover object-center rounded"
              alt="google lighthouse"
              src="../images/lighthouse-logo.png"
              placeholder="tracedSVG"
              rotate="90"
              layout="constrained"
            />
          </div>
          <div className="self-center">
            <h1 className="title-font sm:text-4xl text-3xl px-5 mt-6 font-medium text-gray-900 pb-6">
              <span className="text-blue font-semibold">U</span>
              <span className="text-argos font-semibold">X</span> and
              <span className="text-orange"> S</span>ustain
              <span className="text-green">a</span>bility
            </h1>
            <p className="mx-20">
              <b>UX</b> Deginers can make small decisions early on in the design
              process that can greatly benefit the{" "}
              <span className="text-blue">user</span>, the{" "}
              <span className="text-green">planet</span> and the development
              team
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-center py-12">
          Below are some <span className="text-yellow-400">alternative</span>{" "}
          ideas on how to make <span className="text-argos">your</span> web page
          more
          <span className="text-green"> sustainable</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          <div className="p-8">
            <h3 className="text-2xl font-semibold pb-4 text-yellow-400">
              Carousel
            </h3>
            <p>
              Carousels can be very Javascipt heavy which may increase page load
              times
            </p>
            <p>They generally have poor accessibility rating</p>
            <p className="pb-8">
              Research shows that they aren't always the best way to present
              home page content{" "}
            </p>
            <StaticImage
              alt="carousel image"
              layout="constrained"
              placeholder="tracedSVG"
              src="../images/carousel.png"
            />
          </div>
          <div className="self-center text-4xl font-bold">VS</div>
          <div className="pb-14 py-8 sm:pb-8 sm:py-8">
            <h3 className="text-2xl font-semibold pb-4">
              <span className="text-green">Static</span> Image
            </h3>
            <p>Images can be compressed and lazy loaded to reduce size</p>
            <p>They are easier to made accessible in comparison to carousels</p>
            <p className="pb-8">
              A well chosen image can more beneficial than several images on
              rotation.
            </p>
            <StaticImage
              height={400}
              alt="yellow car"
              layout="constrained"
              placeholder="tracedSVG"
              src="../images/lotus.jpeg"
            />
          </div>
        </div>
        <hr></hr>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          <div className="pt-16 py-8 sm:pt-8 py-8">
            <h3 className="text-2xl font-semibold pb-4">
              Webpage with <span className="text-orange">multiple</span> videos
            </h3>
            <p>
              Videos are extremely large assests to download and can increase
              load times massively hurting SEO rankings
            </p>
            <p className="pb-8">
              Videos that play automatically can be unpleasant for many users
            </p>
            <StaticImage
              alt="carousel image"
              layout="constrained"
              placeholder="tracedSVG"
              src="../images/multiple-videos.png"
            />
          </div>
          <div className="self-center text-4xl font-bold">VS</div>
          <div className="pb-14 py-8 sm:pb-8 sm:py-8">
            <h3 className="text-2xl font-semibold pb-4">
              Webpage with a <span className="text-green">single</span> video
            </h3>
            <p>
              Videos can help build a bridge between your brand and your
              customers{" "}
            </p>
            <p className="pb-8">
              Videos can be lazy loaded and only downloaded when the user
              presses play{" "}
            </p>

            <StaticImage
              alt="yellow car"
              layout="constrained"
              placeholder="tracedSVG"
              src="../images/hero-video.jpg"
            />
          </div>
        </div>
        <hr></hr>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          <div className="pt-16 py-8 sm:pt-8 py-8">
            <h3 className="text-2xl font-semibold pb-4">
              Multiple <span className="text-yellow-400">Images</span>
            </h3>
            <p>
              Images are important for many website in connecting their brand to
              the user however too many images can bloat the webpage size
            </p>
            <p className="pb-8">
              As Images are only second to Videos for file size they can
              seriously reduce page load times again hurting your SEO rankings
            </p>
            <StaticImage
              alt="carousel image"
              layout="constrained"
              placeholder="tracedSVG"
              src="../images/multiple-images.png"
            />
          </div>
          <div className="self-center text-4xl font-bold">VS</div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold pb-4">
              <span className="text-green">Less</span> videos
            </h3>
            <p>Images can be compressed to reduce file size</p>
            <p className="pb-8">
              Images can be lazy loaded to reduce load times but you still
              should be try and reduce the number of images on your website
            </p>
            <StaticImage
              alt="yellow car"
              layout="constrained"
              placeholder="tracedSVG"
              src="../images/single-image.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
