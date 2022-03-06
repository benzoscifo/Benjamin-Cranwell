import * as React from "react"
import Helmet from "react-Helmet"
import { withPrefix } from "gatsby"
import "./journey.css"
import "../styles/global.css"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function journey() {
  return (
    <Layout>
      <div className="journey">
        <Helmet>
          <script src={withPrefix("script.js")} type="text/javascript" />
        </Helmet>
        <div className="line-container">
          <span>
            <svg
              viewBox="0 0 161 215"
              fill="none"
              preserveAspectRatio="xMidYMax meet"
              display="inline-block"
            >
              <path
                d="M82.5689 0V78.5M82.5689 78.5C71.4474 81.1476 68.4647 86.121 60.5689 94C52.6731 101.879 45.9185 113.803 47.5689 115C40.5769 126.86 38.1718 133.422 36.0689 145L24.5689 168C19.8708 168.386 17.4566 167.005 13.5689 161.5L10.0689 153.5C10.0689 153.5 6.56889 145 3.06889 145C-0.431111 145 1.56889 153.5 1.56889 153.5L6.56889 171C10.7221 177.18 14.278 178.797 22.0689 179.5C28.7157 179.404 31.5858 178.002 36.0689 174.5C40.536 169.599 43.1925 166.886 45.5689 161.5C50.8649 155.518 52.7809 151.814 55.5689 145C57.4058 152.203 59.2662 155.904 65.0689 161.5L60.5689 173L57.5689 199.5L45.5689 206.5C45.5689 206.5 42.5688 210 45.5689 212.5C48.5689 215 49.0689 212.5 49.0689 212.5C55.2647 210.932 58.7846 208.687 65.0689 204.5L69.0689 174.5C76.617 168.401 80.1404 164.58 85.0689 157C88.8103 150.533 90.0761 146.373 90.0689 137.5C97.1449 141.527 101.084 142.29 108.069 141.5C110.114 138.492 110.949 136.6 110.569 132C114.51 129.56 116.039 127.47 118.069 123C118.069 123 121.569 120 124.569 121.5C127.569 123 126.569 127 126.569 127L120.069 134.5C117.308 138.531 116.848 140.832 118.069 145L110.569 150.5C108.534 155.905 110.228 156.058 114.069 155.5C117.584 154.719 119.554 154.281 123.069 153.5L126.569 137.5L135.569 127V110L143.069 100L151.069 105.5L160.069 101.5L151.069 83L145.569 78.5L135.569 71.5L133.069 78.5L137.069 83L130.069 98H118.069L106.069 86.5C98.1559 79.9035 93.0375 78.0786 82.5689 78.5Z"
                stroke="#35D675"
              />
            </svg>
          </span>
        </div>
        <div className="container mx-auto px-5 py-24 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
            <div className="self-center">
              <h2 className="text-2xl font-semibold text-green">Ireland</h2>
              <p className="text-base">School</p>
            </div>
            <div>
              <StaticImage
                alt="argos mobile homepage"
                src="../images/argos-prototype1.png"
              />
            </div>
            <div className="self-center">
              <h2 className="text-2xl font-semibold text-green">Ireland</h2>
              <p className="text-base">Pubs</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-24 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
            <div className="self-center">
              <h2 className="text-2xl font-semibold">New Zealand</h2>
              <p className="text-base">Books</p>
            </div>
            <div>
              <StaticImage
                alt="argos mobile homepage"
                src="../images/argos-prototype1.png"
              />
            </div>
            <div className="self-center">
              <h2 className="text-2xl font-semibold">New Zealand</h2>
              <p className="text-base">Rugby</p>
              <p className="text-base">Motorbike</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-24 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
            <div className="self-center">
              <h2 className="text-2xl font-semibold text-gold">Australia</h2>
              <p className="text-base">Army</p>
            </div>
            <div>
              <StaticImage
                alt="argos mobile homepage"
                src="../images/argos-prototype1.png"
              />
            </div>
            <div className="self-center">
              <h2 className="text-2xl font-semibold text-gold">Australia</h2>
              <p className="text-base">Iraq Community house building</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 pt-24 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
            <div className="self-center">
              <h2 className="text-2xl font-semibold text-argos">
                United Kingdom
              </h2>
              <p className="text-base">University Web Development Course</p>
            </div>
            <div>
              <StaticImage
                alt="argos mobile homepage"
                src="../images/argos-prototype1.png"
              />
            </div>
            <div className="self-center">
              <h2 className="text-2xl font-semibold text-argos">
                United Kingdom
              </h2>
              <p className="text-base">House Kids DD</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 pt-9 invisible">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
            <div className="self-center">
              <div className="text-base">Before</div>
            </div>
            <div>
              <StaticImage
                alt="argos mobile homepage"
                src="../images/argos-prototype1.png"
              />
            </div>
            <div className="self-center">
              <div className="text-base">After</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-12 mx-auto text-gray-400">
        <div className="flex justify-around">
          <div>
            <a
              href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
