import Image from "next/image";
import Link from "next/link";

// Import social media icons
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

// Import additional podcast icons
import {
  SiSpotify,
  SiApplepodcasts,
  SiAmazonmusic,
  SiCastbox,
  SiIheartradio,
  SiOvercast,
  SiPocketcasts,
} from "react-icons/si";

const logo = (
  <svg
    viewBox="0 0 672 150"
    fill="none"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.889 28.1793H48.5643V40.77H14.889V28.1793ZM16.0882 56.9581H54.1601V69.9485H0V0H52.8611V12.9904H16.0882V56.9581Z"
      fill="white"
    />
    <path
      d="M58.9714 69.9485L81.5298 38.8464V47.6899L59.9457 17.4871H73.7356L88.6496 38.5466L82.8788 38.6216L97.568 17.4871H110.758L89.3241 47.1653V38.4717L112.032 69.9485H98.0177L82.5791 47.6899H88.125L72.9112 69.9485H58.9714Z"
      fill="white"
    />
    <path
      d="M116.784 69.9485V17.4871H139.493C144.189 17.4871 148.236 18.2616 151.634 19.8104C155.031 21.3093 157.654 23.4827 159.503 26.3306C161.352 29.1785 162.276 32.576 162.276 36.5231C162.276 40.4202 161.352 43.7928 159.503 46.6407C157.654 49.4886 155.031 51.687 151.634 53.2358C148.236 54.7347 144.189 55.4842 139.493 55.4842H123.529L128.925 50.0132V69.9485H116.784ZM128.925 51.3622L123.529 45.5914H138.818C142.565 45.5914 145.363 44.792 147.212 43.1932C149.061 41.5944 149.985 39.371 149.985 36.5231C149.985 33.6252 149.061 31.3769 147.212 29.7781C145.363 28.1793 142.565 27.3798 138.818 27.3798H123.529L128.925 21.6091V51.3622Z"
      fill="white"
    />
    <path
      d="M182.11 38.6216H207.367V48.0646H182.11V38.6216ZM183.01 60.2057H211.564V69.9485H170.944V17.4871H210.59V27.23H183.01V60.2057Z"
      fill="white"
    />
    <path
      d="M221.224 69.9485V17.4871H243.932C248.629 17.4871 252.676 18.2616 256.073 19.8104C259.471 21.3093 262.094 23.4827 263.943 26.3306C265.791 29.1785 266.716 32.576 266.716 36.5231C266.716 40.4202 265.791 43.7928 263.943 46.6407C262.094 49.4386 259.471 51.587 256.073 53.0859C252.676 54.5848 248.629 55.3343 243.932 55.3343H227.969L233.365 50.0132V69.9485H221.224ZM254.575 69.9485L241.459 50.9125H254.425L267.69 69.9485H254.575ZM233.365 51.3622L227.969 45.6664H243.258C247.005 45.6664 249.803 44.867 251.652 43.2681C253.5 41.6194 254.425 39.371 254.425 36.5231C254.425 33.6252 253.5 31.3769 251.652 29.7781C249.803 28.1793 247.005 27.3798 243.258 27.3798H227.969L233.365 21.6091V51.3622Z"
      fill="white"
    />
    <path
      d="M286.47 69.9485V27.3798H269.682V17.4871H315.399V27.3798H298.611V69.9485H286.47Z"
      fill="white"
    />
    <path
      d="M320.84 39.2211L325.786 21.2344L327.435 28.0543C325.287 28.0543 323.513 27.4298 322.114 26.1807C320.765 24.8817 320.09 23.133 320.09 20.9346C320.09 18.7862 320.79 17.0624 322.189 15.7634C323.588 14.4144 325.312 13.7399 327.36 13.7399C329.458 13.7399 331.182 14.4144 332.531 15.7634C333.88 17.0624 334.555 18.7862 334.555 20.9346C334.555 21.5841 334.505 22.2336 334.405 22.8832C334.355 23.4827 334.18 24.2072 333.88 25.0566C333.63 25.9059 333.206 27.0301 332.606 28.4291L328.259 39.2211H320.84Z"
      fill="white"
    />
    <path
      d="M361.271 70.8478C357.074 70.8478 353.052 70.2983 349.205 69.1991C345.358 68.0499 342.26 66.576 339.912 64.7773L344.034 55.634C346.282 57.2329 348.93 58.5569 351.978 59.6061C355.076 60.6054 358.199 61.105 361.346 61.105C363.745 61.105 365.668 60.8802 367.117 60.4305C368.616 59.9309 369.715 59.2564 370.415 58.407C371.114 57.5576 371.464 56.5833 371.464 55.4842C371.464 54.0852 370.914 52.986 369.815 52.1866C368.716 51.3372 367.267 50.6627 365.468 50.1631C363.67 49.6135 361.671 49.1138 359.473 48.6642C357.324 48.1645 355.151 47.565 352.953 46.8655C350.804 46.166 348.831 45.2667 347.032 44.1675C345.233 43.0683 343.759 41.6194 342.61 39.8207C341.511 38.022 340.961 35.7237 340.961 32.9258C340.961 29.928 341.761 27.205 343.36 24.7568C345.008 22.2586 347.457 20.2851 350.704 18.8361C354.002 17.3372 358.124 16.5878 363.07 16.5878C366.368 16.5878 369.615 16.9875 372.813 17.7869C376.011 18.5364 378.833 19.6855 381.282 21.2344L377.534 30.4526C375.086 29.0536 372.638 28.0294 370.19 27.3798C367.742 26.6804 365.343 26.3306 362.995 26.3306C360.647 26.3306 358.723 26.6054 357.224 27.155C355.725 27.7046 354.651 28.4291 354.002 29.3284C353.352 30.1778 353.027 31.177 353.027 32.3262C353.027 33.6752 353.577 34.7744 354.676 35.6238C355.775 36.4232 357.224 37.0727 359.023 37.5723C360.822 38.072 362.795 38.5716 364.944 39.0712C367.142 39.5709 369.315 40.1454 371.464 40.795C373.662 41.4445 375.661 42.3188 377.459 43.418C379.258 44.5172 380.707 45.9662 381.806 47.7648C382.955 49.5635 383.53 51.8368 383.53 54.5848C383.53 57.5326 382.706 60.2307 381.057 62.6789C379.408 65.1271 376.935 67.1006 373.637 68.5995C370.39 70.0984 366.268 70.8478 361.271 70.8478Z"
      fill="white"
    />
    <path
      d="M436.109 69.9485L405.931 0H423.418L449.799 61.9544H439.506L466.286 0H482.375L452.097 69.9485H436.109Z"
      fill="white"
    />
    <path
      d="M513.086 70.8478C508.939 70.8478 505.092 70.1733 501.545 68.8243C498.047 67.4753 495 65.5767 492.402 63.1285C489.854 60.6803 487.855 57.8074 486.406 54.5099C485.007 51.2123 484.308 47.6149 484.308 43.7178C484.308 39.8207 485.007 36.2233 486.406 32.9258C487.855 29.6282 489.878 26.7553 492.477 24.3071C495.075 21.8589 498.122 19.9603 501.62 18.6113C505.117 17.2623 508.914 16.5878 513.011 16.5878C517.158 16.5878 520.956 17.2623 524.403 18.6113C527.9 19.9603 530.923 21.8589 533.471 24.3071C536.07 26.7553 538.093 29.6282 539.542 32.9258C540.991 36.1734 541.715 39.7707 541.715 43.7178C541.715 47.6149 540.991 51.2373 539.542 54.5848C538.093 57.8824 536.07 60.7553 533.471 63.2035C530.923 65.6017 527.9 67.4753 524.403 68.8243C520.956 70.1733 517.183 70.8478 513.086 70.8478ZM513.011 60.5055C515.36 60.5055 517.508 60.1058 519.457 59.3063C521.455 58.5069 523.204 57.3578 524.703 55.8589C526.202 54.36 527.351 52.5863 528.15 50.5378C529 48.4893 529.424 46.216 529.424 43.7178C529.424 41.2197 529 38.9463 528.15 36.8978C527.351 34.8493 526.202 33.0756 524.703 31.5768C523.254 30.0779 521.53 28.9287 519.532 28.1293C517.533 27.3299 515.36 26.9302 513.011 26.9302C510.663 26.9302 508.49 27.3299 506.491 28.1293C504.543 28.9287 502.819 30.0779 501.32 31.5768C499.821 33.0756 498.647 34.8493 497.798 36.8978C496.998 38.9463 496.599 41.2197 496.599 43.7178C496.599 46.166 496.998 48.4393 497.798 50.5378C498.647 52.5863 499.796 54.36 501.245 55.8589C502.744 57.3578 504.493 58.5069 506.491 59.3063C508.49 60.1058 510.663 60.5055 513.011 60.5055Z"
      fill="white"
    />
    <path d="M550.84 69.9485V17.4871H562.981V69.9485H550.84Z" fill="white" />
    <path
      d="M600.538 70.8478C596.491 70.8478 592.718 70.1983 589.221 68.8993C585.773 67.5503 582.776 65.6517 580.228 63.2035C577.679 60.7553 575.681 57.8824 574.232 54.5848C572.833 51.2872 572.134 47.6649 572.134 43.7178C572.134 39.7707 572.833 36.1484 574.232 32.8508C575.681 29.5532 577.679 26.6804 580.228 24.2322C582.826 21.784 585.848 19.9103 589.296 18.6113C592.743 17.2623 596.516 16.5878 600.613 16.5878C605.159 16.5878 609.256 17.3872 612.904 18.986C616.601 20.5349 619.698 22.8332 622.197 25.8809L614.402 33.0757C612.604 31.0272 610.605 29.5033 608.407 28.504C606.208 27.4548 603.81 26.9302 601.212 26.9302C598.764 26.9302 596.516 27.3299 594.467 28.1293C592.419 28.9287 590.645 30.0779 589.146 31.5768C587.647 33.0756 586.473 34.8493 585.624 36.8978C584.824 38.9463 584.424 41.2197 584.424 43.7178C584.424 46.216 584.824 48.4893 585.624 50.5378C586.473 52.5863 587.647 54.36 589.146 55.8589C590.645 57.3578 592.419 58.5069 594.467 59.3063C596.516 60.1058 598.764 60.5055 601.212 60.5055C603.81 60.5055 606.208 60.0058 608.407 59.0066C610.605 57.9573 612.604 56.3835 614.402 54.285L622.197 61.4797C619.698 64.5275 616.601 66.8508 612.904 68.4496C609.256 70.0484 605.134 70.8478 600.538 70.8478Z"
      fill="white"
    />
    <path
      d="M641.562 38.6216H666.819V48.0646H641.562V38.6216ZM642.462 60.2057H671.016V69.9485H630.396V17.4871H670.041V27.23H642.462V60.2057Z"
      fill="white"
    />
    <path
      d="M0 149.107V96.9008H22.5992C27.2732 96.9008 31.3008 97.6715 34.682 99.2128C38.0632 100.704 40.6736 102.867 42.5134 105.701C44.3531 108.535 45.273 111.916 45.273 115.844C45.273 119.723 44.3531 123.079 42.5134 125.913C40.6736 128.747 38.0632 130.934 34.682 132.476C31.3008 133.967 27.2732 134.713 22.5992 134.713H6.71264L12.0828 129.269V149.107H0ZM12.0828 130.611L6.71264 124.869H21.928C25.6572 124.869 28.4417 124.073 30.2815 122.482C32.1212 120.891 33.0411 118.678 33.0411 115.844C33.0411 112.961 32.1212 110.723 30.2815 109.132C28.4417 107.541 25.6572 106.745 21.928 106.745H6.71264L12.0828 101.003V130.611Z"
      fill="white"
    />
    <path
      d="M79.9865 150.002C75.8594 150.002 72.0307 149.331 68.5004 147.989C65.0198 146.646 61.9866 144.757 59.401 142.32C56.8652 139.884 54.8762 137.025 53.4342 133.744C52.042 130.462 51.3459 126.882 51.3459 123.004C51.3459 119.126 52.042 115.546 53.4342 112.264C54.8762 108.983 56.89 106.124 59.4756 103.688C62.0612 101.251 65.0943 99.362 68.575 98.0195C72.0556 96.6771 75.8346 96.0059 79.9119 96.0059C84.0389 96.0059 87.8179 96.6771 91.2488 98.0195C94.7294 99.362 97.7377 101.251 100.274 103.688C102.859 106.124 104.873 108.983 106.315 112.264C107.757 115.496 108.478 119.076 108.478 123.004C108.478 126.882 107.757 130.487 106.315 133.818C104.873 137.1 102.859 139.959 100.274 142.395C97.7377 144.782 94.7294 146.646 91.2488 147.989C87.8179 149.331 84.0638 150.002 79.9865 150.002ZM79.9119 139.71C82.2489 139.71 84.387 139.312 86.3262 138.517C88.3151 137.721 90.0554 136.578 91.5471 135.086C93.0388 133.595 94.1825 131.829 94.978 129.791C95.8233 127.752 96.246 125.49 96.246 123.004C96.246 120.518 95.8233 118.256 94.978 116.217C94.1825 114.179 93.0388 112.414 91.5471 110.922C90.1051 109.43 88.3897 108.287 86.4008 107.491C84.4118 106.696 82.2489 106.298 79.9119 106.298C77.5749 106.298 75.4119 106.696 73.423 107.491C71.4838 108.287 69.7683 109.43 68.2766 110.922C66.7849 112.414 65.6164 114.179 64.7711 116.217C63.9756 118.256 63.5778 120.518 63.5778 123.004C63.5778 125.44 63.9756 127.703 64.7711 129.791C65.6164 131.829 66.7601 133.595 68.2021 135.086C69.6938 136.578 71.4341 137.721 73.423 138.517C75.4119 139.312 77.5749 139.71 79.9119 139.71Z"
      fill="white"
    />
    <path
      d="M117.559 149.107V96.9008H141.277C146.945 96.9008 151.942 97.9947 156.268 100.182C160.594 102.32 163.975 105.328 166.412 109.207C168.848 113.085 170.066 117.684 170.066 123.004C170.066 128.274 168.848 132.874 166.412 136.801C163.975 140.68 160.594 143.713 156.268 145.9C151.942 148.038 146.945 149.107 141.277 149.107H117.559ZM129.641 139.188H140.68C144.161 139.188 147.169 138.542 149.705 137.249C152.29 135.907 154.279 134.017 155.671 131.581C157.113 129.145 157.834 126.286 157.834 123.004C157.834 119.673 157.113 116.814 155.671 114.427C154.279 111.991 152.29 110.126 149.705 108.834C147.169 107.491 144.161 106.82 140.68 106.82H129.641V139.188Z"
      fill="white"
    />
    <path
      d="M204.164 150.002C200.137 150.002 196.383 149.356 192.902 148.063C189.471 146.721 186.488 144.831 183.952 142.395C181.416 139.959 179.427 137.1 177.985 133.818C176.593 130.537 175.897 126.932 175.897 123.004C175.897 119.076 176.593 115.471 177.985 112.19C179.427 108.908 181.416 106.049 183.952 103.613C186.538 101.177 189.546 99.3123 192.977 98.0195C196.408 96.6771 200.162 96.0059 204.239 96.0059C208.764 96.0059 212.841 96.8014 216.471 98.3924C220.151 99.9338 223.233 102.221 225.72 105.254L217.963 112.414C216.173 110.375 214.184 108.859 211.996 107.864C209.808 106.82 207.421 106.298 204.836 106.298C202.399 106.298 200.162 106.696 198.123 107.491C196.084 108.287 194.319 109.43 192.828 110.922C191.336 112.414 190.167 114.179 189.322 116.217C188.527 118.256 188.129 120.518 188.129 123.004C188.129 125.49 188.527 127.752 189.322 129.791C190.167 131.829 191.336 133.595 192.828 135.086C194.319 136.578 196.084 137.721 198.123 138.517C200.162 139.312 202.399 139.71 204.836 139.71C207.421 139.71 209.808 139.213 211.996 138.219C214.184 137.174 216.173 135.608 217.963 133.52L225.72 140.68C223.233 143.713 220.151 146.025 216.471 147.616C212.841 149.207 208.739 150.002 204.164 150.002Z"
      fill="white"
    />
    <path
      d="M226.07 149.107L249.341 96.9008H261.274L284.619 149.107H271.94L252.846 103.016H257.62L238.451 149.107H226.07ZM237.706 137.92L240.913 128.747H267.763L271.045 137.92H237.706Z"
      fill="white"
    />
    <path
      d="M307.191 150.002C303.014 150.002 299.011 149.455 295.183 148.361C291.354 147.218 288.271 145.751 285.934 143.961L290.036 134.862C292.274 136.453 294.909 137.771 297.942 138.815C301.025 139.81 304.133 140.307 307.265 140.307C309.652 140.307 311.566 140.083 313.008 139.636C314.5 139.138 315.594 138.467 316.29 137.622C316.986 136.777 317.334 135.807 317.334 134.713C317.334 133.321 316.787 132.227 315.693 131.432C314.599 130.586 313.157 129.915 311.367 129.418C309.577 128.871 307.588 128.374 305.401 127.926C303.263 127.429 301.1 126.833 298.912 126.136C296.774 125.44 294.81 124.545 293.02 123.452C291.23 122.358 289.763 120.916 288.619 119.126C287.525 117.336 286.978 115.049 286.978 112.264C286.978 109.281 287.774 106.571 289.365 104.135C291.006 101.649 293.442 99.6852 296.674 98.2433C299.956 96.7517 304.058 96.0059 308.981 96.0059C312.262 96.0059 315.494 96.4036 318.677 97.1991C321.859 97.945 324.668 99.0885 327.105 100.63L323.376 109.803C320.939 108.411 318.503 107.392 316.066 106.745C313.63 106.049 311.243 105.701 308.906 105.701C306.569 105.701 304.655 105.975 303.163 106.522C301.671 107.069 300.602 107.79 299.956 108.685C299.31 109.53 298.986 110.524 298.986 111.668C298.986 113.01 299.533 114.104 300.627 114.949C301.721 115.745 303.163 116.391 304.953 116.888C306.743 117.386 308.707 117.883 310.845 118.38C313.033 118.877 315.196 119.449 317.334 120.095C319.522 120.742 321.511 121.612 323.301 122.706C325.091 123.8 326.533 125.241 327.627 127.031C328.771 128.821 329.342 131.084 329.342 133.818C329.342 136.752 328.522 139.437 326.881 141.873C325.24 144.309 322.779 146.273 319.497 147.765C316.265 149.256 312.163 150.002 307.191 150.002Z"
      fill="white"
    />
    <path
      d="M347.685 149.107V106.745H330.978V96.9008H376.475V106.745H359.768V149.107H347.685Z"
      fill="white"
    />
  </svg>
);

export default function Home() {
  return (
    <div>
      <header className="px-gutter py-8 bg-primary text-white">
        <div className="max-w-container-default mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="w-fit block h-12">
              {logo}
            </Link>

            <div className="flex items-center gap-8">
              <Link
                href="/about"
                className="uppercase font-semibold hover:text-dark transition-colors"
              >
                Episodes
              </Link>
              <Link
                href="/contact"
                className="uppercase font-semibold hover:text-dark transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="px-gutter py-section-default lg:py-28 lg:pt-12 bg-primary text-white">
          <div className="max-w-container-default mx-auto grid grid-cols-1 md:grid-cols-6 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 col-span-4">
              <h1 className="text-h1 font-bold">Real Experts. Real Answers.</h1>
              <p className="text-lg">
                Navigating the legal world can be overwhelming. The Expert's
                Voice Podcast brings you in-depth conversations with top legal
                professionals, answering the questions that matter most. Whether
                you're preparing for a legal case, looking for expert insights,
                or just want to stay informed, we've got you covered.
              </p>
              <div className="flex items-center gap-4 mt-12">
                <button className="button is-dark mr-4">
                  See all episodes
                </button>

                <div className="flex items-center gap-6">
                  <Link href="#" className="hover:text-dark">
                    <SiSpotify size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiApplepodcasts size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiAmazonmusic size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiCastbox size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiIheartradio size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiOvercast size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiPocketcasts size={32} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - New Episode */}
            <Link
              href="/"
              className="relative col-span-2 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg border-4 border-dark aspect-square">
                <Image
                  src="/sample-episode-art.png"
                  alt="Episode 1 Thumbnail"
                  width={400}
                  height={400}
                  className=""
                />
                <div className="absolute flex items-center justify-center inset-0 bg-light capitalize opacity-0 group-hover:opacity-95 transition-opacity duration-300 font-bold text-xl text-dark">
                  <div className="flex items-center gap-2 -translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    Listen Now
                    <svg
                      className="h-6 text-dark"
                      viewBox="0 0 36 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6.125C9.92109 6.125 3.375 12.6711 3.375 20.75V28.0625C3.375 28.9977 2.62266 29.75 1.6875 29.75C0.752344 29.75 0 28.9977 0 28.0625V20.75C0 10.8078 8.05781 2.75 18 2.75C27.9422 2.75 36 10.8078 36 20.75V28.0625C36 28.9977 35.2477 29.75 34.3125 29.75C33.3773 29.75 32.625 28.9977 32.625 28.0625V20.75C32.625 12.6711 26.0789 6.125 18 6.125ZM5.625 25.25C5.625 22.768 7.64297 20.75 10.125 20.75H11.25C12.4945 20.75 13.5 21.7555 13.5 23V32C13.5 33.2445 12.4945 34.25 11.25 34.25H10.125C7.64297 34.25 5.625 32.232 5.625 29.75V25.25ZM25.875 20.75C28.357 20.75 30.375 22.768 30.375 25.25V29.75C30.375 32.232 28.357 34.25 25.875 34.25H24.75C23.5055 34.25 22.5 33.2445 22.5 32V23C22.5 21.7555 23.5055 20.75 24.75 20.75H25.875Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center group-hover:-translate-y-10 transition-transform duration-300 gap-4 absolute uppercase -top-5 right-1/2 translate-x-1/2 p-2 bg-dark rounded-full font-bold text-lg text-nowrap pr-7">
                <div className="rounded-full bg-light aspect-square w-8 p-1.5">
                  <svg
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7188 8.0625V21.5C13.7188 25.9512 17.3301 29.5625 21.7812 29.5625C26.2324 29.5625 29.8438 25.9512 29.8438 21.5H23.125C22.3859 21.5 21.7812 20.8953 21.7812 20.1562C21.7812 19.4172 22.3859 18.8125 23.125 18.8125H29.8438V16.125H23.125C22.3859 16.125 21.7812 15.5203 21.7812 14.7812C21.7812 14.0422 22.3859 13.4375 23.125 13.4375H29.8438V10.75H23.125C22.3859 10.75 21.7812 10.1453 21.7812 9.40625C21.7812 8.66719 22.3859 8.0625 23.125 8.0625H29.8438C29.8438 3.61133 26.2324 0 21.7812 0C17.3301 0 13.7188 3.61133 13.7188 8.0625ZM32.5312 20.1562V21.5C32.5312 27.4377 27.7189 32.25 21.7812 32.25C15.8436 32.25 11.0312 27.4377 11.0312 21.5V18.1406C11.0312 17.0236 10.1326 16.125 9.01562 16.125C7.89863 16.125 7 17.0236 7 18.1406V21.5C7 28.983 12.5598 35.1643 19.7656 36.1469V38.9688H15.7344C14.6174 38.9688 13.7188 39.8674 13.7188 40.9844C13.7188 42.1014 14.6174 43 15.7344 43H21.7812H27.8281C28.9451 43 29.8438 42.1014 29.8438 40.9844C29.8438 39.8674 28.9451 38.9688 27.8281 38.9688H23.7969V36.1469C31.0027 35.1643 36.5625 28.983 36.5625 21.5V18.1406C36.5625 17.0236 35.6639 16.125 34.5469 16.125C33.4299 16.125 32.5312 17.0236 32.5312 18.1406V20.1562Z"
                      fill="#001845"
                    />
                  </svg>
                </div>
                <span>New Episode</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Episodes Section */}
        <section className="px-gutter py-section-default bg-gray-50">
          <div className="max-w-container-default mx-auto">
            <h2 className="text-h2 font-bold text-center mb-12">
              Recent Episodes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[1, 2, 3, 4, 5, 6].map((episode) => (
                <Link
                  href="/"
                  key={episode}
                  className="bg-blue-100 group hover:-translate-y-2 duration-300 border-2 border-primary p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <Image
                    src={`/sample-episode-art.png`}
                    alt={`Episode ${episode} Thumbnail`}
                    width={400}
                    height={400}
                    className="w-24 aspect-square group-hover:scale-105 transition-transform duration-300 object-cover mb-6 rounded-md border-2 -mt-12 shadow-lg border-dark"
                  />

                  <h3 className="font-semibold text-2xl mb-2">
                    Donovan Francis Breaks Down Business Immigration for
                    Employers
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Guest Name | Season X, Episode {episode}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex group-hover:translate-x-2 transition-transform duration-300 items-center gap-2 font-bold">
                      Listen Now
                      <svg
                        className="h-5 text-primary"
                        viewBox="0 0 36 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6.125C9.92109 6.125 3.375 12.6711 3.375 20.75V28.0625C3.375 28.9977 2.62266 29.75 1.6875 29.75C0.752344 29.75 0 28.9977 0 28.0625V20.75C0 10.8078 8.05781 2.75 18 2.75C27.9422 2.75 36 10.8078 36 20.75V28.0625C36 28.9977 35.2477 29.75 34.3125 29.75C33.3773 29.75 32.625 28.9977 32.625 28.0625V20.75C32.625 12.6711 26.0789 6.125 18 6.125ZM5.625 25.25C5.625 22.768 7.64297 20.75 10.125 20.75H11.25C12.4945 20.75 13.5 21.7555 13.5 23V32C13.5 33.2445 12.4945 34.25 11.25 34.25H10.125C7.64297 34.25 5.625 32.232 5.625 29.75V25.25ZM25.875 20.75C28.357 20.75 30.375 22.768 30.375 25.25V29.75C30.375 32.232 28.357 34.25 25.875 34.25H24.75C23.5055 34.25 22.5 33.2445 22.5 32V23C22.5 21.7555 23.5055 20.75 24.75 20.75H25.875Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="button mx-auto">View All Episodes</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-container-default mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="w-fit mb-4 block">
              {logo}
            </Link>
            <p className="text-gray-400 mb-6">
              Bringing expert insights and transformative conversations to your
              ears.
            </p>

            {/* Podcast Platforms */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaSpotify size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaApple size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-4">
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/episodes"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Episodes
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} The Experts Voice Podcast. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
