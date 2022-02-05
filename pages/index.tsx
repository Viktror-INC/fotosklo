import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
/**Translator */
import useTranslation from "next-translate/useTranslation";
// @ts-ignore SLIDER
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/sliderImg/0.jpg",
    thumbnail: "/images/sliderImg/0.jpg",
  },
  {
    original: "/images/sliderImg/1.jpg",
    thumbnail: "/images/sliderImg/1.jpg",
  },
  {
    original: "/images/sliderImg/3.jpg",
    thumbnail: "/images/sliderImg/3.jpg",
  },
  {
    original: "/images/sliderImg/4.jpg",
    thumbnail: "/images/sliderImg/4.jpg",
  },
];

const advantages = [
  {
    name: "consulatation",
    images: "/images/about-us/support_1.png",
    description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
  },
  {
    name: "bestTeam",
    images: "/images/about-us/team_1.png",
    description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
  },
];

import { useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  /**Link */
  const router = useRouter();
  const { locale } = router;

  console.log("locale", locale);

  const navList = [
    { name: "photo_in_glass", link: "#photo_in_glass" },
    { name: "retouch_photo", link: "#retouch_photo" },
    { name: "fastening_glass", link: "#fastening_glass" },
    { name: "plates", link: "#plates" },
    { name: "print_on_glass", link: "#print_on_glass" },
    { name: "feedback", link: "#feedback" },
  ];
  const phoneNumber = [
    { text: "(044) 222-55-96", link: "(044) 222-55-96" },
    { text: "(096) 170-44-38", link: "(096) 170-44-38" },
    { text: "(097) 139-49-89", link: "(097) 139-49-89" },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerWrap}>
            <Link href="/">
              <a className={styles.logo}>
                <Image src="/logo.png" alt="logo" width="150" height="57" />
              </a>
            </Link>
            <ul className={styles.navigation}>
              {navList.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link}>{t(item.name)}</a>
                  </li>
                );
              })}
            </ul>
            <div className={styles.contacts}>
              {phoneNumber.map((item, index) => {
                return (
                  <a key={index} href={`tel:${item.link}`}>
                    {item.text}
                  </a>
                );
              })}
            </div>
          </div>
          <ul className={styles.languages}>
            <li>
              <Link href="/" locale="uk">
                Український
              </Link>
            </li>
            <li className={styles.slesh}>|</li>
            <li>
              <Link href="/ru" locale="ru">
                Русский
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main id="photo_in_glass" className={styles.main}>
        <div className={styles.mainBackround}>
          <div className={styles.container}>
            <div className={styles.fotoInGlassText}>
              <h2>{t("photo_in_glass")}</h2>
              <p>{t("intersing")}</p>
            </div>
            <div className={styles.sliderWrap}>
              <ImageGallery
                autoPlay={true}
                infinite
                showThumbnails={false}
                showPlayButton={false}
                items={images}
              />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.aboutUs}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/sliderImg/3.jpg"
                alt="photo 1"
                width={520}
                height={550}
              />
            </div>
            <div className={styles.aboutUsTextWrap}>
              <span className={styles.subTitle}>{t("aboutUs")}</span>
              <p className={styles.aboutUsSpecial}>{t("specializing")}</p>
              <p className={styles.aboutUsDescr}>
                {t("specializingDescription")}
              </p>
              <ul className={styles.advantages}>
                {advantages.map((item, key) => {
                  return (
                    <li key={key}>
                      <Image
                        src={item.images}
                        alt="photo 1"
                        width="50"
                        height="50"
                        layout="fixed"
                      />
                      <span>{t(item.name)}</span>
                      {/* <p>{item.description}</p> */}
                    </li>
                  );
                })}
              </ul>
              <button className={styles.callUsButton}>{t("buttonCall")}</button>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
